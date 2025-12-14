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

    let isUserInsideGallery = false;
    let autoSwitchInterval = null;

    const categories = [
        "corner",
        "websites",
        "cups",
        "boxes",
        "interface",
        "ads"
    ];

    let currentCategoryIndex = 0;

    loadGallery(categories[currentCategoryIndex]);
    activateButton(categories[currentCategoryIndex]);
    startAutoSwitch();

    $(".filter-btn").click(function () {
        let category = $(this).data("category");

        stopAutoSwitch();
        currentCategoryIndex = categories.indexOf(category);
        loadGallery(category);
        activateButton(category);
        startAutoSwitch();
    });

    function loadGallery(category) {
        $("#gallery").empty();

        const assets = {
            websites: [
                { type: "image", src: "assets/2/webpage_design (1).jpg" },
                { type: "image", src: "assets/2/webpage_design (2).jpg" }
            ],
            cups: [
                { type: "image", src: "assets/3/1 (1).jpg" },
                { type: "image", src: "assets/3/1 (2).jpg" }
            ],
            boxes: [
                { type: "image", src: "assets/5/1.png" },
                { type: "image", src: "assets/5/2.png" }
            ],
            interface: [
                { type: "image", src: "assets/9/1.jpeg" }
            ],
            ads: [
                { type: "video", src: "assets/4/videooad.mp4" }
            ],
            corner: [
                { type: "image", src: "assets/6/1 (1).jpg" },
                { type: "image", src: "assets/6/1 (2).jpg" }
            ]
        };

        (assets[category] || []).forEach(item => {
            let html = "";

            if (item.type === "image") {
                html = `
                    <div class="gallery-item">
                        <img src="${item.src}">
                    </div>
                `;
            }

            if (item.type === "video") {
                html = `
                    <div class="gallery-item">
                        <video src="${item.src}" muted autoplay loop></video>
                    </div>
                `;
            }

            $("#gallery").append(html);
        });
    }

    function startAutoSwitch() {
        stopAutoSwitch();

        autoSwitchInterval = setInterval(() => {
            if (isUserInsideGallery) return;

            currentCategoryIndex =
                (currentCategoryIndex + 1) % categories.length;

            const nextCategory = categories[currentCategoryIndex];
            loadGallery(nextCategory);
            activateButton(nextCategory);

        }, 3000);
    }

    function stopAutoSwitch() {
        clearInterval(autoSwitchInterval);
        autoSwitchInterval = null;
    }

    function activateButton(category) {
        $(".filter-btn").removeClass("active");
        $(`.filter-btn[data-category="${category}"]`).addClass("active");
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
