const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const nav = document.getElementById('main-nav') || document.querySelector('.nav');
            const navHeight = nav ? nav.offsetHeight : 80;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
window.addEventListener('DOMContentLoaded', () => {
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('.case-study-card, .about-content, .contact-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(section);
    });

    // Staggered fade-in for work cards
    const workCards = document.querySelectorAll('.work-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 120);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    workCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});

// Nav scroll shadow effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav') || document.querySelector('.nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(250, 248, 245, 0.95)';
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
        } else {
            nav.style.background = 'rgba(250, 248, 245, 0.85)';
            nav.style.boxShadow = 'none';
        }
    }
});

// Add hover effect to stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 107, 53, 0.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--bg-light)';
    });
});

// Animate numbers on scroll
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + (element.dataset.suffix || '');

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Observe stat cards for number animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const valueElement = entry.target.querySelector('.stat-value');
            const value = valueElement.textContent;

            // Parse the value
            const numMatch = value.match(/\d+/);
            if (numMatch) {
                const num = parseInt(numMatch[0]);
                const suffix = value.replace(num.toString(), '');
                valueElement.dataset.suffix = suffix;
                valueElement.textContent = '0' + suffix;
                animateValue(valueElement, 0, num, 1500);
            }
        }
    });
}, { threshold: 0.5 });

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-card').forEach(card => {
        statObserver.observe(card);
    });
});

// Add parallax effect to hero section
if (!prefersReducedMotion) {
    window.addEventListener('scroll', () => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add copy email functionality
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');

        // Try to copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show a temporary notification
                const notification = document.createElement('div');
                notification.textContent = 'Email copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: var(--primary-color);
                    color: white;
                    padding: 16px 24px;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                `;

                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            });
        }
    });
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy load images (if we add them later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal for approach items
window.addEventListener('DOMContentLoaded', () => {
    if (prefersReducedMotion) return;

    const approachObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                approachObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.approach-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        approachObserver.observe(item);
    });
});

const buildHomepageCaseCard = ({ href, company, ariaLabel, title, meta, description, impact }) => {
    const card = document.createElement('a');
    card.href = href;
    card.className = 'work-card';
    card.dataset.company = company;
    card.setAttribute('aria-label', ariaLabel);
    card.innerHTML = `
        <div class="work-card-inner">
            <div class="work-row">
                <img src="images/king-logo.png" alt="King logo" class="work-logo">
                <div class="work-content">
                    <h3 class="work-company">${title}</h3>
                    <p class="work-meta-inline">${meta}</p>
                    <p class="work-description">${description}</p>
                    <p class="work-impact">${impact}</p>
                    <span class="work-detail-link">View full details -&gt;</span>
                </div>
            </div>
        </div>
    `;
    return card;
};

const insertHomepageCardAfter = (workGrid, card, anchor) => {
    if (anchor && anchor.nextElementSibling) {
        workGrid.insertBefore(card, anchor.nextElementSibling);
    } else if (anchor) {
        workGrid.appendChild(card);
    } else {
        workGrid.prepend(card);
    }
};

const labelOriginalKingCase = (workGrid) => {
    const originalKingCard = workGrid.querySelector('a[href="king-case.html"]');
    if (!originalKingCard) return;

    originalKingCard.setAttribute('aria-label', 'Open King seamless distribution and adoption case study');

    const title = originalKingCard.querySelector('.work-company');
    if (title) title.textContent = 'King - Seamless Distribution & Adoption';

    const impact = originalKingCard.querySelector('.work-impact');
    if (impact) impact.textContent = '93% adoption | Months to days feature rollout';
};

const addOriginalKingCaseToOverview = () => {
    const splitTitle = document.getElementById('split-title');
    if (!splitTitle || document.querySelector('a.case-link-card[href="king-case.html"]')) return;

    const caseMap = splitTitle.closest('.section')?.querySelector('.case-map');
    if (!caseMap) return;

    const originalCase = document.createElement('a');
    originalCase.className = 'case-link-card';
    originalCase.href = 'king-case.html';
    originalCase.innerHTML = `
        <small>Original Case</small>
        <h3>Seamless Distribution & Adoption</h3>
        <p>The game-engine editor update story: reducing update anxiety, rebuilding trust in version management, and driving adoption from 55% to 93%.</p>
        <span class="link-arrow">View case -&gt;</span>
    `;

    caseMap.insertBefore(originalCase, caseMap.firstElementChild);
};

const kingCaseCards = [
    {
        href: 'king-strategic-ux.html',
        company: 'king-strategic-ux',
        ariaLabel: 'Open King strategic UX and maturity case study',
        title: 'King - Strategic UX & Maturity',
        meta: 'Principal UX Designer | 2023 - Present',
        description: 'A platform UX leadership hub connecting strategy, research operations, self-service, navigation, and future platform concepts for King internal tooling.',
        impact: 'UX maturity | Research ops | Platform strategy'
    },
    {
        href: 'king-project-setup.html',
        company: 'king-project-setup',
        ariaLabel: 'Open King project setup and workflow strategy case study',
        title: 'King - Project Setup & Workflow Strategy',
        meta: 'Principal UX Designer | 2023 - Present',
        description: 'Turned a fragmented project setup process into a clearer self-service workflow with visible dependencies, ownership clarity, and contextual support documentation.',
        impact: 'Self-service workflow | Documentation UX'
    },
    {
        href: 'king-research-ops.html',
        company: 'king-research-ops',
        ariaLabel: 'Open King UX research bank and design logs case study',
        title: 'King - UX Research Bank & Design Logs',
        meta: 'Principal UX Designer | 2023 - Present',
        description: 'Built reusable research and decision-making practices so platform teams could connect user evidence, design rationale, and roadmap decisions more consistently.',
        impact: 'Reusable evidence | Higher UX maturity'
    },
    {
        href: 'king-self-service.html',
        company: 'king-self-service',
        ariaLabel: 'Open King self-service case study',
        title: 'King - Self-Service at Scale',
        meta: 'Principal UX Designer | 2023 - Present',
        description: "Designed self-service workspace and application management for King's internal platform, helping workspace owners handle access, permissions, and application availability directly across 296 workspaces and 68 integrated applications.",
        impact: '50% faster access management | 20% fewer support requests'
    },
    {
        href: 'king-environment-navigation.html',
        company: 'king-environment-navigation',
        ariaLabel: 'Open King environment manager and navigation redesign case study',
        title: 'King - Environment Manager & Navigation',
        meta: 'Principal UX Designer | 2023 - Present',
        description: 'Reduced platform complexity through clearer information architecture, environment status visibility, and task-oriented navigation across internal tools.',
        impact: 'Operational UX | Navigation systems'
    },
    {
        href: 'king-game-space.html',
        company: 'king-game-space',
        ariaLabel: 'Open King Game Space strategic initiative case study',
        title: 'King - Game Space Strategic Initiative',
        meta: 'Principal UX Designer | 2023 - Present',
        description: 'Explored a game-centered workspace concept connecting tools, environments, ownership, and team workflows into a clearer future platform direction.',
        impact: 'Strategic vision | Scenario prototyping'
    }
];

// Add detailed King case entries to the homepage without rewriting the static markup.
window.addEventListener('DOMContentLoaded', () => {
    addOriginalKingCaseToOverview();

    const workGrid = document.querySelector('#selected-work .work-grid');
    if (!workGrid) return;

    labelOriginalKingCase(workGrid);

    const corePlatformCard = workGrid.querySelector('a[href="king-core-platform.html"]');
    const kingCard = workGrid.querySelector('a[href="king-case.html"]');
    let insertionAnchor = corePlatformCard || kingCard;

    kingCaseCards.forEach(cardData => {
        const existingCard = workGrid.querySelector(`a[href="${cardData.href}"]`);
        if (existingCard) {
            insertionAnchor = existingCard;
            return;
        }

        const card = buildHomepageCaseCard(cardData);
        insertHomepageCardAfter(workGrid, card, insertionAnchor);
        insertionAnchor = card;
    });
});
