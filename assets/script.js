document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. محرك حركة مؤشر الماوس المخصص (Custom Cursor Engine)
    // ==========================================
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    
    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // النقطة المركزية تتبع الماوس فوراً
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // الحلقة الخارجية تتبع بتأثير انتقال مرن (Inertia)
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 250, fill: "forwards" });
        });
        
        // تفعيل تأثيرات التكبير عند الحوم فوق العناصر القابلة للتفاعل
        const hoverTargets = document.querySelectorAll(".hover-target, a, button, .filter-btn, .service-card");
        hoverTargets.forEach(target => {
            target.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-hover");
            });
            target.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover");
            });
        });
    }

    // ==========================================
    // 2. محرك ظهور العناصر عند التمرير (Scroll Reveal Engine)
    // ==========================================
    const revealElements = document.querySelectorAll(".reveal-fade-up, .reveal-slide-in");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target); // تشغيل الحركة لمرة واحدة فقط لمنع التشتيت
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ==========================================
    // 3. إدارة القائمة المنسدلة على الموبايل
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("nav-active");
        });
        
        // إغلاق القائمة عند الضغط على أي رابط
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("nav-active");
            });
        });
    }

    // ==========================================
    // 4. رسالة الواتساب العائمة التفاعلية
    // ==========================================
    const waMsg = document.getElementById("waMsg");
    if (waMsg) {
        // تظهر الرسالة بذكاء بعد 1.5 ثانية من تحميل الموقع
        setTimeout(() => {
            waMsg.classList.add("show");
        }, 1500);
        
        // تختفي الرسالة بسلاسة بمجرد البدء في التمرير لعدم حجب الرؤية
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                waMsg.classList.remove("show");
            }
        });
    }

    // ==========================================
    // 5. زر العودة للأعلى والتعديل الديناميكي للهيدر
    // ==========================================
    const backToTop = document.querySelector(".back-to-top");
    const glassNav = document.querySelector(".glass-nav");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            if (backToTop) backToTop.classList.add("visible");
            if (glassNav) glassNav.style.padding = "10px 0"; // تصغير حجم الهيدر عند النزول
        } else {
            if (backToTop) backToTop.classList.remove("visible");
            if (glassNav) glassNav.style.padding = "15px 0";
        }
    });

    if (backToTop) {
        backToTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

// ==========================================
// 6. نظام الفلترة ومعرض الأعمال (jQuery)
// ==========================================
$(document).ready(function () {
    // تحميل تصنيف "الشعارات" أو "كورنر" بشكل افتراضي مبدئي
    loadGallery("corner");

    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        let category = $(this).data("category");
        loadGallery(category);
    });

    function loadGallery(category) {
        const $gallery = $("#gallery");
        $gallery.css("opacity", 0); // تأثير تلاشي قبل التغيير

        setTimeout(() => {
            $gallery.html("");
            let folder = category;

            // كائن البيانات الشامل الخاص بك للأعمال والبراندات بصلالة
            let assets = {
                "websites": [
                    { type: "image", src: "assets/2/Screenshot 2026-05-21 155431.png", alt: "معاينة تصميم صفحة روابط", link: "#" },
                    { type: "image", src: "assets/2/1.png", alt: "معاينة تصميم صفحة روابط", link: "#" },
                    { type: "image", src: "assets/2/Screenshot 2026-05-21 155359.png", alt: "معاينة تصميم صفحة روابط", link: "#" },
                    { type: "image", src: "assets/2/lavacaffee.png", alt: "معاينة تصميم صفحة روابط", link: "https://lavacoffee1.github.io/branches/" },
                    { type: "image", src: "assets/2/webpage_design (1).jpg", alt: "معاينة تصميم صفحة ويب لموقع شركة مارك تك", link: "https://marktech-agency.com/" },
                    { type: "image", src: "assets/2/webpage_design (2).jpg", link: "https://topmedclinics.com/", alt: "تصميم موقع TopMed Clinics الطبي" },
                    { type: "image", src: "assets/2/webpage_design (3).jpg", link: "https://spacenll.site/shop", alt: "تصميم متجر SpaceNLL الإلكتروني" },
                    { type: "image", src: "assets/2/webpage_design (4).jpg", link: "https://modernbuildings.site/", alt: "تصميم موقع Modern Buildings الإنشائي" },
                    { type: "image", src: "assets/2/webpage_design (5).jpg", link: "https://emaar-gulf-global.com/", alt: "تصميم موقع Emaar Gulf Global العقاري" }
                ],
                "cups": [
                    { type: "image", src: "assets/7/شعار_ثمرة_بن.webp", alt: "تصميم احترافي لكوب ثمرة بن" },
                    { type: "image", src: "assets/3/1 (1).jpg", alt: "تصميم لقمة كافيه" },
                    { type: "image", src: "assets/3/1 (2).jpg", alt: "تصميم جوفا كافيه" },
                    { type: "image", src: "assets/3/1 (3).jpg", alt: "تصميم كوب جوفا كافيه" },
                    { type: "image", src: "assets/3/1 (4).jpg", alt: "تصميم جوفا كافيه" },
                    { type: "image", src: "assets/3/1 (5).jpg", alt: "تصميم كرك البنز" },
                    { type: "image", src: "assets/3/1 (7).jpg", alt: "تصميم ايكون كافيه" }
                ],
                "boxes": [
                    { type: "image", src: "assets/5/1.png" }, { type: "image", src: "assets/5/2.png" },
                    { type: "image", src: "assets/5/1 (1).jpg" }, { type: "image", src: "assets/5/1 (2).jpg" },
                    { type: "image", src: "assets/5/1 (3).jpg" }, { type: "image", src: "assets/5/1 (4).jpg" }
                ],       
                "interface": [
                    { type: "image", src: "assets/9/1.jpeg" }, { type: "image", src: "assets/9/1 (1).jpg" },
                    { type: "image", src: "assets/9/1 (2).jpg" }, { type: "image", src: "assets/9/1 (1).png" }
                ],
                "ads": [
                    { type: "video", src: "assets/4/تصميم%20دعوات%20الكترونية%20بأنواعها.mp4" },
                    { type: "video", src: "assets/4/شتاء_نوفا_كوكيزه.mp4" },
                    { type: "video", src: "assets/4/videooad.mp4" },
                    { type: "video", src: "assets/4/CGI works (1).mp4" },
                    { type: "video", src: "assets/4/CGI works (2).mp4" }
                ],
                "corner": [
                    { type: "image", src: "assets/6/1 (1).jpeg" }, { type: "image", src: "assets/6/1 (1).jpg" },
                    { type: "image", src: "assets/6/1 (1).png" }, { type: "image", src: "assets/6/1 (2).jpeg" }
                ],
                "cards": [
                    { type: "image", src: "assets/8/1 (1).jpg" }, { type: "image", src: "assets/8/1 (2).jpg" }
                ],
                "logo": [
                    { type: "image", src: "assets/7/شعار_ثمرة_بن.webp" }, { type: "image", src: "assets/7/1 (1).jpg" },
                    { type: "image", src: "assets/7/1 (2).jpg" }, { type: "image", src: "assets/7/1 (1).png" }
                ],
                "publications": [
                    { type: "image", src: "assets/10/collage63.jpg" }, { type: "image", src: "assets/10/1 (1).jpg" },
                    { type: "image", src: "assets/10/1 (2).jpg" }, { type: "image", src: "assets/10/1 (3).jpg" }
                ],
                "logo-animation": [
                    { type: "video", src: "assets/1/logo motion.mp4" }
                ]
            };

            if (assets[folder]) {
                assets[folder].forEach(item => {
                    let element = "";
                    if (item.type === "image") {
                        if (item.link && item.link !== "*") {
                            element = `<div class="gallery-item reveal-slide-in">
                                        <a href="${item.link}" target="_blank" class="hover-target">
                                            <img src="${item.src}" alt="${item.alt || 'تصميم محترف'}">
                                        </a>
                                       </div>`;
                        } else {
                            element = `<div class="gallery-item reveal-slide-in">
                                        <img src="${item.src}" alt="عمل إبداعي">
                                       </div>`;
                        }
                    } else if (item.type === "video") {
                        element = `<div class="gallery-item reveal-slide-in">
                                    <video controls preload="metadata">
                                        <source src="${item.src}" type="video/mp4">
                                        متصفحك لا يدعم تشغيل الفيديو.
                                    </video>
                                   </div>`;
                    }
                    $gallery.append(element);
                });
            }
            
            // إعادة تفعيل الإضافة الكلاسات وتأثيرات الظهور للعناصر المضافة حديثاً للمعرض
            const newReveals = document.querySelectorAll(".gallery-item");
            newReveals.forEach((el, index) => {
                setTimeout(() => { el.classList.add("in-view"); }, index * 80);
            });

            $gallery.animate({ opacity: 1 }, 400);
        }, 300);
    }
});