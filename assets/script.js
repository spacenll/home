//script.js

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
            our_work: "بعض اعمالي",
            contact_us: "تواصل معي",
            pos: "المحاسبة",
            pos_butt: "لطلب برنامج المحاسبة",
            location: "📍 عمان - صلالة",
            phone: "📞 +968 77267075",
            website: "🌍 موقعي الإلكتروني",
            ourserveice: "خدماتي",
            ourworks: "بعض اعمالي",
            logo_lan: "الشعارات",
corner_lan: "كورنر وبوث",
cups_lan: "اكواب",
boxes_lan: "بوكسات",
interface_lan: "الواجهات والاعلانات",
cards_lan: "القسائم والكتيبات",
publications_lan: "الأعمال والمنشورات",
websites_lan: "المواقع الالكترونية",
ads_lan: "اعلانات الفيديو",
logo_animation_lan: "تحريك اللوغو",
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
             pos: "POS",
             pos_butt: "contact",
            contact_us: "Contact me",
            logo_lan: "logo",
corner_lan: "corner",
cups_lan: "cups",
boxes_lan: "boxes",
interface_lan: "interface",
cards_lan: "cards",
publications_lan: "publications",
websites_lan: "websites",
ads_lan: "ads",
logo_animation_lan: "logo-animation",
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
         document.getElementById("pos").textContent = translations[lang].pos; 
        document.getElementById("logo_lan").textContent = translations[lang].logo_lan;
document.getElementById("corner_lan").textContent = translations[lang].corner_lan;
document.getElementById("cups_lan").textContent = translations[lang].cups_lan;
document.getElementById("boxes_lan").textContent = translations[lang].boxes_lan;
document.getElementById("interface_lan").textContent = translations[lang].interface_lan;
document.getElementById("cards_lan").textContent = translations[lang].cards_lan;
document.getElementById("publications_lan").textContent = translations[lang].publications_lan;
document.getElementById("websites_lan").textContent = translations[lang].websites_lan;
document.getElementById("ads_lan").textContent = translations[lang].ads_lan;
document.getElementById("logo_animation_lan").textContent = translations[lang].logo_animation_lan;

        document.getElementById("pos_butt").textContent = translations[lang].pos_butt;
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
        let defaultBtn = $(".filter-btn[data-type='corner']");
    loadGallery("corner");

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

    let folder = category === "corner" ? "corner" : category;

    let assets = {
        "websites": [
            { type: "image", src: "assets/2/webpage_design (1).jpg", alt: "معاينة تصميم صفحة ويب لموقع شركة مارك تك", link: "https://marktech-agency.com/"  },
          {
  type: "image",
  src: "assets/2/webpage_design (2).jpg",
  link: "https://topmedclinics.com/",
  alt: "تصميم موقع TopMed Clinics الطبي"
},
{
  type: "image",
  src: "assets/2/webpage_design (3).jpg",
  link: "https://spacenll.site/shop",
  alt: "تصميم متجر SpaceNLL الإلكتروني"
},
{
  type: "image",
  src: "assets/2/webpage_design (4).jpg",
  link: "https://modernbuildings.site/",
  alt: "تصميم موقع Modern Buildings الإنشائي"
},
{
  type: "image",
  src: "assets/2/webpage_design (5).jpg",
  link: "https://emaar-gulf-global.com/",
  alt: "تصميم موقع Emaar Gulf Global العقاري"
}
        ],
    "cups": [
    { "type": "image", "src": "assets/3/1 (1).jpg", alt: "تصميم احترافي لكوب لقمة كافيه" },
    { "type": "image", "src": "assets/3/1 (2).jpg" , alt: "تصميم احترافي لكوب جوفا كافيه"  },
    { "type": "image", "src": "assets/3/1 (3).jpg" , alt: "تصميم احترافي لكوب جوفا كافيه" },
    { "type": "image", "src": "assets/3/1 (4).jpg" , alt: "تصميم احترافي لكوب جوفا كافيه" },
    { "type": "image", "src": "assets/3/1 (5).jpg" , alt: "تصميم احترافي لكوب كرك البنز" },
    { "type": "image", "src": "assets/3/1 (7).jpg" , alt: "تصميم احترافي لكوب ايكون كافيه" }
],
        
            "boxes": [
    { "type": "image", "src": "assets/5/1.png" },
    { "type": "image", "src": "assets/5/2.png" },
    { "type": "image", "src": "assets/5/1 (1).jpg" },
    { "type": "image", "src": "assets/5/1 (2).jpg" },
    { "type": "image", "src": "assets/5/1 (3).jpg" },
    { "type": "image", "src": "assets/5/1 (4).jpg" },
    { "type": "image", "src": "assets/5/1 (5).jpg" },
    { "type": "image", "src": "assets/5/1 (6).jpg" },
    { "type": "image", "src": "assets/5/1 (1).jpeg" },
    { "type": "image", "src": "assets/5/1 (2).jpeg" },
    { "type": "image", "src": "assets/5/1 (3).jpeg" },
    { "type": "image", "src": "assets/5/1 (4).jpeg" }
],       
        
        "interface": [
    { "type": "image", "src": "assets/9/1.jpeg" },
    { "type": "image", "src": "assets/9/1 (1).jpg" },
    { "type": "image", "src": "assets/9/1 (2).jpg" },
    { "type": "image", "src": "assets/9/1 (3).jpg" },
    { "type": "image", "src": "assets/9/1 (1).png" },
    { "type": "image", "src": "assets/9/1 (2).png" }
  
],
        "ads": [
             { type: "video", src: "assets/4/videooad.mp4" },
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
        "corner": [
            { type: "image", src: "assets/6/1 (1).jpeg" },
            { type: "image", src: "assets/6/1 (1).jpg" },
            { type: "image", src: "assets/6/1 (1).png" },
            { type: "image", src: "assets/6/1 (2).jpeg" },
            { type: "image", src: "assets/6/1 (2).jpg" },
            { type: "image", src: "assets/6/1 (3).jpg" }
        ],
            "cards": [
            { type: "image", src: "assets/8/1 (1).jpg" },
            { type: "image", src: "assets/8/1 (2).jpg" },
            { type: "image", src: "assets/8/1.jpeg" },
            { type: "image", src: "assets/8/1.png" }
         
        ],
        "logo": [
            { type: "image", src: "assets/7/1 (1).jpg" },
            { type: "image", src: "assets/7/1 (2).jpg" },
            { type: "image", src: "assets/7/1 (1).png" },
            { type: "image", src: "assets/7/1 (2).png" },
            { type: "image", src: "assets/7/1 (3).png" }
        ],
        "adsboard": [
            { type: "image", src: "assets/7/تصماميم لوحات ترويجية.jpg" }
        ],
        "publications": [
         { "type": "image", "src": "assets/10/1 (1).jpg" },
    { "type": "image", "src": "assets/10/1 (2).jpg" },
    { "type": "image", "src": "assets/10/1 (3).jpg" },
    { "type": "image", "src": "assets/10/1 (4).jpg" },
    { "type": "image", "src": "assets/10/1 (5).jpg" },
    { "type": "image", "src": "assets/10/1 (6).jpg" },
    { "type": "image", "src": "assets/10/1 (7).jpg" },
         { "type": "image", "src": "assets/10/1 (1).jpeg" },
    { "type": "image", "src": "assets/10/1 (2).jpeg" },
    { "type": "image", "src": "assets/10/1 (3).jpeg" }    
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
                                <img src="${item.src}" alt="${item.alt}">
                            </a>
                        </div>
                    `;
                } else {
                    element = `
                        <div class="gallery-item">
                            <img src="${item.src}" alt="${item.alt}">
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
