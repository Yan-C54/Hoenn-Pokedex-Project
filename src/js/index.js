const themeButton = document.getElementById("themeMode");

const body = document.querySelector("body");

const themeButtonImg = document.querySelector(".imageButton")

themeButton.addEventListener("click", () => {
    const darkModeOn = body.classList.contains("darkMode");

    body.classList.toggle("darkMode");

    if (darkModeOn) {
        themeButtonImg.setAttribute("src", "./src/imagens/sun.png");
    } else {
        themeButtonImg.setAttribute("src", "./src/imagens/moon.png");
    }
});