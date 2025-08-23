import React, { useState } from 'react';
import { marked } from 'marked';
import { readTextFile, writeTextFile } from '@tauri-apps/plugin-fs';
import { open as openDialog, save as saveDialog } from '@tauri-apps/plugin-dialog';
import './MarkdownEditor.css';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState('# 새로운 메모\n\n여기에 마크다운으로 메모를 작성하세요...');
  const [fileName, setFileName] = useState('새 메모');
  const [isEditing, setIsEditing] = useState(true);

  // 마크다운을 HTML로 변환
  const getHtml = () => {
    return { __html: marked(markdown) };
  };

  // 파일 열기
  const handleOpenFile = async () => {
    console.log('파일 열기 시작...');
    try {
      const filePath = await openDialog({
        multiple: false,
        filters: [
          {
            name: 'Markdown Files',
            extensions: ['md', 'markdown']
          },
          {
            name: 'All Files',
            extensions: ['*']
          }
        ]
      });

      console.log('선택된 파일 경로:', filePath);

      if (filePath) {
        const content = await readTextFile(filePath);
        setMarkdown(content);
        
        // 파일명 추출
        const name = filePath.split('/').pop()?.replace(/\.[^/.]+$/, "") || '새 메모';
        setFileName(name);
        console.log('파일 열기 완료');
      } else {
        console.log('파일 선택이 취소되었습니다.');
      }
    } catch (error) {
      console.error('파일 열기 오류:', error);
      alert(`파일을 열 수 없습니다: ${error}`);
    }
  };

  // 파일 저장
  const handleSaveFile = async () => {
    console.log('파일 저장 시작...');
    try {
      const filePath = await saveDialog({
        defaultPath: `${fileName}.md`,
        filters: [
          {
            name: 'Markdown Files',
            extensions: ['md']
          },
          {
            name: 'All Files',
            extensions: ['*']
          }
        ]
      });

      console.log('저장할 파일 경로:', filePath);

      if (filePath) {
        await writeTextFile(filePath, markdown);
        
        // 파일명 업데이트
        const name = filePath.split('/').pop()?.replace(/\.[^/.]+$/, "") || '새 메모';
        setFileName(name);
        
        alert('파일을 저장했습니다.');
        console.log('파일 저장 완료');
      } else {
        console.log('파일 저장이 취소되었습니다.');
      }
    } catch (error) {
      console.error('파일 저장 오류:', error);
      alert(`파일을 저장할 수 없습니다: ${error}`);
    }
  };

  // 새 메모 시작
  const handleNewMemo = () => {
    setMarkdown('# 새로운 메모\n\n여기에 마크다운으로 메모를 작성하세요...');
    setFileName('새 메모');
    setIsEditing(true);
  };

  return (
    <div className="markdown-editor">
      <div className="toolbar">
        <div className="toolbar-left">
          <h1 className="title">{fileName}</h1>
        </div>
        <div className="toolbar-right">
          <button onClick={handleNewMemo} className="btn btn-secondary">
            새 메모
          </button>
          <button onClick={handleOpenFile} className="btn btn-secondary">
            열기
          </button>
          <button onClick={handleSaveFile} className="btn btn-primary">
            저장
          </button>
          <button 
            onClick={() => setIsEditing(!isEditing)} 
            className={`btn ${isEditing ? 'btn-secondary' : 'btn-primary'}`}
          >
            {isEditing ? '미리보기' : '편집'}
          </button>
        </div>
      </div>

      <div className="editor-container">
        {isEditing ? (
          <div className="editor-pane">
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="마크다운으로 메모를 작성하세요..."
              className="markdown-textarea"
            />
          </div>
        ) : (
          <div className="preview-pane">
            <div 
              className="markdown-preview"
              dangerouslySetInnerHTML={getHtml()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
