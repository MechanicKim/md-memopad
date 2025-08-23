import React from "react";
import "./MarkdownEditor.css";
import useMarkdownEditor from "./useMarkdownEditor";

const MarkdownEditor: React.FC = () => {
  const {
    fileName,
    isEditing,
    markdown,
    setIsEditing,
    setMarkdown,
    getHtml,
    handleOpenFile,
    handleSaveFile,
    handleNewMemo,
  } = useMarkdownEditor();

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
            className={`btn ${isEditing ? "btn-secondary" : "btn-primary"}`}
          >
            {isEditing ? "미리보기" : "편집"}
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
