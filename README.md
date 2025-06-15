# 캠핑 렌탈 서비스

캠핑 용품을 쉽고 편리하게 대여할 수 있는 웹 서비스입니다.

> **배포 주소:** [https://d26hv5wp3cuyhn.cloudfront.net/](https://d26hv5wp3cuyhn.cloudfront.net/)

## 주요 기능

- **렌탈 리스트**: 다양한 캠핑 용품을 한눈에 확인하고 대여할 수 있습니다.
- **렌탈 상세 페이지**: 각 용품의 상세 정보 및 대여 가능 여부를 확인할 수 있습니다.
- **로그인/소셜 로그인**: 자체 로그인 및 소셜 계정(OAuth) 연동을 통한 간편 로그인 지원
- **404 페이지**: 존재하지 않는 경로 접근 시 Not Found 안내

## 기술 스택

- **프레임워크**: React, Vite
- **언어**: TypeScript
- **스타일링**: Emotion
- **상태 관리/비동기**: React Query
- **라우팅**: React Router DOM
- **API 통신**: Axios
- **날짜 관리**: Day.js
- **기타**: dotenv, overlay-kit, vite-plugin-svgr

## 프로젝트 구조

```
src/
  ├── apis/           # API 관련 코드
  ├── assets/         # 이미지 및 정적 파일
  ├── components/     # 공통 컴포넌트 (Navbar 등)
  ├── hooks/          # 커스텀 훅
  ├── pages/          # 주요 페이지 (렌탈 리스트, 상세, 로그인 등)
  ├── styles/         # 전역 스타일
  ├── theme.ts        # 테마 설정
  └── types/          # 타입 정의
```

---

이 프로젝트는 **Cursor 기반 바이브 코딩 학습**을 목적으로 하며, 실제 서비스 운영보다는 코드 작성 및 최신 프론트엔드 개발 환경 경험에 중점을 두고 있습니다.
