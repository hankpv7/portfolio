const themeButton = document.getElementById("theme-btn");
const profilePic = document.getElementById("pp");
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        profilePic.src = "images/light-profile.png";
        themeButton.textContent = "🌙";
    } else {
        profilePic.src = "images/profile.png";
        themeButton.textContent = "☀️";
    }
});