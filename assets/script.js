// ===============================
// التنقل حسب الـ URL
// ===============================
window.addEventListener('popstate', function () {
    const path = location.pathname.replace('/', '');
    if (path) {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    }
});

// ===============================
// قائمة الموبايل
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });
});

// ===============================
// المعرض
// ===============================
$(document).ready(function () {

    let autoSlideInterval = null;
    let currentIndex = 0;
    let isUserInsideGallery = false;

    loadGallery("corner");

    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        let category = $(this).data("category");
        loadGallery(category);
    });

    function loadGallery(category) {

        $("#gallery").empty();
        stopAutoSlide();
        currentIndex = 0;

        const assets = {
            websites: [
                { type: "image", src: "assets/2/webpage_design (1).jpg", link: "https://marktech-agency.com/" },
                { type: "image", src: "assets/2/webpage_design (2).jpg", link: "https://topmedclinics.com/" },
                { type: "image", src: "assets/2/webpage_design (3).jpg", link: "https://spacenll.site/shop" }
            ],
            cups: [
                { type: "image", src: "assets/3/1 (1).jpg" },
                { type: "image", src: "assets/3/1 (2).jpg" }
            ],
            ads: [
                { type: "video", src: "assets/4/videooad.mp4" }
            ],
            corner: [
                { type: "image", src: "assets/6/1 (1).jpg" },
                { type: "image", src: "assets/6/1 (2).jpg" }
            ]
        };

        const items = assets[category] || [];

        items.forEach((item, index) => {

            let html = "";

            if (item.type === "image") {
                html = `
                    <div class="gallery-item ${index === 0 ? "active" : ""}">
                        ${item.link ? `<a href="${item.link}" target="_blank">` : ""}
                        <img src="${item.src}">
                        ${item.link ? "</a>" : ""}
                    </div>
                `;
            }

            if (item.type === "video") {
                html = `
                    <div class="gallery-item ${index === 0 ? "active" : ""}">
                        <video src="${item.src}" muted autoplay loop playsinline></video>
                    </div>
                `;
            }

            $("#gallery").append(html);
        });

        startAutoSlide();
    }

    function startAutoSlide() {
        stopAutoSlide();

        autoSlideInterval = setInterval(() => {
            if (isUserInsideGallery) return;

            const items = $("#gallery .gallery-item");
            items.removeClass("active");
            $(items[currentIndex]).addClass("active");

            currentIndex = (currentIndex + 1) % items.length;
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            isUserInsideGallery = entry.intersectionRatio >= 0.8;
        });
    }, { threshold: [0, 0.8, 1] });

    observer.observe(document.getElementById("gallery"));
});

// ===============================
// زر الرجوع للأعلى
// ===============================
$(window).scroll(function () {
    $('.back-to-top').toggle($(this).scrollTop() > 200);
});

$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 0);
    return false;
});
