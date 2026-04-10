// 솔루션 데이터 (하드코딩)
const solutions = [
    {
        id: 64,
        title: "AX Ontology OS",
        category: "axgroup",
        categoryLabel: "AX그룹",
        icon: "🧬",
        description: "온톨로지 기반 기업 AX 진단 플랫폼. 조직 업무 구조를 온톨로지 그래프로 시각화하고, Gemini AI가 병목을 진단하여 AX 전환 전략과 제안서를 자동 생성합니다. 7단계 진단 프로세스를 제공합니다.",
        tags: ["AX", "온톨로지", "Gemini", "진단", "제안서"],
        status: "active",
        link: "ax-ontology.html"
    },
    {
        id: 1,
        title: "AI노벨 문해력5",
        category: "education",
        categoryLabel: "교육",
        icon: "📚",
        description: "AI 기반 문해력 향상 솔루션. 학생들의 읽기 능력과 독해력을 체계적으로 분석하고 맞춤형 학습을 제공합니다.",
        tags: ["AI", "문해력", "교육", "학습"],
        status: "active",
        link: "#"
    },
    {
        id: 2,
        title: "AI 선거 솔루션",
        category: "election",
        categoryLabel: "선거",
        icon: "🗳️",
        description: "선거 캠페인을 위한 AI 기반 분석 및 전략 수립 솔루션. 여론 분석, 타겟팅, 메시지 최적화를 지원합니다.",
        tags: ["AI", "선거", "분석", "전략"],
        status: "active",
        link: "https://jaiwshim-project.github.io/aielectionlanding-/"
    },
    {
        id: 46,
        title: "선거 후보자 비교 분석 리포트 AI",
        category: "election",
        categoryLabel: "선거",
        icon: "⚖️",
        description: "Gemini AI 기반 선거 후보자 비교 분석 플랫폼. PDF 리포트 업로드 시 최대 5명의 후보를 10개 지표로 자동 분석하고 당선 전략 인텔리전스 보고서를 생성합니다.",
        tags: ["선거", "후보자분석", "Gemini", "PDF"],
        status: "active",
        link: "https://jaiwshim-project.github.io/35-1-Election-Reports/"
    },
    {
        id: 37,
        title: "일렉션맵AI 선거차량 전략",
        category: "election",
        categoryLabel: "선거",
        icon: "🚗",
        description: "AI 기반 선거 차량 운영 최적화 플랫폼. 유권자 밀집도 히트맵, 차량 경로 최적화, 비용 분석, 경쟁 후보 분석 등 데이터로 선거 유세 전략을 설계합니다.",
        tags: ["AI", "선거", "경로최적화", "데이터분석"],
        status: "active",
        link: "https://jaiwshim-project.github.io/35-2-Election-Car-Route/"
    },
    {
        id: 48,
        title: "V40 정치인 평가 시스템",
        category: "election",
        categoryLabel: "선거",
        icon: "🏛️",
        description: "4개 AI(Claude·ChatGPT·Grok·Gemini)가 정치인을 전문성·청렴성·리더십 등 10개 지표로 독립 평가하는 종합 시스템. 베이지안 점수 계산과 상세 평가 보고서를 생성합니다.",
        tags: ["선거", "정치인평가", "멀티AI", "데이터분석"],
        status: "active",
        link: "https://sunwoongkyu.github.io/AI_MagicShow/v40_process_diagram.html#phase5"
    },
    {
        id: 49,
        title: "AI-IP Strategy(특허-저작권) OS",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "⚖️",
        description: "Gemini AI 기반 특허·저작권 자동 고도화 플랫폼. 아이디어를 법적 권리로 전환하는 전 과정을 자동화하며, 특허 강도 점수(PSM), 권리 강도 지수(RSI), 거절 위험 예측 등 전략적 IP 포트폴리오 관리를 지원합니다.",
        tags: ["특허", "저작권", "IP전략", "Gemini"],
        status: "active",
        link: "https://jaiwshim-project.github.io/41-6-Patent_Copyright_Generation/"
    },
    {
        id: 60,
        title: "미래역량AI연구소",
        category: "education",
        categoryLabel: "교육",
        icon: "🔬",
        description: "ChatGPT·Claude·프롬프트·자동화까지 실무에 바로 쓸 수 있는 AI 학습 플랫폼. Gemini AI 기반 맞춤 강의 추천, 학습 진도 관리, 2,300여 개 무료 강의를 7개 대분류·28개 중분류로 체계적으로 제공합니다.",
        tags: ["AI교육", "강의플랫폼", "Gemini", "프롬프트", "자동화"],
        status: "active",
        link: "https://jaiwshim-project.github.io/30-12-FCAI_Lab/"
    },
    {
        id: 59,
        title: "n8n AI 슈퍼 플랫폼",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "⚡",
        description: "AI + 자동화 + 데이터의 완벽한 융합. n8n 기반 AI 에이전트 시스템으로 웹 검색·API 호출·RAG 지식 시스템을 결합하고, Slack·Notion·Google Sheets 등과 연동해 비즈니스 업무를 자동 처리합니다.",
        tags: ["n8n", "AI에이전트", "자동화", "RAG", "워크플로"],
        status: "active",
        link: "https://jaiwshim-project.github.io/10-08-n8n_AI-Super_Platform/"
    },
    {
        id: 58,
        title: "유튜브 자동화 플랫폼",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🎬",
        description: "소재 하나로 리서치 → 대본 → 이미지 → 음성 → 편집 → 업로드까지 전 과정을 AI가 자동 처리하는 유튜브 영상 제작 자동화 플랫폼. Claude·Gemini·ElevenLabs API 연동, 롱폼·숏폼 모두 지원합니다.",
        tags: ["유튜브", "영상자동화", "Claude", "Gemini", "ElevenLabs"],
        status: "active",
        link: "https://jaiwshim-project.github.io/40-12-Youtube_Gen/"
    },
    {
        id: 57,
        title: "공대생 할아버지, 미대생 할머니",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🎨",
        description: "수채화 일러스트와 함께하는 연재 이야기. 논리적인 공대생 할아버지와 감성적인 미대생 할머니의 만남부터 노년까지, 60개 에피소드를 담은 그림 갤러리입니다.",
        tags: ["수채화", "일러스트", "스토리", "갤러리", "연재"],
        status: "active",
        link: "https://70-01-grandpa-mom.vercel.app"
    },
    {
        id: 56,
        title: "AX에듀그룹 플랫폼",
        category: "axgroup",
        categoryLabel: "AX그룹",
        icon: "🎓",
        description: "AI 전환 전문가 양성 생태계. 5개 영역 50개 강의와 4단계 자격증 체계(Practitioner → Builder → Architect → Strategist), 100개 이상의 기업 프로젝트 실습, 전문가 커뮤니티를 통해 AX 전문가를 육성합니다.",
        tags: ["AX교육", "AI전환", "자격증", "기업프로젝트"],
        status: "active",
        link: "https://ax-education-platform.vercel.app"
    },
    {
        id: 55,
        title: "질문수학(Q-Math)",
        category: "education",
        categoryLabel: "교육",
        icon: "📐",
        description: "질문으로 시작하는 수학 사고 교육 플랫폼. 공식 암기가 아닌 개념 이해 중심의 6단계 학습 프로세스와 Gemini AI 튜터를 통해 수학적 사고력을 키웁니다. 레벨 테스트, 대시보드, 게임형 학습 활동을 지원합니다.",
        tags: ["수학", "질문학습", "Gemini", "AI튜터"],
        status: "active",
        link: "https://qmath.vercel.app/"
    },
    {
        id: 54,
        title: "VCOS 바이브코딩 OS",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🖥️",
        description: "아이디어를 입력하면 AI 분대 편성·스킬 전략·토큰 최적화·Claude Code 명령어를 자동 생성하는 바이브 코딩 운영체계. 복잡도 6축 분석, 최대 6개 분대 자동 배치, 21개 스킬 전략, 95점 고도화 엔진을 탑재한 AI 개발 자동화 플랫폼입니다.",
        tags: ["바이브코딩", "AI개발", "분대편성", "ClaudeCode"],
        status: "active",
        link: "https://jaiwshim-project.github.io/10-VibeCoding_OS/index.html"
    },
    {
        id: 53,
        title: "AX덴탈그룹 AI 경영 플랫폼",
        category: "axgroup",
        categoryLabel: "AX그룹",
        icon: "🏥",
        description: "세계 최초 치과 AI 경영 플랫폼. 파노라마·CT AI 진단 리포트 자동 생성, SEO·SNS 마케팅 AI, 수익률 분석·노쇼 예측·보험청구 최적화 경영 AI까지 치과 원장이 진료에 집중할 수 있는 통합 솔루션입니다.",
        tags: ["치과경영", "AI진단", "마케팅AI", "헬스테크"],
        status: "active",
        link: "https://jaiwshim-project.github.io/01-3-AXDentalGroup/index.html"
    },
    {
        id: 52,
        title: "디지털스마일치과 AI 뉴스 큐레이션",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🦷",
        description: "Gemini AI 기반 치과 AI 뉴스 자동 큐레이션 플랫폼. URL 등록 시 AI가 자동으로 한국어 요약·카테고리 분류·태그·읽기 시간을 생성하며, 게시판형/썸네일형 두 가지 보기를 지원합니다.",
        tags: ["치과", "AI뉴스", "Gemini", "헬스케어"],
        status: "active",
        link: "https://20-09-digital-smile-dc.vercel.app/"
    },
    {
        id: 51,
        title: "AX BizGroup CEO 마스터 플랫폼",
        category: "axgroup",
        categoryLabel: "AX그룹",
        icon: "👔",
        description: "AX 시대 CEO를 위한 통합 경영 인텔리전스 플랫폼. 전략·프로젝트·재무·AI 플랫폼·커뮤니티를 하나의 대시보드로 통합하며, 18개 프로젝트 KPI 실시간 모니터링, CRM, 비즈니스 파이프라인, AI 기업가 네트워크(247명) 관리 등 CEO 의사결정 지원 기능을 제공합니다.",
        tags: ["CEO대시보드", "경영인텔리전스", "KPI", "AX전략"],
        status: "active",
        link: "https://jaiwshim-project.github.io/01-2-AXBizGroup/index"
    },
    {
        id: 50,
        title: "AI 플랫폼 프로젝트 인덱스",
        category: "axgroup",
        categoryLabel: "AX그룹",
        icon: "🗂️",
        description: "심재우의 AI 기반 프로젝트 전체를 체계적으로 관리·검색할 수 있는 포트폴리오 플랫폼. 치과·교육·선거·미디어 등 7개 카테고리 50여 개 프로젝트를 통합 관리하며, 커스텀 탭·일괄 편집·로컬스토리지 저장 기능을 지원합니다.",
        tags: ["포트폴리오", "프로젝트관리", "인덱스", "플랫폼"],
        status: "active",
        link: "https://jaiwshim-project.github.io/00-Shim_Platform_Index/"
    },
    {
        id: 18,
        title: "BJ Attao",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🎭",
        description: "BJ Attao 크리에이터 플랫폼. 창작 콘텐츠와 엔터테인먼트 경험을 제공합니다.",
        tags: ["크리에이터", "엔터테인먼트", "콘텐츠"],
        status: "active",
        link: "https://jaiwshim-project.github.io/BJAttao/index.html"
    },
    {
        id: 3,
        title: "AUTOBOOK AI STUDIO",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "📖",
        description: "AI를 활용한 자동 도서 제작 스튜디오. 콘텐츠 생성부터 편집, 디자인까지 원스톱 북 제작 플랫폼입니다.",
        tags: ["AI", "출판", "자동화", "콘텐츠"],
        status: "active",
        link: "https://jaiwshim-project.github.io/autobook-ai-studio/"
    },
    {
        id: 4,
        title: "RQTDW AI 트레이너",
        category: "education",
        categoryLabel: "교육",
        icon: "🎯",
        description: "RQTDW 방법론 기반 AI 트레이닝 솔루션. 체계적인 사고력 훈련과 문제 해결 능력을 향상시킵니다.",
        tags: ["AI", "트레이닝", "사고력", "RQTDW"],
        status: "active",
        link: "https://jaiwshim-project.github.io/rqtdw_thinking_OS/"
    },
    {
        id: 5,
        title: "씽크드로우 AI",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🎨",
        description: "AI 기반 드로잉 및 시각화 도구. 아이디어를 시각적으로 표현하고 창의적인 작업을 지원합니다.",
        tags: ["AI", "드로잉", "시각화", "창의성"],
        status: "active",
        link: "https://jaiwshim-project.github.io/ThinkDraw_AI/"
    },
    {
        id: 6,
        title: "텍스트 2 비디오 생성기",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🎬",
        description: "텍스트를 입력하면 자동으로 비디오를 생성하는 AI 솔루션. 마케팅, 교육 콘텐츠 제작에 활용됩니다.",
        tags: ["AI", "비디오", "자동생성", "콘텐츠"],
        status: "development",
        link: "#"
    },
    {
        id: 7,
        title: "선치과 AI톡",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🦷",
        description: "치과 병원을 위한 AI 상담 솔루션. 환자 상담, 치료 안내, 예약 관리를 AI가 지원합니다.",
        tags: ["AI", "치과", "상담", "AI톡"],
        status: "active",
        link: "https://aitalker.co.kr/book008"
    },
    {
        id: 8,
        title: "치과 광고 콘텐츠 AI",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "📢",
        description: "치과 병원 맞춤형 광고 콘텐츠 자동 생성 플랫폼. SNS, 블로그, 동영상 콘텐츠를 손쉽게 제작합니다.",
        tags: ["AI", "치과", "광고", "마케팅"],
        status: "active",
        link: "https://jaiwshim-project.github.io/3stepdentalad/index.html"
    },
    {
        id: 9,
        title: "치과병원 환자상담 AI튜터",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "📋",
        description: "치과 병원 환자 상담을 위한 AI 튜터. 치료 설명, 비용 안내, 환자 교육을 지원합니다.",
        tags: ["AI", "치과", "상담", "튜터"],
        status: "active",
        link: "https://aitalker.co.kr/biz018"
    },
    {
        id: 10,
        title: "AI Tutor Hub",
        category: "education",
        categoryLabel: "교육",
        icon: "👨‍🏫",
        description: "AI 튜터링 플랫폼. 학생 개인별 학습 수준에 맞는 1:1 맞춤형 교육을 제공합니다.",
        tags: ["AI", "튜터", "맞춤학습", "교육"],
        status: "active",
        link: "https://jaiwshim-project.github.io/aitutorhub/"
    },
    {
        id: 11,
        title: "미래역량 AI LAB",
        category: "education",
        categoryLabel: "교육",
        icon: "🔬",
        description: "미래 역량 개발을 위한 AI 기반 학습 연구소. 창의성, 문제해결력, 협업 능력을 체계적으로 키웁니다.",
        tags: ["AI", "미래역량", "연구", "개발"],
        status: "active",
        link: "https://jaiwshim-project.github.io/future_competency_ai_lab/"
    },
    {
        id: 12,
        title: "Sales Spark",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "💼",
        description: "AI 기반 영업 지원 솔루션. 고객 분석, 영업 전략 수립, 성과 추적을 통해 매출 증대를 도와줍니다.",
        tags: ["AI", "영업", "CRM", "분석"],
        status: "active",
        link: "https://jaiwshim-project.github.io/sales_spark/"
    },
    {
        id: 13,
        title: "Dental Academy",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🎓",
        description: "치과 전문인력 교육 플랫폼. AI 기반 시뮬레이션과 맞춤형 커리큘럼으로 전문성을 향상시킵니다.",
        tags: ["AI", "치과", "교육", "아카데미"],
        status: "active",
        link: "https://jaiwshim-project.github.io/dental_academy/"
    },
    {
        id: 14,
        title: "삼국지 AI",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "⚔️",
        description: "삼국지 세계관 기반 AI 인터랙티브 콘텐츠. 스토리 생성, 캐릭터 대화 등 몰입형 경험을 제공합니다.",
        tags: ["AI", "삼국지", "게임", "스토리"],
        status: "development",
        link: "#"
    },
    {
        id: 15,
        title: "바이젠 수제맥주",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🍺",
        description: "수제맥주 브랜드 홈페이지. 바이젠 수제맥주의 다양한 제품과 브랜드 스토리를 소개합니다.",
        tags: ["맥주", "F&B", "브랜드", "홈페이지"],
        status: "active",
        link: "https://jaiwshim-project.github.io/weisenbeer/"
    },
    {
        id: 16,
        title: "OPS & AI-BM",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "📊",
        description: "AI 기반 비즈니스 모델 및 운영 최적화 솔루션. 기업 운영 효율화와 AI 전략 수립을 지원합니다.",
        tags: ["AI", "비즈니스", "운영", "전략"],
        status: "active",
        link: "https://opsaibm-deploy.vercel.app/"
    },
    {
        id: 17,
        title: "정창덕 총장 AI톡",
        category: "education",
        categoryLabel: "교육",
        icon: "🎤",
        description: "정창덕 총장과의 AI 대화 솔루션. 교육 철학과 인사이트를 AI를 통해 경험할 수 있습니다.",
        tags: ["AI", "교육", "AI톡", "대화"],
        status: "active",
        link: "https://aitalker.co.kr/edu007/1618"
    },
    {
        id: 19,
        title: "화이트서울치과",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🦷",
        description: "화이트서울치과 토탈 플랫폼. 치과 서비스 소개, 예약, 상담 등 원스톱 치과 솔루션을 제공합니다.",
        tags: ["치과", "의료", "플랫폼", "상담"],
        status: "active",
        link: "https://jaiwshim-project.github.io/dental_platform/index.html"
    },
    {
        id: 20,
        title: "미소미",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "😊",
        description: "미소미 치과 솔루션. 환자 친화적인 치과 서비스와 스마일 케어를 제공합니다.",
        tags: ["치과", "미소", "케어", "서비스"],
        status: "active",
        link: "https://jaiwshim-project.github.io/misomi/index.html"
    },
    {
        id: 21,
        title: "치과 원장&병원상황 설문조사",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "📝",
        description: "치과 원장 및 병원 운영 상황 파악을 위한 설문조사 솔루션. 병원 경영 개선에 활용됩니다.",
        tags: ["치과", "설문조사", "원장", "병원경영"],
        status: "active",
        link: "https://jaiwshim-project.github.io/dental_survey/"
    },
    {
        id: 22,
        title: "리젠메드컨설팅",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🩺",
        description: "리젠메드 의료 컨설팅 서비스. 의료 기관 운영 및 경영 컨설팅을 제공합니다.",
        tags: ["의료", "컨설팅", "병원경영", "헬스케어"],
        status: "active",
        link: "https://jaiwshim-project.github.io/mediconsulting/"
    },
    {
        id: 23,
        title: "덴탈 아카데미",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🏫",
        description: "치과 전문 교육 아카데미. 맞춤형 학습 과정을 통해 치과 인력의 역량을 강화합니다.",
        tags: ["치과", "교육", "아카데미", "학습"],
        status: "active",
        link: "https://11dentalacademy.vercel.app/user-select.html?dest=%23home"
    },
    {
        id: 24,
        title: "S-TEAM 개원 로드맵",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🗺️",
        description: "치과 개원 성공을 위한 5단계 통합 운영 시스템. 전략, 팀빌딩, 환자경험, 마케팅, 고객관리를 체계적으로 설계합니다.",
        tags: ["치과", "개원", "경영", "로드맵"],
        status: "active",
        link: "https://14-openbuildup.vercel.app/"
    },
    {
        id: 25,
        title: "소시얼허브터널 사업계획",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🚇",
        description: "대전-옥천 폐터널을 활용한 스마트팜, 수제맥주 양조, AI 갤러리 복합 사업 계획. 사회적 가치와 경제적 효과를 동시에 추구합니다.",
        tags: ["사업계획", "스마트팜", "사회적기업", "터널"],
        status: "active",
        link: "https://jaiwshim-project.github.io/21-Tunnel-Business-Plan/"
    },
    {
        id: 26,
        title: "Claude Code 개발 매뉴얼",
        category: "education",
        categoryLabel: "교육",
        icon: "🛠️",
        description: "Claude Code, Supabase, Vercel, GitHub, VS Code 통합 개발 매뉴얼. AI 기반 개발 환경 구축과 실전 워크플로우를 체계적으로 안내합니다.",
        tags: ["Claude", "Supabase", "Vercel", "개발매뉴얼"],
        status: "active",
        link: "https://41-claude-manual.vercel.app/#home"
    },
    {
        id: 27,
        title: "덴탈클리닉파인더 프랜차이즈",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🦷",
        description: "AI 기반 치과 프랜차이즈 사업계획서. AI 환자상담 아카데미, 마케팅 자동화, QLRCQ 상담 매뉴얼 등 데이터 중심 운영 전략을 제공합니다.",
        tags: ["AI", "치과", "프랜차이즈", "헬스케어"],
        status: "active",
        link: "https://jaiwshim-project.github.io/15-dental_franchise/"
    },
    {
        id: 28,
        title: "스타트업 파인더",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🚀",
        description: "스타트업 검색 및 랭킹 플랫폼. 유망 스타트업을 발굴하고 분석하여 투자 및 협업 기회를 제공합니다.",
        tags: ["스타트업", "랭킹", "투자", "분석"],
        status: "active",
        link: "https://jaiwshim-project.github.io/32-StartupFinder/#ranking"
    },
    {
        id: 29,
        title: "어머니의 손맛 레시피",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🍳",
        description: "AI 기반 요리 레시피 플랫폼. 어머니의 손맛을 담은 다양한 레시피를 AI가 추천하고 안내합니다.",
        tags: ["요리", "레시피", "AI", "음식"],
        status: "active",
        link: "https://jaiwshim-project.github.io/41-Mother-Cooks-Recipe/"
    },
    {
        id: 30,
        title: "치과 방문 케어",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🦷",
        description: "치과 방문 관리 및 케어 로드맵 솔루션. 환자의 치과 방문 일정과 치료 계획을 체계적으로 관리합니다.",
        tags: ["치과", "방문케어", "로드맵", "환자관리"],
        status: "active",
        link: "https://jaiwshim-project.github.io/27-Dental-Visit-Care/roadmap.html"
    },
    {
        id: 31,
        title: "치과위생사협회 조직진단 AI",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "🔍",
        description: "치과위생사협회를 위한 AI 기반 조직진단 솔루션. 조직 현황을 분석하고 발전 방향을 제시합니다.",
        tags: ["치과위생사", "조직진단", "AI", "협회"],
        status: "active",
        link: "https://20-13-survey-diagnosis.vercel.app/index.html"
    },
    {
        id: 32,
        title: "M&A 매수매각 플랫폼",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🤝",
        description: "병원·기업 M&A 전문 플랫폼. 매각·매수·양도·양수 거래를 통합 관리하며, 가치평가·실사·전문가 매칭 등 안전한 중개 서비스를 제공합니다.",
        tags: ["M&A", "매수매각", "병원", "기업거래"],
        status: "active",
        link: "https://jaiwshim-project.github.io/33-M-A_BuySell/"
    },
    {
        id: 33,
        title: "Ultimate UI Showcase",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🎨",
        description: "프리미엄 UI 라이브러리 허브. CSS 라이브러리, 아이콘셋, 디자인 시스템, 웹폰트, 마이크로 인터랙션, 데이터 시각화 등 웹 개발 리소스를 큐레이션합니다.",
        tags: ["UI", "라이브러리", "디자인", "웹개발"],
        status: "active",
        link: "https://jaiwshim-project.github.io/03-2-Util_Showcase/"
    },
    {
        id: 34,
        title: "치과 광고콘텐츠 AI (환자메시지)",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "💬",
        description: "치과 환자 맞춤형 광고 메시지 자동 생성 솔루션. AI가 환자 유형별 최적화된 광고 콘텐츠와 메시지를 생성합니다.",
        tags: ["AI", "치과", "광고", "환자메시지"],
        status: "active",
        link: "https://jaiwshim-project.github.io/29-Ad_Gen_Engine_InOut/index.html"
    },
    {
        id: 35,
        title: "덴탈맵AI 치과개원 입지분석",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "📍",
        description: "치과 개원을 위한 AI 기반 입지분석 솔루션. 인구, 경쟁, 임대료, 교통, 성장성 5가지 핵심 데이터를 AI가 분석하여 최적의 개원 입지를 추천합니다.",
        tags: ["AI", "치과", "입지분석", "개원"],
        status: "active",
        link: "https://16-medical-location-selection-map.vercel.app/"
    },
    {
        id: 38,
        title: "파이어내비 화재대피 AI시뮬레이션",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🔥",
        description: "호화유람선 전용 AI 화재 대피 시뮬레이션. A* 동적 경로탐색, 화재 확산 모델, 군중 밀집도 분석, 소방관 AI 시스템으로 최적 대피 전략을 설계합니다.",
        tags: ["AI", "화재대피", "시뮬레이션", "안전"],
        status: "active",
        link: "https://16-2-fire-navi.vercel.app/"
    },
    {
        id: 39,
        title: "택시빈차내비AI",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🚕",
        description: "서울시 택시 기사를 위한 AI 기반 운행 최적화 플랫폼. 실시간 수요 히트맵, AI 경로 최적화, 수익 시뮬레이션으로 빈차 시간은 줄이고 수익은 높입니다.",
        tags: ["AI", "택시", "경로최적화", "모빌리티"],
        status: "active",
        link: "https://jaiwshim-project.github.io/03-3-Taxi_Route-AI_-Navi/index.html"
    },
    {
        id: 40,
        title: "PDF 슬라이드 편집기",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "📄",
        description: "이미지 기반 슬라이드를 편집 가능한 상태로 복원하는 웹 도구. OCR 텍스트 복구, 로고 자동 삭제, 슬라이드 관리 등 PDF/PPTX 편집 기능을 제공합니다.",
        tags: ["PDF", "슬라이드", "OCR", "편집기"],
        status: "active",
        link: "https://jaiwshim-project.github.io/38-PDF_Slide_Editor/index.html"
    },
    {
        id: 41,
        title: "GEO-AIO 콘텐츠 생성 플랫폼",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🔎",
        description: "AI 검색엔진(AI Overview, Generative Engine) 최적화 올인원 도구. AIO 점수 분석, GEO 최적화, 키워드 분석, AI 콘텐츠 생성 등 데이터 기반 콘텐츠 전략을 지원합니다.",
        tags: ["AI", "SEO", "콘텐츠최적화", "마케팅"],
        status: "active",
        link: "https://www.geo-aio.com/"
    },
    {
        id: 42,
        title: "NotebookLM 슬라이드 편집기",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "📝",
        description: "Google Gemini AI 기반 슬라이드 편집 도구. PDF/이미지에서 텍스트를 자동 인식(OCR)하고 폰트·색상·레이아웃을 편집하여 PPT, PDF, 이미지로 내보낼 수 있습니다.",
        tags: ["AI", "NotebookLM", "OCR", "슬라이드"],
        status: "active",
        link: "https://noneapi-notebooklm-slide-editor-319049557914.us-west1.run.app/"
    },
    {
        id: 36,
        title: "클라라 라디오카페",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "📻",
        description: "레트로 감성의 실시간 라디오 스트리밍 플랫폼. 11가지 테마 디자인, 주파수 다이얼, 프리셋 저장, EQ 조절 등 클래식 라디오 경험을 제공합니다.",
        tags: ["라디오", "스트리밍", "레트로", "엔터테인먼트"],
        status: "active",
        link: "https://radiokafe.com/"
    },
    {
        id: 43,
        title: "스타벅스 라디오카페",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "☕",
        description: "스타벅스 테마의 레트로 라디오 스트리밍 플랫폼. 11가지 커피 테마 디자인, 주파수 다이얼, EQ 조절, 사진 관리, 한국·영어 음악 다운로드 등 감성적인 라디오카페 경험을 제공합니다.",
        tags: ["라디오", "스타벅스", "스트리밍", "레트로"],
        status: "active",
        link: "https://jaiwshim-project.github.io/37-1-Starbucks_RadioKafe/"
    },
    {
        id: 44,
        title: "오세훈 라디오카페",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "📻",
        description: "서울시장 오세훈과 함께하는 개인화 라디오 플랫폼. Supabase 기반 사용자 인증, 생년월일 운세·생일 알림, 양력/음력 선택, 반응형 다크 테마 UI를 제공합니다.",
        tags: ["라디오", "개인화", "Supabase", "사용자인증"],
        status: "active",
        link: "https://jaiwshim-project.github.io/37-3-Kukmin/"
    },
    {
        id: 45,
        title: "더불어민주당 라디오카페",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "🔵",
        description: "더불어민주당 당원과 함께하는 개인화 라디오 플랫폼. Supabase 기반 사용자 인증, 생년월일 운세·생일 알림, 양력/음력 선택, 레트로 다크 테마 UI를 제공합니다.",
        tags: ["라디오", "민주당", "Supabase", "사용자인증"],
        status: "active",
        link: "https://jaiwshim-project.github.io/37-2-Deobuleo_Minjudang/"
    },
    {
        id: 47,
        title: "Claude Code Orchestration",
        category: "education",
        categoryLabel: "교육",
        icon: "🎼",
        description: "AI 에이전트 오케스트레이션 중앙 관리 대시보드. 활성 에이전트·태스크 실시간 모니터링, 7일간 활동 분석, 이벤트 로그, 성공률·응답 지연시간 추적 등을 제공합니다.",
        tags: ["Claude", "오케스트레이션", "AI에이전트", "모니터링"],
        status: "active",
        link: "https://jaiwshim-project.github.io/51-1-ClaudeCode_Orchestration/"
    },
    {
        id: 48,
        title: "후보 선거 워룸",
        category: "election",
        categoryLabel: "선거",
        icon: "🗳️",
        description: "AI 기반 선거 캠프 중앙 관리 플랫폼. 후보 전략, 유권자 관계 관리, 캠프인 분석, 실시간 선거 현황 모니터링 등을 제공합니다.",
        tags: ["선거", "캠페인", "분석", "AI"],
        status: "active",
        link: "https://10-00-02.vercel.app/index.html"
    },
    {
        id: 61,
        title: "특허명세서 작성용 바이브코딩",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "⚖️",
        description: "AI 기반 특허명세서 작성 자동화 솔루션. 바이브코딩 프로세스를 통해 아이디어를 체계적인 특허명세서로 변환하고, 특허청 제출까지 전 과정을 지원합니다.",
        tags: ["특허", "바이브코딩", "명세서", "자동화"],
        status: "active",
        link: "https://50-09-patentvebecodingprocess.vercel.app/"
    },
    {
        id: 62,
        title: "K-AI출판허브",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "📖",
        description: "AI 기반 출판 콘텐츠 관리 및 배포 플랫폼. 원고 작성부터 출판, 마케팅까지 전 과정을 AI가 자동화하며, 다양한 형식의 콘텐츠 생성과 멀티채널 배포를 지원합니다.",
        tags: ["출판", "콘텐츠관리", "AI자동화", "마케팅"],
        status: "active",
        link: "https://30-14-k-pub-hub.vercel.app/"
    },
    {
        id: 63,
        title: "선거워룸",
        category: "election",
        categoryLabel: "선거",
        icon: "🚨",
        description: "선거 캠페인 실시간 모니터링 및 전략 분석 워룸. 여론 동향, 경쟁 분석, 캠페인 효과 측정을 실시간으로 추적하고 즉각적인 전략 조정을 지원합니다.",
        tags: ["선거", "실시간모니터링", "여론분석", "캠페인전략"],
        status: "active",
        link: "https://10-00-02.vercel.app/"
    },
    {
        id: 65,
        title: "SPIN Selling 2.0",
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🎯",
        description: "Huthwaite 공식 SPIN Selling AI 교육 플랫폼. B2B 영업 방법론을 AI와 함께 체화하는 2일 집중 훈련 과정으로, SPIN 질문 작성 연습, AI 고객 롤플레이 시뮬레이션, FAB/BAF 전환 실습을 제공합니다.",
        tags: ["SPIN", "B2B영업", "AI롤플레이", "영업교육", "시뮬레이션"],
        status: "active",
        link: "https://spin-selling.vercel.app/"
    },
    {
        id: 66,
        title: "디지털스마일치과",
        category: "healthcare",
        categoryLabel: "헬스케어",
        icon: "😁",
        description: "디지털스마일치과 AI 진단 플랫폼. AI 리포트, 장비 연동, 협업 제안, 워크플로우 등 치과 디지털 혁신 솔루션을 제공합니다.",
        tags: ["AI", "치과", "디지털", "진단"],
        status: "active",
        link: "https://20-09-digital-smile-dc.vercel.app/"
    }
];

// 카테고리 정보
const categories = [
    { key: 'education', label: '교육 솔루션', icon: '📚' },
    { key: 'business', label: '비즈니스 솔루션', icon: '💼' },
    { key: 'healthcare', label: '헬스케어 솔루션', icon: '🏥' },
    { key: 'creative', label: '크리에이티브 솔루션', icon: '🎨' },
    { key: 'election', label: '선거 솔루션', icon: '🗳️' },
    { key: 'axgroup', label: 'AX그룹', icon: '🏢' }
];

// DOM 요소
const solutionsContainer = document.getElementById('solutions-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.nav-btn');
const particlesContainer = document.getElementById('particles');

// 현재 필터 상태
let currentFilter = 'all';

// ============================================
// 파티클 생성
// ============================================
function createParticles() {
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';

        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        const colors = [
            'rgba(139, 92, 246, 0.6)',
            'rgba(102, 126, 234, 0.6)',
            'rgba(168, 85, 247, 0.6)',
            'rgba(236, 72, 153, 0.4)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        particlesContainer.appendChild(particle);
    }
}

// ============================================
// 히어로 카운트업 애니메이션
// ============================================
function animateHeroStats() {
    const statNumbers = document.querySelectorAll('.hero-stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            stat.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                stat.textContent = target;
            }
        }

        requestAnimationFrame(update);
    });
}

// ============================================
// 네비게이션 카운트 업데이트
// ============================================
function updateNavCounts() {
    document.getElementById('nav-total').textContent = solutions.length;
    document.getElementById('nav-edu').textContent = solutions.filter(s => s.category === 'education').length;
    document.getElementById('nav-biz').textContent = solutions.filter(s => s.category === 'business').length;
    document.getElementById('nav-health').textContent = solutions.filter(s => s.category === 'healthcare').length;
    document.getElementById('nav-creative').textContent = solutions.filter(s => s.category === 'creative').length;
    document.getElementById('nav-ax').textContent = solutions.filter(s => s.category === 'axgroup').length;
}

// ============================================
// 솔루션 카드 HTML 생성
// ============================================
function createSolutionCard(solution) {
    const statusClass = solution.status === 'development' ? 'development' : '';
    const statusText = solution.status === 'development' ? '개발중' : '운영중';
    const linkTarget = solution.link !== '#' ? 'target="_blank"' : '';

    return `
        <article class="solution-card" data-category="${solution.category}">
            <div class="card-header ${solution.category}">
                <span class="card-icon">${solution.icon}</span>
                <h3 class="card-title">${solution.title}</h3>
                <span class="card-category">${solution.categoryLabel}</span>
            </div>
            <div class="card-body">
                <p class="card-description">${solution.description}</p>
                <div class="card-tags">
                    ${solution.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-footer">
                <span class="card-status">
                    <span class="status-dot ${statusClass}"></span>
                    ${statusText}
                </span>
                <a href="${solution.link}" class="card-link" ${linkTarget}>
                    자세히 보기
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </article>
    `;
}

// ============================================
// 카테고리 그룹 HTML 생성
// ============================================
function createCategoryGroup(category, categorySolutions) {
    if (categorySolutions.length === 0) return '';

    return `
        <section class="category-group" data-category="${category.key}">
            <div class="category-header">
                <span class="category-icon">${category.icon}</span>
                <h2 class="category-title">${category.label}</h2>
                <span class="category-count">${categorySolutions.length}개 솔루션</span>
            </div>
            <div class="solutions-grid">
                ${categorySolutions.map(createSolutionCard).join('')}
            </div>
        </section>
    `;
}

// ============================================
// 솔루션 렌더링
// ============================================
function renderSolutions(filteredSolutions) {
    if (currentFilter === 'all') {
        const html = categories.map(category => {
            const categorySolutions = filteredSolutions.filter(s => s.category === category.key);
            return createCategoryGroup(category, categorySolutions);
        }).join('');
        solutionsContainer.innerHTML = html;
    } else {
        const category = categories.find(c => c.key === currentFilter);
        const categorySolutions = filteredSolutions.filter(s => s.category === currentFilter);
        solutionsContainer.innerHTML = createCategoryGroup(category, categorySolutions);
    }
}

// ============================================
// 필터링
// ============================================
function filterSolutions() {
    const searchTerm = searchInput.value.toLowerCase();
    let filtered = solutions;

    // 카테고리 필터
    if (currentFilter !== 'all') {
        filtered = filtered.filter(s => s.category === currentFilter);
    }

    // 검색 필터
    if (searchTerm) {
        filtered = filtered.filter(s =>
            s.title.toLowerCase().includes(searchTerm) ||
            s.description.toLowerCase().includes(searchTerm) ||
            s.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    renderSolutions(filtered);
}

// ============================================
// 이벤트 리스너
// ============================================
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        filterSolutions();
    });
});

searchInput.addEventListener('input', filterSolutions);

// ============================================
// 스크롤 애니메이션 (Intersection Observer)
// ============================================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-group').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// 초기화
// ============================================
function init() {
    createParticles();
    updateNavCounts();
    renderSolutions(solutions);

    // 히어로 섹션이 보일 때 카운트업 시작
    setTimeout(animateHeroStats, 500);
}

// ============================================
// 솔루션 리스트 탭 전환
// ============================================
document.querySelectorAll('.solution-list-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.solution-list-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.solution-list-tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================

// ============================================
// 푸터 링크 클릭 이벤트
// ============================================
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');

        // 해당 카테고리 버튼 클릭
        const navBtn = document.querySelector(`.nav-btn[data-category="${category}"]`);
        if (navBtn) {
            filterButtons.forEach(b => b.classList.remove('active'));
            navBtn.classList.add('active');
            currentFilter = category;
            filterSolutions();

            // 솔루션 섹션으로 스크롤
            document.getElementById('solutions').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 페이지 접속 잠금 (비밀번호 9633)
// ============================================
const SITE_PASSWORD = '9633';
const SITE_AUTH_KEY = 'ai_portfolio_site_auth';
const siteLockOverlay = document.getElementById('siteLockOverlay');
const siteLockInput = document.getElementById('siteLockInput');
const siteLockSubmit = document.getElementById('siteLockSubmit');
const siteLockError = document.getElementById('siteLockError');

if (sessionStorage.getItem(SITE_AUTH_KEY) === 'true') {
    if (siteLockOverlay) siteLockOverlay.style.display = 'none';
} else {
    if (siteLockOverlay) siteLockOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (siteLockInput) setTimeout(() => siteLockInput.focus(), 200);
}

function checkSitePassword() {
    if (siteLockInput.value === SITE_PASSWORD) {
        sessionStorage.setItem(SITE_AUTH_KEY, 'true');
        siteLockOverlay.style.display = 'none';
        document.body.style.overflow = '';
    } else {
        siteLockError.classList.add('show');
        siteLockInput.value = '';
        siteLockInput.focus();
        setTimeout(() => siteLockError.classList.remove('show'), 2000);
    }
}

if (siteLockSubmit) siteLockSubmit.addEventListener('click', checkSitePassword);
if (siteLockInput) siteLockInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkSitePassword();
});

// ============================================
// 링크 비밀번호 보호 제거 (페이지 잠금으로 대체)
// ============================================
const passwordModal = document.getElementById('passwordModal');
if (passwordModal) passwordModal.style.display = 'none';

// ============================================
// 모바일 네비게이션 토글
// ============================================
const navToggle = document.getElementById('navToggle');
const topNavLinks = document.querySelector('.top-nav-links');

if (navToggle && topNavLinks) {
    navToggle.addEventListener('click', () => {
        topNavLinks.classList.toggle('active');
    });

    topNavLinks.querySelectorAll('.top-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            topNavLinks.classList.remove('active');
        });
    });
}

// ============================================
// AI심재우톡 팝업
// ============================================
const chatBtn = document.getElementById('floatingChatBtn');
const chatPopup = document.getElementById('chatPopup');
const chatPopupClose = document.getElementById('chatPopupClose');

if (chatBtn && chatPopup && chatPopupClose) {
    chatBtn.addEventListener('click', () => {
        chatPopup.classList.toggle('active');
    });

    chatPopupClose.addEventListener('click', () => {
        chatPopup.classList.remove('active');
    });
}
