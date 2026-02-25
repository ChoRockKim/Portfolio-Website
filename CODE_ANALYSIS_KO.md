# Portfolio Website 코드 분석 문서

## 📁 프로젝트 구조 및 역할

### 🔧 설정 파일들

#### **package.json**
- 프로젝트 메타데이터 및 의존성 관리
- React 19.2.0, React Router DOM 7.13.1 등 핵심 라이브러리
- Vite를 빌드 도구로 사용
- TypeScript, ESLint, Tailwind CSS 개발 도구 포함

#### **vite.config.ts**
- Vite 빌드 도구 설정
- React 플러그인 활성화

#### **index.html**
- React 앱의 진입점
- Google Material Symbols 아이콘 폰트 로드
- Google Fonts (Inter) 로드
- 다크모드 지원 (class="dark")

#### **tailwind.config.js**
- Tailwind CSS 커스텀 색상 정의
  - Primary: #2590f4 (파란색)
  - Background-dark: #002D56 (어두운 배경)
  - Card-dark: #00386b (카드 배경)
  - Modal-bg: #011d38 (모달 배경)
- 글꼴 설정: Inter
- 글래스모르피즘 효과 지원

#### **postcss.config.js**
- Tailwind CSS와 Autoprefixer 플러그인 설정

#### **eslint.config.js**
- TypeScript 및 React ESLint 규칙 설정
- React Hooks 검사 활성화

#### **tsconfig.json** / **tsconfig.app.json** / **tsconfig.node.json**
- TypeScript 컴파일러 설정
- 엄격한 타입 체크
- JSX 지원

---

## 📄 스타일 파일들

### **src/index.css**
- @tailwind 기본 설정 포함
- 커스텀 스크롤바 스타일
  - 폭: 8px
  - 색상: Primary Blue (#2590f4)

### **src/App.css**
- 레거시 스타일 (현재는 많이 사용되지 않음)
- 로고 아니메이션 정의

---

## 🎨 컴포넌트 분석

### **src/components/Layout.tsx**
```
역할: 모든 페이지의 기본 레이아웃 구조 제공
구조: 
  - 최상단: Header 컴포넌트
  - 중단: 페이지별 children (main content)
  - 하단: Footer 컴포넌트
특징:
  - 반응형 디자인 (모바일/데스크톱)
  - 다크모드 지원
  - 전체 화면 높이 보장 (min-h-screen)
```

### **src/components/Header.tsx**
```
역할: 네비게이션 헤더 표시
주요 기능:
  1. 네비게이션 메뉴 (5가지 라우트)
     - Home (/)
     - Tech Stack (/tech-stack)
     - Projects (/projects)
     - Experience (/experience)
     - Blog (/blog)
  
  2. 반응형 디자인
     - 데스크톱: 수평 메뉴 바
     - 모바일: 햄버거 메뉴 (드롭다운)
  
  3. Contact 버튼
  
  4. 로고: "code" 아이콘 + "Taeheon Kim"

상태 관리:
  - isMenuOpen: 모바일 메뉴 열림/닫음 여부
```

### **src/components/Footer.tsx**
```
역할: 페이지 하단 정보 표시
내용:
  - 저작권 표시 (© 2024 Taeheon Kim)
  - 소셜미디어 링크
    - GitHub
    - LinkedIn
```

### **src/components/ProjectModal.tsx**
```
역할: 프로젝트 상세 정보를 모달로 표시
Props:
  - isOpen: 모달 열림 여부
  - onClose: 모달 닫기 콜백
  - project: 표시할 프로젝트 데이터

구조:
  1. 투명 배경 오버레이 (블러 효과)
  2. 모달 박스
     - 헤더: 제목 + 닫기 버튼
     - 바디 (스크롤 가능):
       - 프로젝트 이미지
       - 왼쪽: 개요 및 주요 기능 설명
       - 오른쪽: 기술스택 버튼들 + 데모/GitHub 링크
     - 푸터: Project ID 및 업데이트 날짜

특징:
  - 최대 높이 90vh (스크롤 가능)
  - 반응형 레이아웃 (lg 이상에서 3열)
```

---

## 📄 페이지 컴포넌트 분석

### **src/pages/Home.tsx**
```
역할: 포트폴리오 메인 페이지
섹션:
  1. 히어로 섹션
     - 배경 이미지
     - 자기소개: "Hello, I'm Taeheon Kim"
     - 학부: ELLT & Software at HUFS
     - CTA 버튼: "View Projects", "Read Blog"
  
  2. "What I Do" 섹션 (3개 카드)
     - Web Development (React, Node.js)
     - Natural Language Processing (Python, BERT, GPT)
     - Mobile Apps (Flutter, Native)
  
  3. Featured Projects 섹션
     - 2개 프로젝트 프리뷰
     - HUFS 기숙사 앱 (Flutter, Firebase)
     - NLP 감정분석 프로젝트 (Python, React, FastAPI)
```

### **src/pages/Projects.tsx**
```
역할: 프로젝트 포트폴리오 전시
기능:
  1. 필터링 시스템
     - 버튼으로 카테고리 필터: All, Web App, Mobile, Data Analysis
     - 선택된 필터: 색상 변화
  
  2. 프로젝트 그리드
     - 반응형: 모바일(1열) → 컴퓨터(3열)
     - 6개 프로젝트:
       1. HUFS Semester Clock (Web App, React)
       2. Fullstack Blog (Web Dev, Next.js)
       3. Daily Task Master (Mobile, Flutter)
       4. Sales Trend Analyzer (Data, Python)
       5. NLP Sentiment Analysis (AI/ML, PyTorch)
       6. Personal Portfolio (Web, HTML/CSS)
  
  3. 프로젝트 카드 & 모달
     - 호버 시 이미지 확대
     - 클릭하면 프로젝트 모달 열림

상태 관리:
  - activeFilter: 현재 활성 필터
  - selectedProject: 모달에 표시할 프로젝트
  - isModalOpen: 모달 열림 여부
```

### **src/pages/TechStack.tsx**
```
역할: 기술 스택 & 역량 소개
섹션:
  1. Frontend Development (4개)
     - React 18.2
     - Next.js
     - TypeScript
     - Tailwind CSS
  
  2. Backend Engineering (4개)
     - Spring Boot
     - Node.js
     - MySQL
     - Redis
  
  3. DevOps & Tools (3개)
     - AWS
     - Docker
     - Git & GitHub

특징:
  - 글래스모르피즘 카드 디자인
  - 호버 시 상승 애니메이션
  - 각 기술별 아이콘 및 설명
```

### **src/pages/Experience.tsx**
```
역할: 직무 경험 및 학력 소개
타임라인 구조 (최신순):
  1. Personal Project Launch (Sep 2023)
     - 풀스택 앱 배포
     - CI/CD 파이프라인, 99% 가동률
     - 기술: React, Node.js, AWS
  
  2. Software Engineering Intern (Jun-Aug 2023)
     - 데이터베이스 최적화 (40% 개선)
     - 레거시 코드 마이그레이션
     - 기술: Python, SQL, Agile
  
  3. Freelance Web Developer (Jan-Dec 2022)
     - 5개+ 중소기업 웹사이트 개발
     - 전체 생명주기 관리
     - 기술: WordPress, HTML/CSS, JavaScript
  
  4. HUFS - ELLT & Software Major (Mar 2020-Present)
     - 이중전공
     - 해킹대회 참여
     - 주요 과목: 자료구조, NLP, DB, OOP

특징:
  - 세로 타임라인 (좌측 점 마커)
  - 호버 효과: 점 크기 변화
  - Call-to-Action: 이력서 다운로드
```

### **src/pages/Blog.tsx**
```
역할: 기술 블로그 및 인사이트 공유
섹션:
  1. Featured Post (대형 카드)
     - "Optimizing React Performance for Large Scale Applications"
     - 작성일: Oct 24, 2023
     - 소요시간: 5분
     - 태그: React, Performance
  
  2. 일반 포스트 그리드 (5개)
     - Understanding NLP Basics
     - My Journey as a Dual Major at HUFS
     - Building Accessible Web Interfaces
     - The Future of Software in Language Learning
     - Git Workflow Best Practices

기능:
  - 카테고리 필터: All, Development, ELLT, University
  - 검색 기능 (아이콘: search)
  - 각 포스트별 작성일, 읽기시간, 태그
  - 페이지네이션

특징:
  - 반응형 카드 레이아웃
  - 호버 시 이미지 확대 & 점수 올려지기
```

---

## 🔄 라우팅 구조

```
App (React Router)
├── Layout (공통 레이아웃)
│   ├── Header (네비게이션)
│   ├── Route / → Home (히어로 + 프로젝트 소개)
│   ├── Route /blog → Blog (블로그 목록)
│   ├── Route /experience → Experience (타임라인)
│   ├── Route /tech-stack → TechStack (기술 목록)
│   ├── Route /projects → Projects (포트폴리오)
│   └── Footer (하단 정보)
```

---

## 🎯 주요 설계 패턴

### 1. **컴포넌트 계층구조**
- 상위: Layout (레이아웃 관리)
- 중위: 페이지 컴포넌트 (Home, Blog, Projects 등)
- 하위: UI 컴포넌트 (Header, Footer, Modal)

### 2. **상태 관리 (useState)**
- 각 페이지에서 필터, 선택, 모달 상태 관리
- 제한된 범위의 상태만 관리 (전역 상태 관리 없음)

### 3. **스타일 접근법**
- Tailwind CSS 유틸리티 클래스 기반
- 다크모드 지원 (dark: 프리픽스)
- 반응형 디자인 (lg:, md:, sm: 브레이크포인트)

### 4. **데이터 구조**
- Props 기반 데이터 전달
- TypeScript 인터페이스로 타입 안정성 확보
- 모달용 단일 프로젝트 선택 패턴

---

## 🎨 디자인 시스템

### 색상 팔레트
```
Primary: #2590f4 (파란색, CTA)
Background-dark: #002D56 (페이지 배경)
Card-dark: #00386b (카드 배경)
Modal-bg: #011d38 (모달 배경)
Text: white/70 ~ white/90 (명도 조절)
```

### 레이아웃 브레이크포인트
```
모바일: 기본 (< 768px)
태블릿: md: (≥ 768px)
데스크톱: lg: (≥ 1024px)
```

### 공통 구성 요소
- 글래스모르피즘 (반투명 + 블러)
- 호버 애니메이션 (색상 변화, 스케일)
- 그라디언트 배경
- 박스 섀도우 (깊이 표현)

---

## 🚀 핵심 기능 정리

| 페이지 | 주요 기능 | 상태 관리 |
|--------|---------|---------|
| Home | 히어로 섹션, 소개, Featured Projects | ✗ |
| Projects | 필터링, 모달 팝업 | ○ (필터, 모달) |
| Experience | 타임라인 표시 | ✗ |
| TechStack | 기술 카드 그리드 | ✗ |
| Blog | 포스트 목록, 필터, 검색 | ✗ (향후 추가 가능) |

---

## 📝 결론

이 포트폴리오 웹사이트는 **모던 React 기반의 풀스택 포트폴리오**입니다.

**강점:**
- ✅ 깔끔하고 전문적인 다크 테마 디자인
- ✅ 반응형 & 접근성 고려
- ✅ 타입 안정성 (TypeScript)
- ✅ 모듈화된 컴포넌트 구조
- ✅ Tailwind CSS로 효율적인 스타일링

**개선 가능 영역:**
- 🔄 전역 상태 관리 (Redux, Context API)
- 🔒 API 연동 (프로젝트 데이터 동적 로드)
- 🔍 검색 기능 구현
- 💬 댓글 기능 (블로그)
- 📈 방문자 분석 (Google Analytics)
