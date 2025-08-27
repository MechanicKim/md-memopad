import { useState } from "react";
import { marked } from "marked";
import { readTextFile, writeTextFile, mkdir, exists } from "@tauri-apps/plugin-fs";
import {
  open as openDialog,
} from "@tauri-apps/plugin-dialog";
import { documentDir } from "@tauri-apps/api/path";

// 오늘 날짜를 YYMMDD 형식으로 반환하는 함수
const getTodayDateString = () => {
  const today = new Date();
  const year = today.getFullYear().toString().slice(-2); // 마지막 2자리
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
};

function extractFileNameFromPath(filePath: string) {
  return filePath
    .split("/")
    .pop()
    ?.replace(/\.[^/.]+$/, "") || "새 메모";
}

export default function useMarkdownEditor() {
  const [markdown, setMarkdown] = useState(
    "# 새로운 메모\n\n여기에 마크다운으로 메모를 작성하세요..."
  );
  const [fileName, setFileName] = useState(getTodayDateString());
  const [isEditing, setIsEditing] = useState(true);

  // 마크다운을 HTML로 변환
  const getHtml = () => {
    return { __html: marked(markdown) };
  };

  // 파일 열기
  const handleOpenFile = async () => {
    console.log("파일 열기 시작...");
    try {
      const filePath = await openDialog({
        multiple: false,
        filters: [
          {
            name: "Markdown Files",
            extensions: ["md", "markdown"],
          },
          {
            name: "All Files",
            extensions: ["*"],
          },
        ],
      });

      console.log("선택된 파일 경로:", filePath);

      if (filePath) {
        const content = await readTextFile(filePath);
        setMarkdown(content);

        // 파일명 추출
        const name = extractFileNameFromPath(filePath);
        setFileName(name);
        console.log("파일 열기 완료");
      } else {
        console.log("파일 선택이 취소되었습니다.");
      }
    } catch (error) {
      console.error("파일 열기 오류:", error);
      alert(`파일을 열 수 없습니다: ${error}`);
    }
  };

  // 오늘 날짜를 YYMMDD 형식으로 반환
  const getTodayDateStringLocal = () => {
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2); // 마지막 2자리
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
  };

  // 메모 저장 디렉토리 경로 생성
  const getMemoPath = async () => {
    const document = await documentDir();
    return `${document}/memos`;
  };

  // 파일 저장 (자동으로 YYMMDD 형식으로 저장)
  const handleSaveFile = async () => {
    console.log("파일 저장 시작...");
    try {
      // 메모 디렉토리가 없으면 생성
      const memoDir = await getMemoPath();
      const dirExists = await exists(memoDir);
      if (!dirExists) {
        await mkdir(memoDir, { recursive: true });
        console.log("메모 디렉토리 생성:", memoDir);
      }

      // 파일 경로 생성
      const dateString = getTodayDateStringLocal();
      const filePath = `${memoDir}/${dateString}.md`;
      
      // 파일 저장
      await writeTextFile(filePath, markdown);
      
      // 파일명 업데이트
      setFileName(dateString);
      
      alert(`메모가 저장되었습니다.\n위치: ${filePath}`);
      console.log("파일 저장 완료:", filePath);
    } catch (error) {
      console.error("파일 저장 오류:", error);
      alert(`파일을 저장할 수 없습니다: ${error}`);
    }
  };

  // 새 메모 시작
  const handleNewMemo = () => {
    const todayDate = getTodayDateStringLocal();
    setMarkdown("# 새로운 메모\n\n여기에 마크다운으로 메모를 작성하세요...");
    setFileName(todayDate);
    setIsEditing(true);
  };

  return {
    fileName,
    isEditing,
    markdown,
    setIsEditing,
    setMarkdown,
    getHtml,
    handleOpenFile,
    handleSaveFile,
    handleNewMemo,
  };
}
