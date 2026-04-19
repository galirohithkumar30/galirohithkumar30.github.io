/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu ---
  const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

    // --- Translation Logic ---
    const translations = {
        en: {
            "nav-home": "Home",
            "nav-heritage": "Heritage",
            "nav-programs": "Programs",
            "nav-tuition": "Tuition",
            "nav-inquire": "Inquire",
            "hero-title": "Kalyani Kala Nrityalaya",
            "hero-subtitle": "Grace • Tradition • Excellence",
            "btn-begin": "Begin Your Journey",
            "footer-rights": "© 2026 KALYANI KALA NRITYALAYA. ALL RIGHTS RESERVED."
        },
        te: {
            "nav-home": "హోమ్",
            "nav-heritage": "వారసత్వం",
            "nav-programs": "కార్యక్రమాలు",
            "nav-tuition": "ట్యూషన్",
            "nav-inquire": "విచారణ",
            "hero-title": "కళ్యాణి కళా నృత్యాలయ",
            "hero-subtitle": "కృప • సంప్రదాయం • నైపుణ్యం",
            "btn-begin": "మీ ప్రయాణాన్ని ప్రారంభించండి",
            "footer-rights": "© 2026 కళ్యాణి కళా నృత్యాలయ. సర్వ హక్కులు ప్రత్యేకించబడినవి."
        },
        hi: {
            "nav-home": "होम",
            "nav-heritage": "विरासत",
            "nav-programs": "कार्यक्रम",
            "nav-tuition": "ट्यूशन",
            "nav-inquire": "पूछताछ",
            "hero-title": "कल्याणी कला नृत्यालय",
            "hero-subtitle": "कृपा • परंपरा • उत्कृष्टता",
            "btn-begin": "अपनी यात्रा शुरू करें",
            "footer-rights": "© 2026 कल्याणी कला नृत्यालय। सर्वाधिकार सुरक्षित।"
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button state
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Get selected language
            const lang = btn.getAttribute('data-lang');

            // Update text for all elements with data-i18n attribute
            translatableElements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
        });
    });

    // --- GSAP Animations ---
    if (typeof gsap !== 'undefined') {
        gsap.from(".hero-content h1", { duration: 1.2, y: 30, opacity: 0, ease: "power3.out", delay: 0.2 });
        gsap.from(".tagline", { duration: 1.2, y: 20, opacity: 0, ease: "power3.out", delay: 0.4 });
        gsap.from(".hero-content .btn", { duration: 1.2, y: 20, opacity: 0, ease: "power3.out", delay: 0.6 });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        duration: 1,
                        y: 0,
                        opacity: 1,
                        ease: "power3.out"
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.gsap-reveal').forEach(el => observer.observe(el));
    }
});
