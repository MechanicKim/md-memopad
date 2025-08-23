import { useState } from "react";
import { marked } from "marked";
import { readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
import {
  open as openDialog,
  save as saveDialog,
} from "@tauri-apps/plugin-dialog";

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
  const [fileName, setFileName] = useState("새 메모");
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

  // 파일 저장
  const handleSaveFile = async () => {
    console.log("파일 저장 시작...");
    try {
      const filePath = await saveDialog({
        defaultPath: `${fileName}.md`,
        filters: [
          {
            name: "Markdown Files",
            extensions: ["md"],
          },
          {
            name: "All Files",
            extensions: ["*"],
          },
        ],
      });

      console.log("저장할 파일 경로:", filePath);

      if (filePath) {
        await writeTextFile(filePath, markdown);

        // 파일명 업데이트
        const name = extractFileNameFromPath(filePath);
        setFileName(name);

        alert("파일을 저장했습니다.");
        console.log("파일 저장 완료");
      } else {
        console.log("파일 저장이 취소되었습니다.");
      }
    } catch (error) {
      console.error("파일 저장 오류:", error);
      alert(`파일을 저장할 수 없습니다: ${error}`);
    }
  };

  // 새 메모 시작
  const handleNewMemo = () => {
    setMarkdown("# 새로운 메모\n\n여기에 마크다운으로 메모를 작성하세요...");
    setFileName("새 메모");
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
