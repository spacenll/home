// أنيميشن عند التمرير
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});
// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// فتح الصورة
document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

// إغلاق الصورة
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// إغلاق عند الضغط بالخلفية
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
