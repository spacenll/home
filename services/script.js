document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("langToggle");

    // تخزين النصوص لكل لغة
    const translations = {
        ar: {
            home: "الرئيسية",
            services: "الخدمات",
            portfolio: "اعمالي",
            shop: "متجري",
            contact: "تواصل معي",
            welcome: "مرحبًا بك في عالم الإبداع",
            description: "اقدم لك أفضل الحلول في التصميم، البرمجة، والمونتاج",
            explore: "استكشف خدماتنا",
            service1: "التصميم الجرافيكي",
            service1_desc: "تصميم الشعارات، الإعلانات، والبطاقات.",
            service2: "تصميم الفيديو",
            service2_desc: "موشن جرافيك، مونتاج، وإعلانات CGI.",
            service3: "البرمجة والمواقع",
            service3_desc: "تطوير المواقع، برامج المحاسبة، والصيانة.",
            our_work: "أعمالنا",
            contact_us: "تواصل معنا",
            location: "📍 عمان - صلالة",
            phone: "📞 +968 77267075",
            website: "🌍 موقعنا الإلكتروني",
            ourserveice: "خدماتنا",
            ourworks: "اعمالنا",
            footer: "© 2025 Eng. Ala Aldin Mohamed Khalil - جميع الحقوق محفوظة"
            
        },
        en: {
            home: "Home",
            services: "Services",
            portfolio: "Portfolio",
            contact: "Contact",
             shop: "Shop",
            welcome: "Welcome to the World of Creativity",
            description: "I provide the best solutions in design, programming, and video editing.",
            explore: "Explore Our Services",
            service1: "Graphic Design",
            service1_desc: "Logo design, advertisements, and business cards.",
            service2: "Video Production",
            service2_desc: "Motion graphics, video editing, and CGI ads.",
            service3: "Web & Software",
            service3_desc: "Website development, accounting software, and IT support.",
            our_work: "My Work",
            contact_us: "Contact Us",
            location: "📍 Oman - Salalah",
            phone: "📞 +968 77267075",
            website: "🌍 My Website",
            ourworks: "My works",
            ourserveice: "My services",
            footer: "© 2025 Eng. Ala Aldin Mohamed Khalil - All Rights Reserved"
        }
    };

    // تغيير النصوص عند تبديل اللغة
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        langToggle.textContent = lang === "ar" ? "EN" : "AR";

        // تحديث جميع العناصر التي تحتاج ترجمة
        document.getElementById("nav-home").textContent = translations[lang].home;
        document.getElementById("nav-services").textContent = translations[lang].services;
          document.getElementById("shop").textContent = translations[lang].shop;
        document.getElementById("nav-portfolio").textContent = translations[lang].portfolio;
        document.getElementById("nav-contact").textContent = translations[lang].contact;
        document.getElementById("hero-title").textContent = translations[lang].welcome;
        document.getElementById("hero-desc").textContent = translations[lang].description;
        document.getElementById("explore-btn").textContent = translations[lang].explore;
        document.getElementById("service1").textContent = translations[lang].service1;
        document.getElementById("service1-desc").textContent = translations[lang].service1_desc;
        document.getElementById("service2").textContent = translations[lang].service2;
        document.getElementById("service2-desc").textContent = translations[lang].service2_desc;
        document.getElementById("service3").textContent = translations[lang].service3;
        document.getElementById("service3-desc").textContent = translations[lang].service3_desc;
        document.getElementById("nav-portfolio").textContent = translations[lang].our_work;
        document.getElementById("contact-title").textContent = translations[lang].contact_us;
        document.getElementById("location").textContent = translations[lang].location;
        document.getElementById("sservices").textContent = translations[lang].ourserveice;
        document.getElementById("wworks").textContent = translations[lang]. our_work;
        document.getElementById("phone").textContent = translations[lang].phone;
        
        document.getElementById("footer").textContent = translations[lang].footer;

        // تخزين اللغة المحددة في localStorage
        localStorage.setItem("selectedLang", lang);
    }

    // تحميل اللغة المحفوظة
    const savedLang = localStorage.getItem("selectedLang") || "ar";
    changeLanguage(savedLang);

    // عند النقر على زر التبديل
    langToggle.addEventListener("click", function () {
        const newLang = document.documentElement.lang === "ar" ? "en" : "ar";
        changeLanguage(newLang);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });
});
