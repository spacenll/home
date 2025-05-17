

window.addEventListener('popstate', function() {
    const path = location.pathname.replace('/', '');
    if (path) {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    }
});


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
            explore: "استكشف خدماتي",
            service1: "التصميم الجرافيكي",
            service1_desc: "تصميم الشعارات، الإعلانات، والبطاقات.",
            service2: "تصميم الفيديو",
            service2_desc: "موشن جرافيك، مونتاج، وإعلانات CGI.",
            service3: "البرمجة والمواقع",
            service3_desc: "تطوير المواقع، برامج المحاسبة، والصيانة.",
            our_work: "اعمالي",
            contact_us: "تواصل معي",
            location: "📍 عمان - صلالة",
            phone: "📞 +968 77267075",
            website: "🌍 موقعي الإلكتروني",
            ourserveice: "خدماتي",
            ourworks: "بعض اعمالي",
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
            contact_us: "Contact me",
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
$(document).ready(function () {
    // تحميل جميع الصور والفيديوهات عند تحميل الصفحة
    loadGallery("ramadan");

    // عند النقر على زر تصفية
    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        let category = $(this).data("category");
        loadGallery(category);
    });

    // دالة تحميل الصور والفيديوهات بناءً على التصنيف
   function loadGallery(category) {
    $("#gallery").html(""); // تفريغ المحتوى السابق

    let folder = category === "ramadan" ? "ramadan" : category;

    let assets = {
        "websites": [
            { type: "image", src: "assets/2/webpage_design (1).jpg", link: "https://marktech-agency.com/" },
            { type: "image", src: "assets/2/webpage_design (2).jpg", link: "https://topmedclinics.com/" },
            { type: "image", src: "assets/2/webpage_design (3).jpg", link: "https://spacenll.site/shop" },
            { type: "image", src: "assets/2/webpage_design (4).jpg", link: "https://modernbuildings.site/" },
            { type: "image", src: "assets/2/webpage_design (5).jpg", link: "https://emaar-gulf-global.com/" }
        ],
        "publications": [
            { type: "image", src: "assets/3/2d works (1).jpg" },
            { type: "image", src: "assets/3/2d works (2).jpg" },
            { type: "image", src: "assets/3/2d works (3).jpg" },
            { type: "image", src: "assets/3/2d works (1).png" },
            { type: "image", src: "assets/3/2d works (2).png" },
            { type: "image", src: "assets/3/خط كوفي تربيعي 1.png" },
            { type: "image", src: "assets/3/خط كوفي تربيعي.png" }
        ],
        "ads": [
            { type: "video", src: "assets/4/CGI works (1).mp4" },
            { type: "video", src: "assets/4/CGI works (2).mp4" },
            { type: "video", src: "assets/4/motion video (1).mp4" },
            { type: "video", src: "assets/4/motion video (2).mp4" }
        ],
        "3d-designs": [
            { type: "image", src: "assets/5/3d works 1.jpg" },
            { type: "image", src: "assets/5/3d works 2.jpg" },
            { type: "image", src: "assets/5/3d works 1.png" },
            { type: "image", src: "assets/5/3d works.png" },
            { type: "image", src: "assets/5/3d works.jpg" }
        ],
        "ramadan": [
            { type: "image", src: "assets/6/تصماميم رمضانية (3).png" },
            { type: "image", src: "assets/6/تصماميم رمضانية (1).png" },
            { type: "image", src: "assets/6/تصماميم رمضانية (2).png" },
            { type: "image", src: "assets/6/تصماميم رمضانية (5).png" },
            { type: "image", src: "assets/6/تصماميم رمضانية (6).png" },
            { type: "image", src: "assets/6/تصماميم رمضانية (4).png" }
        ],
        "logo": [
            { type: "image", src: "assets/img/logo (1).jpg" },
            { type: "image", src: "assets/img/logo (2).jpg" },
            { type: "image", src: "assets/img/logo (3).jpg" },
            { type: "image", src: "assets/img/logo (5).jpg" },
            { type: "image", src: "assets/img/logo (4).jpg" }
        ],
        "adsboard": [
            { type: "image", src: "assets/7/تصماميم لوحات ترويجية.jpg" }
        ],
        "productbackground": [
            { type: "image", src: "assets/8/تصميم خلفية للمنتجات (1).jpg" },
            { type: "image", src: "assets/8/تصميم خلفية للمنتجات (2).jpg" }
        ],
        "logo-animation": [
            { type: "video", src: "assets/1/logo motion.mp4" }
        ]
    };

    // ✅ التحقق من وجود المجلد داخل assets قبل التكرار
    if (assets[folder]) {
        assets[folder].forEach(item => {
            let element;

            if (item.type === "image") {
                if (item.link) {
                    element = `
                        <div class="gallery-item">
                            <a href="${item.link}" target="_blank">
                                <img src="${item.src}" alt="">
                            </a>
                        </div>
                    `;
                } else {
                    element = `
                        <div class="gallery-item">
                            <img src="${item.src}" alt="">
                        </div>
                    `;
                }
            } else if (item.type === "video") {
                element = `
                    <div class="gallery-item">
                        <video controls>
                            <source src="${item.src}" type="video/mp4">
                            متصفحك لا يدعم تشغيل الفيديو.
                        </video>
                    </div>
                `;
            }

            $("#gallery").append(element);
        });
    } else {
        $("#gallery").html("<p>لا توجد عناصر في هذا القسم.</p>");
    }
}
    // زر الرجوع للأعلى
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

      $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
        return false;
    });
  } // نهاية loadGallery
});

