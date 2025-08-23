# 📝 MD-Memopad

간단하고 직관적인 마크다운 메모장 애플리케이션

![Made with Tauri](https://img.shields.io/badge/Made%20with-Tauri-FFC131?style=flat-square&logo=tauri)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)

**한국어** | [English](README.en.md)

## ✨ 특징

- 🚀 **빠른 실행**: Tauri 기반의 가벼운 데스크톱 애플리케이션
- ✍️ **마크다운 지원**: 실시간 마크다운 프리뷰
- 💾 **파일 관리**: 메모 저장 및 불러오기
- 🎨 **깔끔한 UI**: 직관적이고 사용하기 쉬운 인터페이스
- 🔄 **실시간 미리보기**: 편집과 미리보기 모드 전환

## 🎯 주요 기능

### 📝 메모 작성
- 마크다운 문법으로 메모 작성
- 실시간 문법 하이라이팅
- 편집/미리보기 모드 전환

### 💾 파일 관리
- 메모를 `.md` 파일로 저장
- 기존 마크다운 파일 불러오기
- 파일명 자동 추출 및 표시

### 🔄 편집 기능
- 새 메모 생성
- 기존 메모 수정
- 변경사항 실시간 반영

## 🚀 설치 및 실행

### 필수 요구사항
- [Node.js](https://nodejs.org/) (v18 이상)
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install)

### 개발 환경 설정

1. **저장소 클론**
   ```bash
   git clone https://github.com/MechanicKim/md-memopad.git
   cd md-memopad/md-memopad
   ```

2. **의존성 설치**
   ```bash
   pnpm install
   ```

3. **개발 서버 실행**
   ```bash
   pnpm tauri dev
   ```

### 빌드

**프로덕션 빌드:**
```bash
pnpm tauri build
```

## 🛠 기술 스택

### Frontend
- **React 19**: 사용자 인터페이스
- **TypeScript**: 타입 안전성
- **Vite**: 빌드 도구
- **CSS3**: 스타일링

### Backend
- **Tauri**: 데스크톱 애플리케이션 프레임워크
- **Rust**: 백엔드 로직

### 라이브러리
- **marked**: 마크다운 파싱
- **@tauri-apps/plugin-fs**: 파일 시스템 접근
- **@tauri-apps/plugin-dialog**: 파일 다이얼로그

## 📖 사용법

### 기본 사용법

1. **새 메모 작성**
   - "새 메모" 버튼 클릭
   - 텍스트 에디터에 마크다운으로 작성

2. **파일 저장**
   - "저장" 버튼 클릭
   - 파일명과 위치 선택
   - `.md` 확장자로 저장

3. **파일 열기**
   - "열기" 버튼 클릭
   - 기존 마크다운 파일 선택
   - 자동으로 에디터에 로드

4. **미리보기**
   - "미리보기" 버튼으로 렌더링된 결과 확인
   - "편집" 버튼으로 편집 모드로 복귀

### 마크다운 문법 예시

```markdown
# 제목 1
## 제목 2
### 제목 3

**굵은 글씨**
*기울임 글씨*

- 목록 항목 1
- 목록 항목 2

1. 번호 목록 1
2. 번호 목록 2

[링크](https://example.com)

`인라인 코드`

\```
코드 블록
\```
```

## 📁 프로젝트 구조

```
md-memopad/
├── src/                    # React 소스 코드
│   ├── components/         # React 컴포넌트
│   │   ├── MarkdownEditor.tsx
│   │   └── MarkdownEditor.css
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── src-tauri/             # Tauri 백엔드
│   ├── src/
│   │   ├── lib.rs
│   │   └── main.rs
│   ├── capabilities/      # 권한 설정
│   ├── icons/            # 앱 아이콘
│   └── Cargo.toml
├── public/               # 정적 파일
├── package.json
└── README.md
```

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 📞 문의

프로젝트 링크: [https://github.com/MechanicKim/md-memopad](https://github.com/MechanicKim/md-memopad)

---

Made with ❤️ using [Tauri](https://tauri.app/) and [React](https://react.dev/)
