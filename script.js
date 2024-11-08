// إظهار الرسالة وتخزين الرابط
function showMessage(event, url) {
    event.preventDefault(); // منع الانتقال الفوري للرابط
    document.getElementById("welcomeMessage").classList.add("show");
    // تخزين الرابط في عنصر HTML للانتقال لاحقاً
    document.getElementById("welcomeMessage").dataset.url = url;
}

// إغلاق الرسالة بدون الانتقال
function closeMessage() {
    const overlay = document.getElementById("welcomeMessage");
    overlay.classList.remove("show");
    // لا حاجة للانتقال إلى الرابط هنا
}
