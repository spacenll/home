document.getElementById("langToggle").addEventListener("click", function () {
    let currentLang = document.documentElement.lang;
    if (currentLang === "ar") {
        document.documentElement.lang = "en";
        this.textContent = "AR";
    } else {
        document.documentElement.lang = "ar";
        this.textContent = "EN";
    }
});
