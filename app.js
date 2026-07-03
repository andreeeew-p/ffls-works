/* ==========================================================================
   FFLS Works - Main Page Scripts (app.js)
   ========================================================================== */

// 1. DOM Selection
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// 2. DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language settings
    initLanguage();
    initLanguageToggle();

    // Bind Download actions (DO NOT use e.preventDefault() to allow zip download)
    initDownloadTriggers();

    // Initialize smooth scrolling for header navigation without changing URL hashes
    initSmoothScroll();
});

// 3. Language State Control Engine (Body class controls content visibility)
function initLanguage() {
    let savedLang = localStorage.getItem('preferredLanguage');
    if (!savedLang) {
        savedLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    }
    setLanguageMode(savedLang);
}

function setLanguageMode(lang) {
    document.body.className = `lang-${lang}`;
    localStorage.setItem('preferredLanguage', lang);

    // Apply active highlight to switcher buttons
    const btnKo = document.getElementById('btn-lang-ko');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnKo && btnEn) {
        if (lang === 'ko') {
            btnKo.classList.add('kor-active');
            btnEn.classList.remove('eng-active');
        } else {
            btnKo.classList.remove('kor-active');
            btnEn.classList.add('eng-active');
        }
    }

    // Update form placeholders and select text dynamically
    updateDynamicInputs(lang);
}

function updateDynamicInputs(lang) {
    // Input & Textarea placeholders
    document.querySelectorAll('[data-placeholder-ko]').forEach(el => {
        const ph = lang === 'ko' ? el.getAttribute('data-placeholder-ko') : el.getAttribute('data-placeholder-en');
        el.setAttribute('placeholder', ph);
    });

    // Select options
    const optSelect = document.getElementById('opt-select-program');
    const optGeneral = document.getElementById('opt-general-idea');
    if (optSelect) {
        optSelect.textContent = lang === 'ko' ? '프로그램 선택' : 'Select Program';
    }
    if (optGeneral) {
        optGeneral.textContent = lang === 'ko' ? '기타 의견' : 'General Idea';
    }
}

function initLanguageToggle() {
    const btnKo = document.getElementById('btn-lang-ko');
    const btnEn = document.getElementById('btn-lang-en');

    if (btnKo) {
        btnKo.addEventListener('click', () => setLanguageMode('ko'));
    }
    if (btnEn) {
        btnEn.addEventListener('click', () => setLanguageMode('en'));
    }
}

// 4. Download Trigger Notification Loader (Pristine download flow)
function initDownloadTriggers() {
    document.querySelectorAll('.download-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
            const appName = btn.getAttribute('data-app');
            const lang = localStorage.getItem('preferredLanguage') || 'ko';
            
            const toastMsg = lang === 'ko'
                ? `${appName} 포터블 패키지 다운로드를 시작합니다.`
                : `Starting download for ${appName} Portable package.`;

            showToast(toastMsg);
        });
    });
}

// 5. Contact Form Handler (Formspree API Integration with Language Support)
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btn-submit-feedback');
        const originalText = submitBtn.innerHTML; 

        const lang = localStorage.getItem('preferredLanguage') || 'ko';
        
        // Show loading state dynamically
        submitBtn.textContent = lang === 'ko' ? '전송 중...' : 'Submitting...';
        submitBtn.disabled = true;

        // Formspree API Endpoint
        const formspreeKey = 'xrewopzw'; 
        const endpoint = `https://formspree.io/f/${formspreeKey}`;

        // Get Input Data
        const nameVal = document.getElementById('form-name').value;
        const emailVal = document.getElementById('form-email').value;
        const topicVal = document.getElementById('form-topic').value;
        const messageVal = document.getElementById('form-message').value;

        // API Fetch POST
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: nameVal,
                email: emailVal,
                topic: topicVal,
                message: messageVal
            })
        })
        .then(response => {
            if (response.ok) {
                const successMsg = lang === 'ko'
                    ? '피드백이 성공적으로 전송되었습니다. 소중한 의견 감사합니다.'
                    : 'Feedback submitted successfully. Thank you for your feedback.';
                
                showToast(successMsg);
                contactForm.reset();
            } else {
                const errorMsg = lang === 'ko'
                    ? '전송 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
                    : 'An error occurred. Please try again later.';

                showToast(errorMsg);
            }
        })
        .catch(err => {
            console.error('[FFLS Works Error] Formspree i18n 전송 중 장애:', err);
            
            const netErrorMsg = lang === 'ko'
                ? '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.'
                : 'Network error occurred. Please check your connection.';

            showToast(netErrorMsg);
        })
        .finally(() => {
            submitBtn.innerHTML = originalText; // Restore Submit button text
            submitBtn.disabled = false;
        });
    });
}

// 6. Smooth Scroll without Hash in URL
function initSmoothScroll() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// 6. Toast Notification Helper
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}
