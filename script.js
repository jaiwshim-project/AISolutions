// 솔루션 데이터 (하드코딩)
const solutions = [
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
        category: "business",
        categoryLabel: "비즈니스",
        icon: "🗳️",
        description: "선거 캠페인을 위한 AI 기반 분석 및 전략 수립 솔루션. 여론 분석, 타겟팅, 메시지 최적화를 지원합니다.",
        tags: ["AI", "선거", "분석", "전략"],
        status: "active",
        link: "https://jaiwshim-project.github.io/aielectionlanding-/"
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
        title: "AUTOBOOK STUDIO",
        category: "creative",
        categoryLabel: "크리에이티브",
        icon: "📖",
        description: "AI를 활용한 자동 도서 제작 스튜디오. 콘텐츠 생성부터 편집, 디자인까지 원스톱 북 제작 플랫폼입니다.",
        tags: ["AI", "출판", "자동화", "콘텐츠"],
        status: "active",
        link: "#"
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
        link: "#"
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
        link: "#"
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
        link: "#"
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
        link: "#"
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
        link: "https://jaiwshim-project.github.io/OPSAIBM/index.html"
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
    }
];

// 카테고리 정보
const categories = [
    { key: 'education', label: '교육 솔루션', icon: '📚' },
    { key: 'business', label: '비즈니스 솔루션', icon: '💼' },
    { key: 'healthcare', label: '헬스케어 솔루션', icon: '🏥' },
    { key: 'creative', label: '크리에이티브 솔루션', icon: '🎨' }
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
// 맨 위로 버튼
// ============================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

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
// GitHub 비밀번호 보호
// ============================================
const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordCancel = document.getElementById('passwordCancel');
const passwordError = document.getElementById('passwordError');
const githubLink = document.querySelector('.footer-contact-item[href*="github"]');

const GITHUB_PASSWORD = '963314';
const GITHUB_URL = 'https://github.com/jaiwshim-project';

if (githubLink) {
    githubLink.addEventListener('click', (e) => {
        e.preventDefault();
        passwordModal.classList.add('active');
        passwordInput.value = '';
        passwordError.classList.remove('show');
        setTimeout(() => passwordInput.focus(), 100);
    });
}

passwordSubmit.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

function checkPassword() {
    if (passwordInput.value === GITHUB_PASSWORD) {
        passwordModal.classList.remove('active');
        window.open(GITHUB_URL, '_blank');
    } else {
        passwordError.classList.add('show');
        passwordInput.value = '';
        passwordInput.focus();
        setTimeout(() => passwordError.classList.remove('show'), 2000);
    }
}

passwordCancel.addEventListener('click', () => {
    passwordModal.classList.remove('active');
});

document.querySelector('.password-modal-overlay').addEventListener('click', () => {
    passwordModal.classList.remove('active');
});
