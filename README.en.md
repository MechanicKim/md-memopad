# 📝 MD-Memopad

A simple and intuitive markdown notepad application

![Made with Tauri](https://img.shields.io/badge/Made%20with-Tauri-FFC131?style=flat-square&logo=tauri)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)

[한국어](README.md) | **English**

## ✨ Features

- 🚀 **Fast Performance**: Lightweight desktop application built with Tauri
- ✍️ **Markdown Support**: Real-time markdown preview
- 💾 **File Management**: Save and load memos
- 🎨 **Clean UI**: Intuitive and easy-to-use interface
- 🔄 **Live Preview**: Toggle between edit and preview modes

## 🎯 Key Features

### 📝 Memo Writing
- Write memos using markdown syntax
- Real-time syntax highlighting
- Switch between edit/preview modes

### 💾 File Management
- Save memos as `.md` files
- Load existing markdown files
- Automatic filename extraction and display

### 🔄 Editing Features
- Create new memos
- Edit existing memos
- Real-time change reflection

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install)

### Development Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/MechanicKim/md-memopad.git
   cd md-memopad/md-memopad
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Run Development Server**
   ```bash
   pnpm tauri dev
   ```

### Build

**Production Build:**
```bash
pnpm tauri build
```

## 🛠 Tech Stack

### Frontend
- **React 19**: User interface
- **TypeScript**: Type safety
- **Vite**: Build tool
- **CSS3**: Styling

### Backend
- **Tauri**: Desktop application framework
- **Rust**: Backend logic

### Libraries
- **marked**: Markdown parsing
- **@tauri-apps/plugin-fs**: File system access
- **@tauri-apps/plugin-dialog**: File dialogs

## 📖 Usage

### Basic Usage

1. **Create New Memo**
   - Click "새 메모" (New Memo) button
   - Write in markdown in the text editor

2. **Save File**
   - Click "저장" (Save) button
   - Choose filename and location
   - Save with `.md` extension

3. **Open File**
   - Click "열기" (Open) button
   - Select existing markdown file
   - Automatically loads into editor

4. **Preview**
   - Click "미리보기" (Preview) button to see rendered result
   - Click "편집" (Edit) button to return to edit mode

### Markdown Syntax Examples

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- List item 1
- List item 2

1. Numbered list 1
2. Numbered list 2

[Link](https://example.com)

`Inline code`

\```
Code block
\```
```

## 📁 Project Structure

```
md-memopad/
├── src/                    # React source code
│   ├── components/         # React components
│   │   ├── MarkdownEditor.tsx
│   │   └── MarkdownEditor.css
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── src-tauri/             # Tauri backend
│   ├── src/
│   │   ├── lib.rs
│   │   └── main.rs
│   ├── capabilities/      # Permission settings
│   ├── icons/            # App icons
│   └── Cargo.toml
├── public/               # Static files
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is distributed under the MIT License. See [LICENSE](LICENSE) file for more information.

## 📞 Contact

Project Link: [https://github.com/MechanicKim/md-memopad](https://github.com/MechanicKim/md-memopad)

---

Made with ❤️ using [Tauri](https://tauri.app/) and [React](https://react.dev/)
