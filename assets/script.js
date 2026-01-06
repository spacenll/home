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
    // تحميل جميع الصور والفيديوهات عند تحميل الصفحة
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

    let folder = category === "logo" ? "logo" : category;


    let assets = {
        "websites": [
                  { type: "image", src: "assets/2/lavacaffee.png", alt: "معاينة تصميم صفحة روابط", link: "https://lavacoffee1.github.io/branches/"  },
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
          { type: "image", src: "assets/7/شعار_ثمرة_بن.webp" , alt: "تصميم احترافي لكوب ثمرة بن"  },
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
           
             { type: "video", src: "assets/4/شتاء_نوفا_كوكيزه.mp4" },
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
            { type: "image", src: "assets/7/شعار_ثمرة_بن.webp" },
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
            
               { "type": "image", "src": "assets/10/collage63.jpg" },
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
