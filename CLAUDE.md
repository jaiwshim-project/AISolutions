# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Solutions Portfolio - 정적 웹사이트로 교육, 비즈니스, 헬스케어, 크리에이티브 분야의 AI 솔루션들을 카탈로그 형태로 전시합니다.

## Architecture

순수 HTML/CSS/JavaScript로 구성된 정적 사이트입니다. 빌드 도구나 패키지 매니저를 사용하지 않습니다.

### 핵심 파일
- `index.html` - 메인 페이지 (히어로, 카테고리 네비게이션, 솔루션 그리드, 푸터)
- `script.js` - 솔루션 데이터와 모든 동적 기능
- `style.css` - 전체 스타일링

### 데이터 구조 (script.js)

솔루션 데이터는 `solutions` 배열에 하드코딩되어 있습니다:
```javascript
{
    id: number,
    title: string,
    category: 'education' | 'business' | 'healthcare' | 'creative',
    categoryLabel: string,  // 한글 카테고리명
    icon: string,           // 이모지
    description: string,
    tags: string[],
    status: 'active' | 'development',
    link: string            // 외부 링크 또는 '#'
}
```

### 주요 기능
- 카테고리 필터링 (`currentFilter` 상태 관리)
- 실시간 검색 (제목, 설명, 태그 기준)
- 파티클 배경 애니메이션
- GitHub 링크 비밀번호 보호 (6자리)

## Development

로컬 개발 시 Live Server 또는 유사 도구로 `index.html`을 서빙합니다.

## Adding Solutions

새 솔루션 추가 시 `script.js`의 `solutions` 배열에 객체를 추가합니다. 히어로 섹션의 통계 숫자(`data-target`)와 푸터의 솔루션 개수도 함께 업데이트해야 합니다.
