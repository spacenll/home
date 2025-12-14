//script.js

window.addEventListener('popstate', function() {
    const path = location.pathname.replace('/', '');
    if (path) {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });
});
$(document).ready(function () {

    /* =========================
       متغيرات عامة
    ========================== */
    let autoSlideInterval = null;
    let currentIndex = 0;
    let isUserInsideGallery = false;

    /* =========================
       تحميل افتراضي
    ========================== */
    loadGallery("corner");

    /* =========================
       أزرار التصفية
    ========================== */
    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        let category = $(this).data("category");
        loadGallery(category);
    });

    /* =========================
       تحميل المعرض
    ========================== */
    function loadGallery(category) {

        $("#gallery").html("");
        stopAutoSlide();
        currentIndex = 0;

        let assets = {
            "websites": [
                { type: "image", src: "assets/2/webpage_design (1).jpg", link: "https://marktech-agency.com/", alt: "تصميم موقع مارك تك" },
                { type: "image", src: "assets/2/webpage_design (2).jpg", link: "https://topmedclinics.com/", alt: "TopMed Clinics" },
                { type: "image", src: "assets/2/webpage_design (3).jpg", link: "https://spacenll.site/shop", alt: "SpaceNLL" },
                { type: "image", src: "assets/2/webpage_design (4).jpg", link: "https://modernbuildings.site/", alt: "Modern Buildings" },
                { type: "image", src: "assets/2/webpage_design (5).jpg", link: "https://emaar-gulf-global.com/", alt: "Emaar Gulf Global" }
            ],

            "cups": [
                { type: "image", src: "assets/3/1 (1).jpg" },
                { type: "image", src: "assets/3/1 (2).jpg" },
                { type: "image", src: "assets/3/1 (3).jpg" },
                { type: "image", src: "assets/3/1 (4).jpg" },
                { type: "image", src: "assets/3/1 (5).jpg" },
                { type: "image", src: "assets/3/1 (7).jpg" }
            ],

            "boxes": [
                { type: "image", src: "assets/5/1.png" },
                { type: "image", src: "assets/5/2.png" },
                { type: "image", src: "assets/5/1 (1).jpg" },
                { type: "image", src: "assets/5/1 (2).jpg" },
                { type: "image", src: "assets/5/1 (3).jpg" }
            ],

            "interface": [
                { type: "image", src: "assets/9/1.jpeg" },
                { type: "image", src: "assets/9/1 (1).jpg" },
                { type: "image", src: "assets/9/1 (2).jpg" }
            ],

            "ads": [
                { type: "video", src: "assets/4/videooad.mp4" },
                { type: "video", src: "assets/4/CGI works (1).mp4" },
                { type: "video", src: "assets/4/CGI works (2).mp4" }
            ],

            "corner": [
                { type: "image", src: "assets/6/1 (1).jpeg" },
                { type: "image", src: "assets/6/1 (1).jpg" },
                { type: "image", src: "assets/6/1 (1).png" },
                { type: "image", src: "assets/6/1 (2).jpeg" },
                { type: "image", src: "assets/6/1 (2).jpg" }
            ]
        };

        let items = assets[category] || [];

        items.forEach((item, index) => {
            let element = "";

            if (item.type === "image") {
                element = `
                    <div class="gallery-item ${index === 0 ? 'active' : ''}">
                        ${item.link ? `<a href="${item.link}" target="_blank">` : ""}
                        <img src="${item.src}" alt="${item.alt || ''}">
                        ${item.link ? `</a>` : ""}
                    </div>
                `;
            }

            if (item.type === "video") {
                element = `
                    <div class="gallery-item ${index === 0 ? 'active' : ''}">
                        <video src="${item.src}" muted autoplay loop playsinline></video>
                    </div>
                `;
            }

            $("#gallery").append(element);
        });

        startAutoSlide();
    }

    /* =========================
       التحريك التلقائي
    ========================== */
    function startAutoSlide() {
        stopAutoSlide();

        autoSlideInterval = setInterval(() => {
            if (isUserInsideGallery) return;

            let items = $("#gallery .gallery-item");
            if (!items.length) return;

            items.removeClass("active");
            $(items[currentIndex]).addClass("active");

            currentIndex = (currentIndex + 1) % items.length;
        }, 3000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }

    /* =========================
       مراقبة ظهور المعرض (80%)
    ========================== */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                isUserInsideGallery = entry.intersectionRatio >= 0.8;
            });
        },
        { threshold: [0, 0.8, 1] }
    );

    observer.observe(document.getElementById("gallery"));

});


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
