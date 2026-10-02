/* ==========================================================================
   MAATI — AGRITECH ECOSYSTEM PLATFORM
   Shared Multi-Page Application Controller (app.js)
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. MULTILINGUAL DICTIONARY (Nav, CTAs & Hero Beats + Advisory Mockups)
     ------------------------------------------------------------------------ */
  const I18N = {
    en: {
      langLabel: 'English',
      navHome: 'Home',
      navCrop: 'Crop Tech',
      navLivestock: 'Livestock Tech',
      navMarket: 'Market & Finance',
      navAdvisory: 'Advisory',
      navSatellite: 'Satellite & Weather',
      navAbout: 'About',
      navLogin: 'Log in',
      navGetStarted: 'Get Started',
      beat0Title: 'One platform for everything your farm needs',
      beat0Body: 'Crop intelligence and livestock intelligence, backed by market, advisory, and satellite tools — in one place.',
      beat1Title: 'Every field, watched closely',
      beat1Body: 'Leaf-photo disease detection and soil health tracking catch problems while they’re still small.',
      beat2Title: 'From seedling to harvest, in view the whole way',
      beat2Body: 'Yield predictions built from historical records, live weather, and soil conditions — so you know what’s coming.',
      beat3Title: 'Built for the field, not just the boardroom',
      beat3Body: 'Grounded, plainspoken tools for working farmers, agri-businesses, and investors alike.'
    },
    hi: {
      langLabel: 'हिन्दी (Hindi)',
      navHome: 'होम',
      navCrop: 'फसल तकनीक',
      navLivestock: 'पशुधन तकनीक',
      navMarket: 'मंडी और वित्त',
      navAdvisory: 'सलाहकार',
      navSatellite: 'उपग्रह और मौसम',
      navAbout: 'हमारे बारे में',
      navLogin: 'लॉग इन',
      navGetStarted: 'शुरू करें',
      beat0Title: 'आपके खेत की हर ज़रूरत के लिए एक मंच',
      beat0Body: 'फसल और पशुधन की पूरी जानकारी — मंडी भाव, विशेषज्ञ सलाह और उपग्रह मौसम उपकरणों के साथ एक ही जगह।',
      beat1Title: 'हर खेत पर बारीक नज़र',
      beat1Body: 'पत्ती की फोटो से रोग पहचान और मिट्टी की जांच समस्या को बढ़ने से पहले ही पकड़ लेती है।',
      beat2Title: 'अंकुर से कटाई तक, पूरा भरोसा',
      beat2Body: 'पुराने रिकॉर्ड, ताज़ा मौसम और मिट्टी की स्थिति से सटीक उपज अनुमान — ताकि आप पहले से तैयार रहें।',
      beat3Title: 'खेत की मिट्टी के लिए बना, सिर्फ दफ्तर के लिए नहीं',
      beat3Body: 'किसानों, कृषि व्यापारियों और सहकारी समितियों के लिए सरल और भरोसेमंद तकनीक।'
    },
    mr: {
      langLabel: 'मराठी (Marathi)',
      navHome: 'मुख्यपृष्ठ',
      navCrop: 'पीक तंत्रज्ञान',
      navLivestock: 'पशुधन तंत्रज्ञान',
      navMarket: 'बाजार आणि वित्त',
      navAdvisory: 'सल्लागार',
      navSatellite: 'उपग्रह आणि हवामान',
      navAbout: 'आमच्याबद्दल',
      navLogin: 'लॉग इन',
      navGetStarted: 'सुरू करा',
      beat0Title: 'तुमच्या शेताच्या प्रत्येक गरजेसाठी एकच व्यासपीठ',
      beat0Body: 'पीक आणि पशुधन व्यवस्थापन — बाजारभाव, सल्ला आणि हवामान साधनांसह एकाच ठिकाणी.',
      beat1Title: 'प्रत्येक वाफ्यावर बारीक लक्ष',
      beat1Body: 'पानांच्या फोटोवरून रोग निदान आणि माती परीक्षणामुळे नुकसान वाढण्याआधीच उपाय होतो.',
      beat2Title: 'रोपापासून काढणीपर्यंत संपूर्ण अंदाज',
      beat2Body: 'मागील उत्पन्न, थेट हवामान आणि मातीच्या नोंदींवरून अचूक उत्पादन अंदाज.',
      beat3Title: 'प्रत्यक्ष शेतासाठी बनवलेले विश्वासू साधन',
      beat3Body: 'शेतकरी, शेतकरी उत्पादक कंपन्या (FPO) आणि खरेदीदारांसाठी सोपी भाषा व खरी माहिती.'
    },
    ta: {
      langLabel: 'தமிழ் (Tamil)',
      navHome: 'முகப்பு',
      navCrop: 'பயிர் நுட்பம்',
      navLivestock: 'கால்நடை நுட்பம்',
      navMarket: 'சந்தை & நிதி',
      navAdvisory: 'ஆலோசனை',
      navSatellite: 'செயற்கைக்கோள் & வானிலை',
      navAbout: 'எங்களைப் பற்றி',
      navLogin: 'உள்நுழைக',
      navGetStarted: 'தொடங்கவும்',
      beat0Title: 'உங்கள் பண்ணையின் அனைத்து தேவைகளுக்கும் ஒரே தளம்',
      beat0Body: 'பயிர் மற்றும் கால்நடை பராமரிப்பு, சந்தை விலை, குரல் ஆலோசனை மற்றும் வானிலை கருவிகள் ஒரே இடத்தில்.',
      beat1Title: 'ஒவ்வொரு வயலும் துல்லியமான கண்காணிப்பில்',
      beat1Body: 'இலை புகைப்படம் மூலம் நோய் கண்டறிதல் மற்றும் மண் வள சோதனை ஆரம்பத்திலேயே பாதிப்பை தடுக்கிறது.',
      beat2Title: 'விதைப்பு முதல் அறுவடை வரை தெளிவான பார்வை',
      beat2Body: 'முந்தைய மகசூல், வானிலை மற்றும் மண் தரவுகள் மூலம் நம்பகமான விளைச்சல் கணிப்பு.',
      beat3Title: 'வயல்வெளிக்காக உருவாக்கப்பட்ட உண்மையான தளம்',
      beat3Body: 'விவசாயிகள், கூட்டுறவு சங்கங்கள் மற்றும் கொள்முதல் நிறுவனங்களுக்கான எளிய கருவி.'
    },
    te: {
      langLabel: 'తెలుగు (Telugu)',
      navHome: 'హోమ్',
      navCrop: 'పంట సాంకేతికత',
      navLivestock: 'పాడి & పశువులు',
      navMarket: 'మార్కెట్ & రుణాలు',
      navAdvisory: 'సలహా కేంద్రం',
      navSatellite: 'ఉపగ్రహం & వాతావరణం',
      navAbout: 'మా గురించి',
      navLogin: 'లాగిన్',
      navGetStarted: 'ప్రారంభించండి',
      beat0Title: 'మీ వ్యవసాయ అవసరాలన్నింటికీ ఒకే వేదిక',
      beat0Body: 'పంట మరియు పాడి పశువుల సమాచారం, మార్కెట్ ధరలు, వాయిస్ సలహాలు మరియు వాతావరణ హెచ్చరికలు ఒకే చోట.',
      beat1Title: 'ప్రతి పొలంపై నిరంతర నిఘా',
      beat1Body: 'ఆకు ఫోటోతో తెగుళ్ల గుర్తింపు మరియు నేల ఆరోగ్య పరీక్షతో సమస్యను ముందే అరికట్టండి.',
      beat2Title: 'విత్తనం నుండి కోత వరకు పూర్తి స్పష్టత',
      beat2Body: 'గత దిగుబడి, వాతావరణం మరియు నేల తేమ ఆధారంగా ముందస్తు దిగుబడి అంచనా.',
      beat3Title: 'రైతు క్షేత్రం కోసం నిర్మించిన వేదిక',
      beat3Body: 'రైతులు, FPOలు మరియు కొనుగోలుదారులకు సులభంగా అర్థమయ్యే నిజాయితీ గల సమాచారం.'
    },
    pa: {
      langLabel: 'ਪੰਜਾਬੀ (Punjabi)',
      navHome: 'ਮੁੱਖ ਪੰਨਾ',
      navCrop: 'ਫ਼ਸਲ ਤਕਨੀਕ',
      navLivestock: 'ਪਸ਼ੂ ਧਨ ਤਕਨੀਕ',
      navMarket: 'ਮੰਡੀ ਅਤੇ ਵਿੱਤ',
      navAdvisory: 'ਸਲਾਹਕਾਰ',
      navSatellite: 'ਸੈਟੇਲਾਈਟ ਅਤੇ ਮੌਸਮ',
      navAbout: 'ਸਾਡੇ ਬਾਰੇ',
      navLogin: 'ਲੌਗ ਇਨ',
      navGetStarted: 'ਸ਼ੁਰੂ ਕਰੋ',
      beat0Title: 'ਤੁਹਾਡੇ ਖੇਤ ਦੀ ਹਰ ਲੋੜ ਲਈ ਇੱਕੋ ਪਲੇਟਫਾਰਮ',
      beat0Body: 'ਫ਼ਸਲ ਅਤੇ ਡੇਅਰੀ ਪਸ਼ੂਆਂ ਦੀ ਦੇਖਭਾਲ — ਮੰਡੀ ਭਾਅ, ਆਵਾਜ਼ ਸਲਾਹ ਅਤੇ ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ ਇੱਕੋ ਥਾਂ।',
      beat1Title: 'ਹਰ ਖੇਤ ਦੀ ਨੇੜਿਓਂ ਨਿਗਰਾਨੀ',
      beat1Body: 'ਪੱਤੇ ਦੀ ਫੋਟੋ ਨਾਲ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ ਅਤੇ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਨੁਕਸਾਨ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਬਚਾਅ ਕਰਦੀ ਹੈ।',
      beat2Title: 'ਬੀਜ ਤੋਂ ਵਾਢੀ ਤੱਕ ਪੂਰਾ ਅੰਦਾਜ਼ਾ',
      beat2Body: 'ਪੁਰਾਣੇ ਰਿਕਾਰਡ, ਮੌਸਮ ਅਤੇ ਮਿੱਟੀ ਦੀ ਨਮੀ ਦੇ ਆਧਾਰ ’ਤੇ ਝਾੜ ਦਾ ਸਹੀ ਅਨੁਮਾਨ।',
      beat3Title: 'ਖੇਤਾਂ ਵਿੱਚ ਕੰਮ ਕਰਨ ਵਾਲੇ ਕਿਸਾਨਾਂ ਲਈ ਬਣਿਆ',
      beat3Body: 'ਕਿਸਾਨਾਂ, ਡੇਅਰੀ ਫਾਰਮਰਾਂ ਅਤੇ ਖਰੀਦਦਾਰਾਂ ਲਈ ਸਿੱਧੀ ਅਤੇ ਭਰੋਸੇਮੰਦ ਤਕਨੀਕ।'
    },
    kn: {
      langLabel: 'ಕನ್ನಡ (Kannada)',
      navHome: 'ಮುಖಪುಟ',
      navCrop: 'ಬೆಳೆ ತಂತ್ರಜ್ಞಾನ',
      navLivestock: 'ಪಶುಪಾಲನೆ ತಂತ್ರಜ್ಞಾನ',
      navMarket: 'ಮಾರುಕಟ್ಟೆ & ಹಣಕಾಸು',
      navAdvisory: 'ಸಲಹೆ',
      navSatellite: 'ಉಪಗ್ರಹ & ಹವಾಮಾನ',
      navAbout: 'ನಮ್ಮ ಬಗ್ಗೆ',
      navLogin: 'ಲಾಗಿನ್',
      navGetStarted: 'ಪ್ರಾರಂಭಿಸಿ',
      beat0Title: 'ನಿಮ್ಮ ಕೃಷಿಯ ಎಲ್ಲಾ ಅಗತ್ಯಗಳಿಗೆ ಒಂದೇ ವೇದಿಕೆ',
      beat0Body: 'ಬೆಳೆ ಮತ್ತು ಹೈನುಗಾರಿಕೆ ಮಾಹಿತಿ, ಮಾರುಕಟ್ಟೆ ಧಾರಣೆ, ಧ್ವನಿ ಸಲಹೆ ಹಾಗೂ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ಒಂದೇ ಕಡೆ.',
      beat1Title: 'ಪ್ರತಿ ಹೊಲದ ಮೇಲೂ ಸೂಕ್ಷ್ಮ ನಿಗಾ',
      beat1Body: 'ಎಲೆಯ ಫೋಟೋದಿಂದ ರೋಗ ಪತ್ತೆ ಮತ್ತು ಮಣ್ಣಿನ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ ಸಮಸ್ಯೆಯನ್ನು ಆರಂಭದಲ್ಲೇ ತಡೆಯುತ್ತದೆ.',
      beat2Title: 'ಬಿತ್ತನೆಯಿಂದ ಕಟಾವಿನವರೆಗೆ ಸಂಪೂರ್ಣ ಚಿತ್ರಣ',
      beat2Body: 'ಹಿಂದಿನ ಇಳುವರಿ, ಮಳೆ ಮತ್ತು ಮಣ್ಣಿನ ಗುಣಮಟ್ಟದ ಆಧಾರದ ಮೇಲೆ ನಿಖರ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ.',
      beat3Title: 'ಹೊಲದಲ್ಲಿ ದುಡಿಯುವ ರೈತರಿಗಾಗಿ ರೂಪಿಸಿದ ತಂತ್ರಜ್ಞಾನ',
      beat3Body: 'ರೈತರು, ಎಫ್‌ಪಿಒ ಮತ್ತು ಖರೀದಿದಾರರಿಗೆ ಸರಳ ಹಾಗೂ ನಂಬಿಕಸ್ತ ವೇದಿಕೆ.'
    },
    gu: {
      langLabel: 'ગુજરાતી (Gujarati)',
      navHome: 'હોમ',
      navCrop: 'પાક ટેકનોલોજી',
      navLivestock: 'પશુપાલન ટેકનોલોજી',
      navMarket: 'બજાર અને ધિરાણ',
      navAdvisory: 'સલાહકાર',
      navSatellite: 'સેટેલાઇટ અને હવામાન',
      navAbout: 'અમારા વિશે',
      navLogin: 'લૉગ ઇન',
      navGetStarted: 'શરૂ કરો',
      beat0Title: 'તમારા ખેતરની દરેક જરૂરિયાત માટે એક જ પ્લેટફોર્મ',
      beat0Body: 'પાક અને પશુપાલન માહિતી — બજાર ભાવ, વૉઇસ સલાહ અને હવામાન સાધનો સાથે એક જ જગ્યાએ.',
      beat1Title: 'દરેક ખેતર પર બારીક નજર',
      beat1Body: 'પાંદડાના ફોટાથી રોગની ઓળખ અને જમીન ચકાસણી નુકસાન વધતા પહેલાં જ અટકાવે છે.',
      beat2Title: 'વાવણીથી લણણી સુધી સંપૂર્ણ અંદાજ',
      beat2Body: 'જૂના રેકોર્ડ, હવામાન અને જમીનની સ્થિતિ પરથી પાક ઉત્પાદનનો સાચો અંદાજ.',
      beat3Title: 'ખેતર માટે બનેલું, માત્ર ઓફિસ માટે નહીં',
      beat3Body: 'ખેડૂતો, ડેરી મંડળીઓ અને ખરીદદારો માટે સરળ અને ભરોસાપાત્ર સાધન.'
    }
  };

  function applyLanguage(langCode) {
    const dict = I18N[langCode] || I18N.en;
    try {
      localStorage.setItem('maati_lang', langCode);
    } catch (e) { /* ignore storage errors */ }

    document.querySelectorAll('.lang-select').forEach((sel) => {
      sel.value = langCode;
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Also sync Advisory page language buttons if present
    const advLangBtns = document.querySelectorAll('[data-advisory-lang]');
    if (advLangBtns.length > 0 && ADVISORY_DATA[langCode]) {
      renderAdvisoryLanguage(langCode);
    }
  }

  /* ------------------------------------------------------------------------
     2. MOBILE MENU & MODAL CONTROLLER
     ------------------------------------------------------------------------ */
  function initNavigationAndModals() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');

    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        menuBtn.innerHTML = isOpen
          ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>'
          : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
      });
    }

    // Language Selectors
    const savedLang = (function () {
      try {
        return localStorage.getItem('maati_lang') || 'en';
      } catch (e) {
        return 'en';
      }
    })();
    applyLanguage(savedLang);

    document.querySelectorAll('.lang-select').forEach((sel) => {
      sel.addEventListener('change', (e) => {
        applyLanguage(e.target.value);
      });
    });

    // Onboarding / Login Modal
    const modal = document.getElementById('onboarding-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalSubmitBtn = document.getElementById('modal-submit-btn');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalForm = document.getElementById('modal-form');
    const modalFeedback = document.getElementById('modal-feedback');

    document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        if (!modal) return;
        const mode = trigger.getAttribute('data-open-modal');
        if (drawer && drawer.classList.contains('open')) {
          drawer.classList.remove('open');
        }
        if (modalFeedback) modalFeedback.style.display = 'none';
        if (mode === 'login') {
          if (modalTitle) modalTitle.textContent = 'Log in to your farm account';
          if (modalSubtitle) modalSubtitle.textContent = 'Enter your registered mobile number to receive a 4-digit SMS passkey. Works on any connection.';
          if (modalSubmitBtn) modalSubmitBtn.textContent = 'Send 4-Digit SMS Passkey';
        } else {
          if (modalTitle) modalTitle.textContent = 'Start free with your first field or herd';
          if (modalSubtitle) modalSubtitle.textContent = 'No credit card needed. Add your village pin code and primary crop or dairy herd size to begin.';
          if (modalSubmitBtn) modalSubmitBtn.textContent = 'Create Free Farm Profile';
        }
        modal.classList.add('open');
      });
    });

    if (modalCloseBtn && modal) {
      modalCloseBtn.addEventListener('click', () => modal.classList.remove('open'));
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('modal-phone')?.value || '+91 98XXX XXXXX';
        if (modalFeedback) {
          modalFeedback.style.display = 'block';
          modalFeedback.textContent = `SMS verification & WhatsApp onboarding link sent to ${phone}. Our local field desk is ready.`;
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     3. HOMEPAGE HERO: 240-FRAME SCROLL-LINKED CANVAS SEQUENCE (HOME ONLY)
     ------------------------------------------------------------------------ */
  function initHomeHeroSequence() {
    const section = document.getElementById('hero-scroll-section');
    const canvas = document.getElementById('hero-canvas');
    if (!section || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    const progressBar = document.getElementById('hero-progress-bar');
    const frameCounterEl = document.getElementById('hero-frame-counter');
    const loadStatusEl = document.getElementById('hero-load-status');
    const beatCards = Array.from(document.querySelectorAll('.hero-beat-card'));
    const stepBtns = Array.from(document.querySelectorAll('.hero-step-btn'));
    const reducedMotionToggle = document.getElementById('toggle-reduced-motion');

    const TOTAL_FRAMES = 240;
    const frames = new Array(TOTAL_FRAMES).fill(null);
    let loadedCount = 0;
    let currentFrameIndex = 0;
    let rafPending = false;

    // Detect low-bandwidth or small screen to load a lighter frame set first
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isLowBandwidth = Boolean(
      (conn && (conn.saveData || conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g')) ||
      window.innerWidth < 768
    );
    const frameStep = isLowBandwidth ? 2 : 1;
    const targetFrameTotal = Math.ceil(TOTAL_FRAMES / frameStep);

    // Check prefers-reduced-motion
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isReducedMotion = mediaReduced.matches;

    function pad3(n) {
      return String(n).padStart(3, '0');
    }

    function framePath(oneBasedIndex) {
      return `Asset_frames/ezgif-frame-${pad3(oneBasedIndex)}.jpg`;
    }

    // Nearest loaded frame lookup so canvas is NEVER blank while loading in order
    function getNearestLoadedImage(targetIdx) {
      if (frames[targetIdx] && frames[targetIdx].complete && frames[targetIdx].naturalWidth > 0) {
        return frames[targetIdx];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIdx - offset;
        if (prev >= 0 && frames[prev] && frames[prev].complete && frames[prev].naturalWidth > 0) {
          return frames[prev];
        }
        const next = targetIdx + offset;
        if (next < TOTAL_FRAMES && frames[next] && frames[next].complete && frames[next].naturalWidth > 0) {
          return frames[next];
        }
      }
      return null;
    }

    // Draw image cover-fit onto canvas with zero tinting or recoloring
    function drawFrame(targetIdx) {
      const img = getNearestLoadedImage(targetIdx);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const cw = Math.max(1, Math.floor(rect.width * dpr));
      const ch = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }

      if (!img) {
        ctx.fillStyle = '#FACD8C';
        ctx.fillRect(0, 0, cw, ch);
        return;
      }

      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) * 0.5;
      const dy = (ch - dh) * 0.5;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    // Determine active text card beat from scroll progress (0-25%, 25-50%, 50-78%, 78-100%)
    function getActiveBeatIndex(progressPct) {
      if (progressPct < 25) return 0;
      if (progressPct < 50) return 1;
      if (progressPct < 78) return 2;
      return 3;
    }

    function updateSequenceFromScroll() {
      rafPending = false;

      if (isReducedMotion) {
        section.classList.add('reduced-motion');
        drawFrame(TOTAL_FRAMES - 1); // Static final frame (ezgif-frame-240.jpg)
        if (progressBar) progressBar.style.width = '100%';
        if (frameCounterEl) frameCounterEl.textContent = 'STATIC FRAME 240 / 240 (REDUCED MOTION)';
        return;
      }

      section.classList.remove('reduced-motion');

      const rect = section.getBoundingClientRect();
      const stickyHeight = window.innerHeight - 79;
      const scrollableDistance = Math.max(1, rect.height - stickyHeight);
      const scrolled = -rect.top;
      const rawProgress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      const progressPct = rawProgress * 100;

      currentFrameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(rawProgress * (TOTAL_FRAMES - 1)))
      );

      drawFrame(currentFrameIndex);

      if (progressBar) {
        progressBar.style.width = `${progressPct.toFixed(1)}%`;
      }

      const beatIdx = getActiveBeatIndex(progressPct);
      beatCards.forEach((card, idx) => {
        card.classList.toggle('active', idx === beatIdx);
      });
      stepBtns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === beatIdx);
      });

      if (frameCounterEl) {
        frameCounterEl.textContent = `FRAME ${pad3(currentFrameIndex + 1)} / ${TOTAL_FRAMES} · ${Math.round(progressPct)}%`;
      }
    }

    function requestUpdate() {
      if (!rafPending) {
        rafPending = true;
        window.requestAnimationFrame(updateSequenceFromScroll);
      }
    }

    // Preload frames in order (frame 1 to frame 240) with concurrency queue
    function preloadFramesInOrder() {
      // Load frame 1 and final frame 240 immediately for instant first paint & reduced-motion readiness
      const priorityIndices = [0, TOTAL_FRAMES - 1];
      const queue = [];

      priorityIndices.forEach((idx) => queue.push(idx));
      for (let i = 0; i < TOTAL_FRAMES; i += frameStep) {
        if (!priorityIndices.includes(i)) {
          queue.push(i);
        }
      }

      let cursor = 0;
      const CONCURRENCY = 6;

      function loadNext() {
        if (cursor >= queue.length) return;
        const idx = queue[cursor++];
        const img = new Image();
        img.decoding = 'async';
        img.onload = function () {
          frames[idx] = img;
          loadedCount++;
          if (loadStatusEl) {
            if (loadedCount >= targetFrameTotal) {
              loadStatusEl.textContent = isLowBandwidth
                ? 'LIGHT FRAME SET READY (120 FRAMES)'
                : 'ALL 240 MACRO FRAMES READY';
            } else {
              const pct = Math.min(99, Math.round((loadedCount / targetFrameTotal) * 100));
              loadStatusEl.textContent = `LOADING SEQUENCE ${pct}%`;
            }
          }
          // Redraw immediately if first frame or near current scroll position
          if (idx === 0 || Math.abs(idx - currentFrameIndex) <= 4 || isReducedMotion) {
            requestUpdate();
          }
          loadNext();
        };
        img.onerror = function () {
          loadNext();
        };
        img.src = framePath(idx + 1);
      }

      for (let c = 0; c < CONCURRENCY; c++) {
        loadNext();
      }
    }

    // Step buttons in Hero HUD jump smoothly to each beat
    const beatScrollTargets = [0.04, 0.34, 0.62, 0.89];
    stepBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        if (isReducedMotion) return;
        const sectionTop = section.offsetTop;
        const scrollableDistance = Math.max(1, section.offsetHeight - (window.innerHeight - 79));
        const targetY = sectionTop + scrollableDistance * beatScrollTargets[idx];
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      });
    });

    // Reduced motion listener & manual toggle button
    if (mediaReduced.addEventListener) {
      mediaReduced.addEventListener('change', (e) => {
        isReducedMotion = e.matches;
        requestUpdate();
      });
    }
    if (reducedMotionToggle) {
      reducedMotionToggle.addEventListener('click', () => {
        isReducedMotion = !isReducedMotion;
        reducedMotionToggle.textContent = isReducedMotion
          ? 'Enable Scroll Motion'
          : 'Static / Reduced Motion View';
        requestUpdate();
      });
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    preloadFramesInOrder();
    requestUpdate();
  }

  /* ------------------------------------------------------------------------
     4. LIGHT ON-SCROLL REVEALS & NUMBER COUNT-UPS (ALL PAGES)
     ------------------------------------------------------------------------ */
  function initScrollRevealsAndCountUps() {
    const revealEls = document.querySelectorAll('.reveal-up');
    const countEls = document.querySelectorAll('[data-count-to]');

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => revealObserver.observe(el));

      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCountUp(entry.target);
              countObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      countEls.forEach((el) => countObserver.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('visible'));
    }

    function animateCountUp(el) {
      const target = parseFloat(el.getAttribute('data-count-to') || '0');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const useComma = el.getAttribute('data-comma') === 'true';

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = formatNumber(target, decimals, useComma, prefix, suffix);
        return;
      }

      const duration = 1100;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const p = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = target * eased;
        el.textContent = formatNumber(current, decimals, useComma, prefix, suffix);
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = formatNumber(target, decimals, useComma, prefix, suffix);
        }
      }
      requestAnimationFrame(tick);
    }

    function formatNumber(val, decimals, useComma, prefix, suffix) {
      let str = val.toFixed(decimals);
      if (useComma) {
        const parts = str.split('.');
        parts[0] = parseInt(parts[0], 10).toLocaleString('en-IN');
        str = parts.join('.');
      }
      return `${prefix}${str}${suffix}`;
    }
  }

  /* ------------------------------------------------------------------------
     5. CROP TECH PAGE INTERACTIVE HONEST DATA MOCKUPS
     ------------------------------------------------------------------------ */
  const CROP_DIAGNOSIS_SAMPLES = {
    tomato: {
      crop: 'Tomato (Hybrid Abhinav) · 52 Days After Transplanting',
      location: 'Niphad Block, Nashik District',
      diagnosis: 'Early Blight (Alternaria solani)',
      confidence: '94.2% Match (High Confidence · 18,400 Field Samples)',
      severity: 'Moderate — Lower Canopy (14% Leaf Area Affected)',
      lesionDesc: 'Concentric target-ring dark brown lesions on older lower leaves with yellow halo border.',
      organicAction: 'Remove infected bottom leaves; spray Neem Kernel Extract (NSKE 5%) + Trichoderma viride @ 5g/liter.',
      chemicalAction: 'Mancozeb 75% WP @ 2.5g/liter of water (500g per acre in 200L water). Avoid spraying during peak noon sun.',
      beforeStat: '14.2% Canopy Lesion Spread · High Spore Risk',
      afterStat: '1.8% Residual Scarring · New Foliage Clean (Day 7 Check)',
      costSaved: '₹1,450/acre saved by avoiding broad-spectrum fungicide mix'
    },
    wheat: {
      crop: 'Rabi Wheat (HD-3226) · Tillering Stage (Day 44)',
      location: 'Khanna Block, Ludhiana District',
      diagnosis: 'Yellow Stripe Rust (Puccinia striiformis)',
      confidence: '96.1% Match (High Confidence · 24,100 Field Samples)',
      severity: 'Early Patch — Windward Border Rows (6% Plot Area)',
      lesionDesc: 'Parallel rows of yellowish-orange pustules running along leaf veins on upper blades.',
      organicAction: 'Spot-isolate affected border strip; apply sour buttermilk + cow-urine foliar bio-wash on surrounding rows.',
      chemicalAction: 'Propiconazole 25% EC @ 1 ml/liter of water focused only on infected windward patches first.',
      beforeStat: '6.0% Border Patch Active Pustules · Fast Wind Spread Risk',
      afterStat: '0.4% Dormant Necrotic Streaks · Zero Neighbor Spread (Day 8)',
      costSaved: '₹1,900/acre saved via border-strip spot treatment'
    },
    cotton: {
      crop: 'Bt Cotton · Boll Formation Stage (Day 78)',
      location: 'Yavatmal Block, Vidarbha',
      diagnosis: 'Pink Bollworm Early Entry (Pectinophora gossypiella)',
      confidence: '91.8% Match (Verified with Pheromone Trap Count)',
      severity: 'Watch Threshold — Rosetted Flowers Detected (9% Bolls)',
      lesionDesc: 'Twisted rosette-shaped blooms and pin-hole entry scars on young developing green bolls.',
      organicAction: 'Install 8 Gossyplure pheromone funnel traps/acre + release Trichogramma bactrae parasitoid cards.',
      chemicalAction: 'Azadirachtin 1500 ppm @ 5 ml/liter; escalate only if trap catch exceeds 8 moths/night for 3 nights.',
      beforeStat: '9.4% Rosetted Flowers · 11 Moths/Trap/Night',
      afterStat: '2.1% Boll Damage · 2 Moths/Trap/Night (Day 10 Check)',
      costSaved: '₹2,350/acre saved by halting 2 unnecessary synthetic sprays'
    }
  };

  const YIELD_FORECAST_PLOTS = {
    wheat: {
      plotName: 'Plot A — Rabi Milling Wheat (4.2 Acres · Alluvial Loam)',
      range: '18.6 – 20.2 Quintals / Acre',
      totalEst: '78.1 – 84.8 Quintals Total Harvest',
      historicalAvg: '16.9 Quintals / Acre (5-Year Plot Average)',
      weatherNote: '+14% favorable winter chill hours; zero terminal heat spike forecast through March 22.',
      soilNote: 'Soil moisture at 64% field capacity; basal + first top-dress Nitrogen absorbed cleanly.',
      pointsActual: '40,185 150,162 260,130 370,96',
      pointsForecast: '370,96 480,74 590,58',
      bandPolygon: '370,110 480,92 590,78 590,38 480,55 370,82',
      baselinePoints: '40,192 150,175 260,152 370,132 480,114 590,102'
    },
    soybean: {
      plotName: 'Plot B — Kharif Soybean JS-2034 (6.0 Acres · Black Cotton Soil)',
      range: '9.4 – 10.6 Quintals / Acre',
      totalEst: '56.4 – 63.6 Quintals Total Harvest',
      historicalAvg: '8.2 Quintals / Acre (5-Year Plot Average)',
      weatherNote: 'Monsoon distribution even; 9-day dry window during pod-filling offset by conserved furrow moisture.',
      soilNote: 'Rhizobium nodulation strong; Phosphorus sufficiency at 28 mg/kg.',
      pointsActual: '40,190 150,168 260,140 370,112',
      pointsForecast: '370,112 480,88 590,72',
      bandPolygon: '370,126 480,106 590,94 590,50 480,70 370,98',
      baselinePoints: '40,195 150,180 260,162 370,146 480,130 590,118'
    },
    turmeric: {
      plotName: 'River Plot — Salem Turmeric (2.5 Acres · Drip Irrigated)',
      range: '24.5 – 27.0 Quintals / Acre (Cured Dry)',
      totalEst: '61.2 – 67.5 Quintals Total Cured Yield',
      historicalAvg: '21.8 Quintals / Acre (4-Year Plot Average)',
      weatherNote: 'Humidity regulated; zero rhizome rot waterlogging events recorded this season.',
      soilNote: 'Organic carbon at 0.84%; Potassium booster applied at Week 14 rhizome bulking.',
      pointsActual: '40,188 150,158 260,122 370,88',
      pointsForecast: '370,88 480,62 590,46',
      bandPolygon: '370,102 480,80 590,66 590,28 480,44 370,74',
      baselinePoints: '40,194 150,172 260,148 370,126 480,108 590,94'
    }
  };

  const SOIL_TREND_METRICS = {
    npk: {
      title: 'Available Nitrogen (N), Phosphorus (P) & Potassium (K) — 16-Week Season Curve',
      currentVal: 'N: 248 kg/ha · P: 31 kg/ha · K: 290 kg/ha',
      status: 'OPTIMAL ROOT UPTAKE — Delay 3rd Urea Split by 5 Days',
      advice: 'Topsoil Nitrogen is holding steady after Legume intercrop residue incorporation. Reduce final Urea top-dressing by 15 kg/acre.',
      linePrimary: '40,150 130,92 220,118 310,78 400,102 490,88 580,84',
      lineSecondary: '40,170 130,155 220,148 310,138 400,132 490,128 580,124'
    },
    moisture: {
      title: 'Root-Zone Volumetric Moisture (%) at 15cm Depth — 16-Week Season Curve',
      currentVal: '62.4% Field Capacity (Target Band: 55% – 70%)',
      status: 'HEALTHY MOISTURE BUFFER — Next Irrigation in 4 Days',
      advice: 'Sub-surface moisture remained above stress threshold despite warm afternoon winds. Saves 18,000 liters/acre this week.',
      linePrimary: '40,135 130,84 220,125 310,76 400,112 490,90 580,94',
      lineSecondary: '40,160 130,160 220,160 310,160 400,160 490,160 580,160'
    },
    ph: {
      title: 'Soil pH & Electrical Conductivity (EC) Stability — 16-Week Season Curve',
      currentVal: 'pH 6.65 · EC 0.42 dS/m (Non-Saline Neutral Zone)',
      status: 'BALANCED pH — Micronutrient Lockup Prevented',
      advice: 'Farmyard manure + gypsum amendment corrected slight alkalinity from borewell water (was pH 7.45 at sowing).',
      linePrimary: '40,68 130,82 220,96 310,104 400,110 490,112 580,112',
      lineSecondary: '40,115 130,115 220,115 310,115 400,115 490,115 580,115'
    }
  };

  function initCropTechInteractions() {
    // 1. Disease Diagnosis Sample Switcher
    const diagBtns = document.querySelectorAll('[data-diag-sample]');
    if (diagBtns.length > 0) {
      diagBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-diag-sample');
          const d = CROP_DIAGNOSIS_SAMPLES[key];
          if (!d) return;
          diagBtns.forEach((b) => b.classList.toggle('active', b === btn));

          const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
          };
          setTxt('diag-crop-meta', d.crop);
          setTxt('diag-location', d.location);
          setTxt('diag-name', d.diagnosis);
          setTxt('diag-confidence', d.confidence);
          setTxt('diag-severity', d.severity);
          setTxt('diag-lesion-desc', d.lesionDesc);
          setTxt('diag-organic', d.organicAction);
          setTxt('diag-chemical', d.chemicalAction);
          setTxt('diag-before-stat', d.beforeStat);
          setTxt('diag-after-stat', d.afterStat);
          setTxt('diag-cost-saved', d.costSaved);
        });
      });
    }

    // 2. Yield Prediction Plot Switcher
    const yieldBtns = document.querySelectorAll('[data-yield-plot]');
    if (yieldBtns.length > 0) {
      yieldBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-yield-plot');
          const y = YIELD_FORECAST_PLOTS[key];
          if (!y) return;
          yieldBtns.forEach((b) => b.classList.toggle('active', b === btn));

          const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
          };
          setTxt('yield-plot-name', y.plotName);
          setTxt('yield-range-val', y.range);
          setTxt('yield-total-est', y.totalEst);
          setTxt('yield-hist-avg', y.historicalAvg);
          setTxt('yield-weather-note', y.weatherNote);
          setTxt('yield-soil-note', y.soilNote);

          const poly = document.getElementById('svg-yield-band');
          const actual = document.getElementById('svg-yield-actual');
          const forecast = document.getElementById('svg-yield-forecast');
          const baseline = document.getElementById('svg-yield-baseline');
          if (poly) poly.setAttribute('points', y.bandPolygon);
          if (actual) actual.setAttribute('points', y.pointsActual);
          if (forecast) forecast.setAttribute('points', y.pointsForecast);
          if (baseline) baseline.setAttribute('points', y.baselinePoints);
        });
      });
    }

    // 3. Soil Health Metric & Input Path Switcher
    const soilMetricBtns = document.querySelectorAll('[data-soil-metric]');
    const soilPathBtns = document.querySelectorAll('[data-soil-path]');

    soilMetricBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-soil-metric');
        const m = SOIL_TREND_METRICS[key];
        if (!m) return;
        soilMetricBtns.forEach((b) => b.classList.toggle('active', b === btn));

        const setTxt = (id, val) => {
          const el = document.getElementById(id);
          if (el) el.textContent = val;
        };
        setTxt('soil-chart-title', m.title);
        setTxt('soil-current-val', m.currentVal);
        setTxt('soil-status-badge', m.status);
        setTxt('soil-advice-copy', m.advice);

        const p1 = document.getElementById('svg-soil-primary');
        const p2 = document.getElementById('svg-soil-secondary');
        if (p1) p1.setAttribute('points', m.linePrimary);
        if (p2) p2.setAttribute('points', m.lineSecondary);
      });
    });

    soilPathBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const path = btn.getAttribute('data-soil-path');
        soilPathBtns.forEach((b) => b.classList.toggle('active', b === btn));
        const modeNote = document.getElementById('soil-input-mode-note');
        if (modeNote) {
          modeNote.textContent =
            path === 'photo'
              ? 'INPUT SOURCE: Smartphone Topsoil Macro Photo + Local Soil Health Card Baseline (±8% Tolerance)'
              : 'INPUT SOURCE: Connected LoRaWAN 3-Depth Root Probe · Live 15-Minute Telemetry (±1.5% Lab Precision)';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. LIVESTOCK TECH PAGE INTERACTIVE HONEST DATA MOCKUPS
     ------------------------------------------------------------------------ */
  const MILK_ANIMALS = {
    herd: {
      title: 'Full Milking Herd (24 Animals — 14 Murrah Buffalo, 10 Gir & HF Cows)',
      dailyYield: '268.5 Liters / Day',
      fatSnf: 'Avg Fat: 5.8% · Avg SNF: 8.8%',
      payout: '₹14,230 / Day Cooperative Payout',
      note: '14-day forecast projects +4.2% volume rise as 2 fresh-calved Murrah buffaloes enter peak lactation.',
      linePoints: '40,145 130,132 220,118 310,104 400,92 490,82 580,74'
    },
    gir104: {
      title: 'Tag #104 "Kamdhenu" — Gir Cross (Lactation #3 · Day 68)',
      dailyYield: '14.2 Liters / Day',
      fatSnf: 'Fat: 4.9% · SNF: 8.9%',
      payout: '₹710 / Day Cooperative Payout',
      note: 'Rumination steady at 490 min/day; zero sub-clinical mastitis conductivity spike.',
      linePoints: '40,130 130,118 220,106 310,98 400,94 490,90 580,88'
    },
    murrah209: {
      title: 'Tag #209 "Ganga" — Murrah Buffalo (Lactation #4 · Day 42)',
      dailyYield: '16.8 Liters / Day',
      fatSnf: 'Fat: 7.1% · SNF: 9.2%',
      payout: '₹1,040 / Day High-Fat Bonus Payout',
      note: 'Peak fat percentage achieved after cottonseed-cake + chelated mineral ration adjustment.',
      linePoints: '40,155 130,135 220,112 310,88 400,72 490,64 580,60'
    },
    hf118: {
      title: 'Tag #118 "Lakshmi" — HF Cross (Lactation #2 · Day 115)',
      dailyYield: '19.4 Liters / Day',
      fatSnf: 'Fat: 4.1% · SNF: 8.5%',
      payout: '₹855 / Day Cooperative Payout',
      note: 'Watch flag cleared 6 days ago after shade-misting reduced afternoon heat stress.',
      linePoints: '40,120 130,128 220,115 310,102 400,96 490,92 580,90'
    }
  };

  const RATION_PROFILES = {
    'murrah-fat': {
      label: 'Murrah Buffalo (550 kg) · Goal: Higher Milk Fat % (7.0%+)',
      dryBefore: '8.5 kg Wheat Straw (Unchopped)',
      dryAfter: '6.5 kg Chaffed Wheat Straw + 1.5 kg Legume Hay',
      greenBefore: '12.0 kg Hybrid Napier Only',
      greenAfter: '14.0 kg Napier + 4.0 kg Berseem / Lucerne',
      concBefore: '5.2 kg Market Mixed Pellet (Uncalibrated)',
      concAfter: '3.8 kg Cottonseed Cake + Crushed Maize + Bypass Fat (100g)',
      minBefore: 'None (Occasional Common Salt)',
      minAfter: '60g Area-Specific Chelated Mineral Mix + 30g Buffer',
      costBefore: '₹248 / animal / day',
      costAfter: '₹210 / animal / day (-₹38/day saved)',
      outcome: '+0.42% Milk Fat Increase & +1.1 Liters/Day'
    },
    'gir-volume': {
      label: 'Gir Cow (420 kg) · Goal: Peak Lactation Milk Volume',
      dryBefore: '7.0 kg Jowar Kadbi (Dry Stalks)',
      dryAfter: '5.5 kg Chaffed Jowar Kadbi + Urea-Molasses Treatment',
      greenBefore: '10.0 kg Maize Fodder',
      greenAfter: '13.0 kg Maize Fodder + 3.5 kg Cowpea Green',
      concBefore: '4.5 kg Groundnut Cake Only (Protein Excess)',
      concAfter: '3.2 kg Balanced Groundnut Cake + Wheat Bran + Jaggery Mix',
      minBefore: '20g Generic Powder',
      minAfter: '50g Calcium-Phosphorus Enriched Dairy Mineral Mix',
      costBefore: '₹212 / animal / day',
      costAfter: '₹181 / animal / day (-₹31/day saved)',
      outcome: '+1.4 Liters/Day & Timely 65-Day Post-Calving Heat'
    },
    'hf-dry': {
      label: 'HF Cross (500 kg) · Goal: Late-Pregnancy Dry Period Transition',
      dryBefore: '8.0 kg Paddy Straw (High Oxalate)',
      dryAfter: '6.0 kg Wheat Bhusa + 2.0 kg Dry Grass',
      greenBefore: '15.0 kg Lush Green Fodder',
      greenAfter: '12.0 kg Controlled Green Fodder (Anionic Balance)',
      concBefore: '3.0 kg Milking Ration (Wrong Calcium Ratio)',
      concAfter: '2.0 kg Pregnancy Transition Ration (Prevents Milk Fever)',
      minBefore: 'High-Calcium Lick Block',
      minAfter: '45g Pre-Calving Vitamin E + Selenium Transition Mix',
      costBefore: '₹190 / animal / day',
      costAfter: '₹162 / animal / day (-₹28/day saved)',
      outcome: 'Zero Milk Fever / Retained Placenta Risk at Calving'
    }
  };

  function initLivestockInteractions() {
    // 1. Cattle Status Filter
    const statusBtns = document.querySelectorAll('[data-herd-filter]');
    const rows = document.querySelectorAll('[data-animal-status]');
    statusBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-herd-filter');
        statusBtns.forEach((b) => b.classList.toggle('active', b === btn));
        rows.forEach((row) => {
          const st = row.getAttribute('data-animal-status');
          row.style.display = filter === 'all' || st === filter ? '' : 'none';
        });
      });
    });

    // 2. Milk Yield Switcher
    const milkBtns = document.querySelectorAll('[data-milk-animal]');
    milkBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-milk-animal');
        const m = MILK_ANIMALS[key];
        if (!m) return;
        milkBtns.forEach((b) => b.classList.toggle('active', b === btn));

        const setTxt = (id, val) => {
          const el = document.getElementById(id);
          if (el) el.textContent = val;
        };
        setTxt('milk-animal-title', m.title);
        setTxt('milk-daily-yield', m.dailyYield);
        setTxt('milk-fat-snf', m.fatSnf);
        setTxt('milk-daily-payout', m.payout);
        setTxt('milk-forecast-note', m.note);

        const poly = document.getElementById('svg-milk-line');
        if (poly) poly.setAttribute('points', m.linePoints);
      });
    });

    // 3. Feed Optimization Switcher
    const rationBtns = document.querySelectorAll('[data-ration-profile]');
    rationBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-ration-profile');
        const r = RATION_PROFILES[key];
        if (!r) return;
        rationBtns.forEach((b) => b.classList.toggle('active', b === btn));

        const setTxt = (id, val) => {
          const el = document.getElementById(id);
          if (el) el.textContent = val;
        };
        setTxt('ration-profile-label', r.label);
        setTxt('ration-dry-before', r.dryBefore);
        setTxt('ration-dry-after', r.dryAfter);
        setTxt('ration-green-before', r.greenBefore);
        setTxt('ration-green-after', r.greenAfter);
        setTxt('ration-conc-before', r.concBefore);
        setTxt('ration-conc-after', r.concAfter);
        setTxt('ration-min-before', r.minBefore);
        setTxt('ration-min-after', r.minAfter);
        setTxt('ration-cost-before', r.costBefore);
        setTxt('ration-cost-after', r.costAfter);
        setTxt('ration-outcome', r.outcome);
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. MARKET & FINANCE PAGE INTERACTIONS (BURGUNDY TRADING FLOOR SECTION)
     ------------------------------------------------------------------------ */
  const MANDI_COMMODITIES = {
    onion: {
      name: 'Red Onion (Summer Storage Grade-A) · Lasalgaon APMC, Maharashtra',
      spot: '₹2,180 / Quintal',
      forecast21: '₹2,460 – ₹2,590 / Quintal (+14.2% in 21 Days)',
      action: 'HOLD IN VENTILATED CHAWL FOR 14–18 DAYS',
      rationale: 'Late-rabi arrivals in Nashik belt are tapering 19% below 5-year average while southern buyer indent is rising.',
      altMandi: 'Pune Gultekdi APMC net after ₹95/qtl transport: ₹2,340/qtl (+₹160/qtl net advantage today).',
      histPoints: '40,165 130,152 220,140 310,126 380,116',
      forecastPoints: '380,116 480,86 580,64',
      bandPoints: '380,130 480,104 580,84 580,44 480,68 380,102'
    },
    soybean: {
      name: 'Yellow Soybean (FAQ <10% Moisture) · Indore APMC, Madhya Pradesh',
      spot: '₹4,620 / Quintal',
      forecast21: '₹4,840 – ₹4,950 / Quintal (+5.8% in 21 Days)',
      action: 'SELL 50% LOT NOW · HOLD 50% FOR SOLVENT PLANT TENDER',
      rationale: 'Crushing plant meal demand firming up; moisture below 10% commands a ₹110/qtl quality premium.',
      altMandi: 'Dewas Plant Gate Direct Delivery net: ₹4,735/qtl (Zero APMC hamali deduction).',
      histPoints: '40,150 130,142 220,136 310,128 380,120',
      forecastPoints: '380,120 480,98 580,82',
      bandPoints: '380,132 480,114 580,100 580,64 480,82 380,108'
    },
    wheat: {
      name: 'Sharbati / Lokwan Milling Wheat · Khanna & Sehore Mandi Index',
      spot: '₹2,540 / Quintal',
      forecast21: '₹2,650 – ₹2,740 / Quintal (+5.9% in 21 Days)',
      action: 'DIRECT ROLLER FLOUR MILL MATCH AVAILABLE AT ₹2,630/QTL',
      rationale: 'Private roller mills paying ₹90/qtl above MSP for clean graded lots with >11.5% protein.',
      altMandi: 'Direct FPO Farm-Gate Pickup byVerified Mill Buyer: ₹2,630/qtl (Immediate RTGS on weighbridge).',
      histPoints: '40,158 130,148 220,138 310,124 380,112',
      forecastPoints: '380,112 480,92 580,78',
      bandPoints: '380,124 480,108 580,96 580,60 480,76 380,98'
    }
  };

  function initMarketFinanceInteractions() {
    // 1. Mandi Price Forecast Switcher
    const mandiBtns = document.querySelectorAll('[data-mandi-crop]');
    mandiBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-mandi-crop');
        const c = MANDI_COMMODITIES[key];
        if (!c) return;
        mandiBtns.forEach((b) => b.classList.toggle('active', b === btn));

        const setTxt = (id, val) => {
          const el = document.getElementById(id);
          if (el) el.textContent = val;
        };
        setTxt('mandi-crop-name', c.name);
        setTxt('mandi-spot-price', c.spot);
        setTxt('mandi-forecast-price', c.forecast21);
        setTxt('mandi-action-pill', c.action);
        setTxt('mandi-rationale', c.rationale);
        setTxt('mandi-alt-note', c.altMandi);

        const hist = document.getElementById('svg-mandi-hist');
        const fore = document.getElementById('svg-mandi-fore');
        const band = document.getElementById('svg-mandi-band');
        if (hist) hist.setAttribute('points', c.histPoints);
        if (fore) fore.setAttribute('points', c.forecastPoints);
        if (band) band.setAttribute('points', c.bandPoints);
      });
    });

    // 2. Plainspoken AI Credit Score Simulator
    const creditChecks = document.querySelectorAll('[data-credit-points]');
    if (creditChecks.length > 0) {
      function updateCreditScore() {
        let score = 540; // Base score
        creditChecks.forEach((chk) => {
          if (chk.checked) {
            score += parseInt(chk.getAttribute('data-credit-points') || '0', 10);
          }
        });
        const scoreEl = document.getElementById('credit-score-number');
        const tierEl = document.getElementById('credit-tier-label');
        const limitEl = document.getElementById('credit-loan-limit');

        if (scoreEl) scoreEl.textContent = `${score} / 900`;
        if (score >= 740) {
          if (tierEl) tierEl.textContent = 'TIER A — PRIORITY KISAN WORKING CAPITAL ELIGIBLE';
          if (limitEl) limitEl.textContent = 'Pre-Approved up to ₹1,95,000 @ 7.0% p.a. (48-Hour Cooperative Disbursal)';
        } else if (score >= 660) {
          if (tierEl) tierEl.textContent = 'TIER B — STANDARD SEASONAL INPUT CREDIT ELIGIBLE';
          if (limitEl) limitEl.textContent = 'Pre-Approved up to ₹1,15,000 @ 7.5% p.a. (No Physical Collateral Required)';
        } else {
          if (tierEl) tierEl.textContent = 'TIER C — STARTER MICRO-INPUT & DAIRY LINE ELIGIBLE';
          if (limitEl) limitEl.textContent = 'Pre-Approved up to ₹55,000 via FPO Joint-Liability Group';
        }
      }
      creditChecks.forEach((chk) => chk.addEventListener('change', updateCreditScore));
      updateCreditScore();
    }
  }

  /* ------------------------------------------------------------------------
     8. ADVISORY & ACCESSIBILITY PAGE INTERACTIONS (VOICE + WHATSAPP/SMS)
     ------------------------------------------------------------------------ */
  const ADVISORY_DATA = {
    hi: {
      langName: 'हिन्दी (Hindi)',
      voicePrompt: '“मेरी टमाटर की निचली पत्तियों पर काले गोल धब्बे दिख रहे हैं। आज शाम क्या छिड़काव करूँ?”',
      voiceAnswer: '“नमस्ते रामजी भाई। यह अगेती झुलसा (Early Blight) के शुरुआती लक्षण हैं। आज शाम 4 बजे के बाद 2.5 ग्राम मैंकोजेब प्रति लीटर पानी में मिलाकर छिड़कें। कल सुबह बारिश की संभावना नहीं है, इसलिए दवाई पूरी तरह असर करेगी।”',
      schemeTag: 'संबद्ध योजना: राष्ट्रीय बागवानी मिशन एवं फसल सुरक्षा सलाह',
      waFarmer: 'पत्ती की फोटो भेजी + आवाज़ संदेश (0:09 सेकंड)',
      waBot: 'निदान: अगेती झुलसा (94% मिलान)। मात्रा: 500 ग्राम मैंकोजेब / 200 लीटर पानी प्रति एकड़। नज़दीकी जन-औषधि/एग्रो केंद्र: निफाड एफपीओ स्टोर (₹310)।',
      smsIn: 'MAATI WHEAT 141401',
      smsOut: 'MAATI ALERT [Khanna 141401]: अगले 5 दिन मौसम साफ (24°C/9°C)। गेहूं में पीला रतुआ से बचाव हेतु खेत की उत्तरी मेड़ जांचें। टोल-फ्री: 1800-120-4455'
    },
    mr: {
      langName: 'मराठी (Marathi)',
      voicePrompt: '“माझ्या कांद्याच्या पातीवर पिवळे चट्टे आणि शेंडे करपलेले दिसत आहेत, कोणती फवारणी घ्यावी?”',
      voiceAnswer: '“रामराम शेतकरी मित्रांनो. हे करपा रोगाचे (Purple Blotch) लक्षण आहे. प्रति लिटर पाण्यात २ ग्रॅम मॅन्कोझेब अधिक स्टिकर मिसळून संध्याकाळी फवारणी करा. पुढील ३ दिवस हवामान कोरडे राहील.”',
      schemeTag: 'जोडलेली योजना: महात्मा फुले कृषी सल्ला व लासलगाव मंडी भाव',
      waFarmer: 'कांदा पातीचा फोटो + व्हॉइस नोट (0:11 सेकंद)',
      waBot: 'निदान: जांभळा करपा (93% खात्री). उपाय: मॅन्कोझेब २.५ ग्रॅम/लिटर. आजचा लासलगाव कांदा भाव: ₹२,१८०/क्विंटल (वाढण्याचा अंदाज).',
      smsIn: 'MAATI ONION 422303',
      smsOut: 'MAATI [Niphad 422303]: पुढील ४८ तास धुके पडण्याची शक्यता. कांदा पिकावर सकाळी पाणी देणे टाळा. लासलगाव भाव: रु २१८०/क्विंटल.'
    },
    ta: {
      langName: 'தமிழ் (Tamil)',
      voicePrompt: '“என் நெல் வயலில் இலைகள் மஞ்சள் நிறமாக மாறி புள்ளிகள் உள்ளன, என்ன மருந்து அடிக்கலாம்?”',
      voiceAnswer: '“வணக்கம் விவசாயி அவர்களே. இது நெல் குலைநோய் (Blast) அறிகுறியாகும். ஒரு லிட்டர் தண்ணீருக்கு 2 கிராம் டிரைசைக்ளசோல் கலந்து மாலை நேரத்தில் தெளிக்கவும். அடுத்த 3 நாட்களுக்கு மழை இல்லை.”',
      schemeTag: 'திட்டம்: தமிழ்நாடு நுண்ணீர்ப் பாசன மானியம் & பயிர் காப்பீடு',
      waFarmer: 'நெல் இலை புகைப்படம் + குரல் பதிவு (0:08 வினாடி)',
      waBot: 'கண்டறிதல்: நெல் குலைநோய் (95% துல்லியம்). பரிந்துரை: டிரைசைக்ளசோல் 2 கிராம்/லிட்டர். தஞ்சாவூர் கொள்முதல் நிலைய விலை: ₹2,320/குவிண்டால்.',
      smsIn: 'MAATI PADDY 613001',
      smsOut: 'MAATI [Thanjavur 613001]: அடுத்த 4 நாட்களுக்கு வறண்ட வானிலை. தழைச்சத்து உரத்தை இரண்டாம் தவணையாக இட ஏற்ற நேரம். உதவி: 1800-120-4455'
    },
    te: {
      langName: 'తెలుగు (Telugu)',
      voicePrompt: '“మిరప తోటలో ఆకులు ముడుచుకుపోతున్నాయి, పూత రాలుతోంది. ఏ మందు పిచికారీ చేయాలి?”',
      voiceAnswer: '“నమస్కారం రైతు సోదరా. ఇది తామర పురుగుల (Thrips) ప్రభావం. ఎకరానికి 8 నీలి రంగు జిగురు అట్టలు పెట్టండి మరియు వేప నూనె 5 మి.లీ లీటరు నీటికి కలిపి సాయంత్రం పిచికారీ చేయండి.”',
      schemeTag: 'పథకం: రైతు భరోసా & గుంటూరు మిర్చి యార్డ్ ధరల సమాచారం',
      waFarmer: 'మిరప ఆకు ఫోటో + వాయిస్ మెసేజ్ (0:10 సెకన్లు)',
      waBot: 'నిర్ధారణ: తామర పురుగు (92% ఖచ్చితత్వం). వేప నూనె 1500 ppm @ 5ml/L. గుంటూరు యార్డ్ తేజ మిర్చి ధర: ₹19,400/క్వింటాల్.',
      smsIn: 'MAATI CHILLI 522001',
      smsOut: 'MAATI [Guntur 522001]: రాగల 3 రోజులు పొడి వాతావరణం. మిరపలో తామర పురుగు నివారణకు సాయంత్రం వేప నూనె పిచికారీ చేయండి.'
    },
    pa: {
      langName: 'ਪੰਜਾਬੀ (Punjabi)',
      voicePrompt: '“ਮੇਰੀ ਕਣਕ ਦੇ ਪੱਤਿਆਂ ਉੱਤੇ ਪੀਲੀਆਂ ਧਾਰੀਆਂ ਪੈ ਰਹੀਆਂ ਹਨ, ਕਿਹੜੀ ਸਪਰੇਅ ਕਰੀਏ?”',
      voiceAnswer: '“ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਕਿਸਾਨ ਵੀਰੋ। ਇਹ ਪੀਲੀ ਕੁੰਗੀ (Yellow Rust) ਦੀ ਸ਼ੁਰੂਆਤ ਹੈ। ਸਿਰਫ਼ ਪ੍ਰਭਾਵਿਤ ਹਿੱਸੇ ਵਿੱਚ 200 ਮਿਲੀਲੀਟਰ ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ 25 EC ਨੂੰ 200 ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਪਾ ਕੇ ਸਪਰੇਅ ਕਰੋ।”',
      schemeTag: 'ਯੋਜਨਾ: ਪੀ.ਐਮ-ਕਿਸਾਨ ਤੇ ਖੰਨਾ ਮੰਡੀ ਕਣਕ ਭਾਅ',
      waFarmer: 'ਕਣਕ ਦੇ ਪੱਤੇ ਦੀ ਫੋਟੋ + ਆਵਾਜ਼ ਸੁਨੇਹਾ (0:09 ਸਕਿੰਟ)',
      waBot: 'ਪਛਾਣ: ਪੀਲੀ ਕੁੰਗੀ (96% ਸਹੀ)। ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ 1 ਮਿ.ਲੀ./ਲੀਟਰ ਪਾਣੀ। ਅਗਲੇ 5 ਦਿਨ ਧੁੱਪ ਰਹੇਗੀ, ਸਪਰੇਅ ਲਈ ਸਹੀ ਸਮਾਂ।',
      smsIn: 'MAATI WHEAT 141401',
      smsOut: 'MAATI [Ludhiana 141401]: ਰਾਤ ਦਾ ਤਾਪਮਾਨ 7°C। ਕਣਕ ਦੀ ਫ਼ਸਲ ਨੂੰ ਹਲਕਾ ਪਾਣੀ ਲਗਾਓ। ਖੰਨਾ ਮੰਡੀ ਭਾਅ: ਰੁ 2540/ਕੁਇੰਟਲ।'
    },
    en: {
      langName: 'English',
      voicePrompt: '“My tomato lower leaves have dark concentric rings with yellow edges. What should I spray this evening?”',
      voiceAnswer: '“Hello Ramji bhai. Those concentric target rings indicate Early Blight (Alternaria solani). Spray Mancozeb 75% WP at 2.5 grams per liter of water after 4 PM today. Skies are clear for the next 72 hours so uptake will be strong.”',
      schemeTag: 'Linked Program: PMFBY Crop Protection & Local FPO Input Desk',
      waFarmer: 'Sent 1 Leaf Photo (48 KB compressed) + Voice Note (0:09s)',
      waBot: 'Diagnosis: Early Blight (94.2% Match). Dosage: 500g Mancozeb in 200L water/acre. Available at Niphad FPO Cooperative Desk for ₹310.',
      smsIn: 'MAATI TOMATO 422303',
      smsOut: 'MAATI ALERT [Niphad 422303]: Clear dry window next 72 hrs (31C/16C). Complete preventative blight spray before Friday dew. Help: 1800-120-4455'
    }
  };

  function renderAdvisoryLanguage(langKey) {
    const data = ADVISORY_DATA[langKey] || ADVISORY_DATA.hi;
    document.querySelectorAll('[data-advisory-lang]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-advisory-lang') === langKey);
    });

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    setTxt('adv-active-lang-name', data.langName);
    setTxt('adv-voice-prompt', data.voicePrompt);
    setTxt('adv-voice-answer', data.voiceAnswer);
    setTxt('adv-scheme-tag', data.schemeTag);
    setTxt('adv-wa-farmer', data.waFarmer);
    setTxt('adv-wa-bot', data.waBot);
    setTxt('adv-sms-in', data.smsIn);
    setTxt('adv-sms-out', data.smsOut);
  }

  function initAdvisoryInteractions() {
    const langBtns = document.querySelectorAll('[data-advisory-lang]');
    langBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-advisory-lang');
        renderAdvisoryLanguage(code);
      });
    });

    // Speak / Play Audio Simulation Button
    const speakBtn = document.getElementById('btn-play-voice-answer');
    const voiceStatus = document.getElementById('voice-playback-status');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        const answerText = document.getElementById('adv-voice-answer')?.textContent || '';
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(answerText.replace(/[“”]/g, ''));
          utter.rate = 0.95;
          utter.onstart = () => {
            if (voiceStatus) voiceStatus.textContent = 'SPEAKING RESPONSE ALOUD...';
          };
          utter.onend = () => {
            if (voiceStatus) voiceStatus.textContent = 'AUDIO PLAYBACK COMPLETE · TAP TO REPLAY';
          };
          window.speechSynthesis.speak(utter);
        } else if (voiceStatus) {
          voiceStatus.textContent = 'PLAYING VOICE ADVISORY STREAM (0:14s)...';
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     9. SATELLITE, DRONE & WEATHER PAGE INTERACTIONS
     ------------------------------------------------------------------------ */
  const NDVI_SECTORS = {
    'A1': { zone: 'HEALTHY CANOPY', ndvi: '0.78', moisture: '66%', action: 'No treatment needed. Maintain standard 5-day drip schedule.' },
    'A2': { zone: 'HEALTHY CANOPY', ndvi: '0.76', moisture: '64%', action: 'No treatment needed. Vigorous chlorophyll reflectance.' },
    'A3': { zone: 'WATCH — MILD STRESS', ndvi: '0.52', moisture: '48%', action: 'Check secondary lateral valve #2 for partial pressure drop.' },
    'A4': { zone: 'HEALTHY CANOPY', ndvi: '0.74', moisture: '63%', action: 'No treatment needed. Uniform row closure.' },
    'B1': { zone: 'HEALTHY CANOPY', ndvi: '0.80', moisture: '68%', action: 'No treatment needed. Reference benchmark plot.' },
    'B2': { zone: 'WATCH — MILD STRESS', ndvi: '0.55', moisture: '51%', action: 'Mild foliar nitrogen dip; scheduled for 15 kg/acre foliar urea.' },
    'B3': { zone: 'CRITICAL STRESS ZONE', ndvi: '0.32', moisture: '31%', action: 'URGENT: Clogged drip emitter line + early mite hotspot. Targeted drone spray queued.' },
    'B4': { zone: 'WATCH — MILD STRESS', ndvi: '0.49', moisture: '46%', action: 'Border wind exposure; include in targeted perimeter spray pass.' },
    'C1': { zone: 'HEALTHY CANOPY', ndvi: '0.77', moisture: '65%', action: 'No treatment needed.' },
    'C2': { zone: 'CRITICAL STRESS ZONE', ndvi: '0.35', moisture: '34%', action: 'URGENT: Root-zone water stress + fungal patch. Dispatch field scout to Sector C2.' },
    'C3': { zone: 'CRITICAL STRESS ZONE', ndvi: '0.29', moisture: '29%', action: 'URGENT: Primary stress core (1.6 Acres). Included in Drone Prescription Polygon #1.' },
    'C4': { zone: 'HEALTHY CANOPY', ndvi: '0.71', moisture: '61%', action: 'No treatment needed.' },
    'D1': { zone: 'HEALTHY CANOPY', ndvi: '0.79', moisture: '67%', action: 'No treatment needed.' },
    'D2': { zone: 'WATCH — MILD STRESS', ndvi: '0.54', moisture: '50%', action: 'Monitor over next 5-day Sentinel-2 pass before applying fertilizer.' },
    'D3': { zone: 'HEALTHY CANOPY', ndvi: '0.75', moisture: '64%', action: 'No treatment needed.' },
    'D4': { zone: 'HEALTHY CANOPY', ndvi: '0.76', moisture: '65%', action: 'No treatment needed.' }
  };

  function initSatelliteWeatherInteractions() {
    // 1. NDVI Sector Grid Inspector
    const sectorCells = document.querySelectorAll('[data-sector-id]');
    sectorCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const id = cell.getAttribute('data-sector-id');
        const info = NDVI_SECTORS[id];
        if (!info) return;
        sectorCells.forEach((c) => c.classList.toggle('selected', c === cell));

        const setTxt = (elId, val) => {
          const el = document.getElementById(elId);
          if (el) el.textContent = val;
        };
        setTxt('ndvi-selected-id', `Sector ${id} (1.375 Acres)`);
        setTxt('ndvi-selected-zone', info.zone);
        setTxt('ndvi-selected-val', `NDVI ${info.ndvi} · Soil Moisture ${info.moisture}`);
        setTxt('ndvi-selected-action', info.action);
      });
    });

    // 2. Drone Spray Mode Comparator (Targeted vs Blanket)
    const droneBtns = document.querySelectorAll('[data-drone-mode]');
    droneBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-drone-mode');
        droneBtns.forEach((b) => b.classList.toggle('active', b === btn));
        const setTxt = (id, val) => {
          const el = document.getElementById(id);
          if (el) el.textContent = val;
        };
        if (mode === 'targeted') {
          setTxt('drone-mode-headline', 'Prescription Zone Spray: Only 6.4 of 22.0 Acres Treated');
          setTxt('drone-water-used', '64 Liters Ultra-Low-Volume (ULV)');
          setTxt('drone-chem-cost', '₹6,600 Total Chemical Cost (68% Saved)');
          setTxt('drone-flight-time', '28 Minutes Autonomous Flight · Zero Soil Compaction');
        } else {
          setTxt('drone-mode-headline', 'Old Blanket Spray: All 22.0 Acres Sprayed Blindly');
          setTxt('drone-water-used', '4,400 Liters Tractor Tanker Water');
          setTxt('drone-chem-cost', '₹20,800 Total Chemical Cost (₹14,200 Wasted on Healthy Crop)');
          setTxt('drone-flight-time', '2.5 Days Manual Knapsack / Tractor Labor');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     BOOT ON DOM READY
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initNavigationAndModals();
    initHomeHeroSequence();
    initScrollRevealsAndCountUps();
    initCropTechInteractions();
    initLivestockInteractions();
    initMarketFinanceInteractions();
    initAdvisoryInteractions();
    initSatelliteWeatherInteractions();
  });
})();
