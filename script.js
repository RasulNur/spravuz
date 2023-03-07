// Переключение языка

const langList = document.querySelectorAll(".navbar-top__lang-list li");

langList.forEach((el) => {
    el.addEventListener("click", () => {
        if (!el.classList.contains("selected")) {
            langList.forEach((el) => el.classList.remove("selected"));
            el.classList.add("selected");
        }
    });
});

// Показать скрыть меню
const openMenuBtn = document.querySelector(".navbar-bottom__menu-icon button");
const closeMenuBtn = document.querySelector(".menu button");
const menu = document.querySelector(".menu");

openMenuBtn.addEventListener("click", () => {
    menu.classList.add("open");
});
closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("open");
});

// Показать и скрыть номер

const showPhoneBtn = document.querySelector(
    ".main-content__bottom-phone button"
);
let showPhoneText = document.querySelector(".main-content__bottom-phone p");

showPhoneBtn.addEventListener("click", () => {
    changeText(showPhoneBtn, showPhoneText);
});

function changeText(btn, text) {
    if (btn.getAttribute("data-show") === "true") {
        btn.innerText = "Показать номер";
        btn.setAttribute("data-show", "false");
        text.textContent = "+998 71 207-XX-XX";
    } else {
        btn.innerText = "Скрыть номер";
        btn.setAttribute("data-show", "true");
        text.textContent = "+998 71 207-XX-XX";
        text.textContent = "+998 71 207-22-22";
    }
}

// Показать и скрыть почту

let mailBtn = document.querySelector(".main-content__bottom-mail button");

mailBtn.addEventListener("click", () => {
    if (mailBtn.getAttribute("data-show") === "false") {
        mailBtn.textContent = "user@gmail.com";
        mailBtn.setAttribute("data-show", "true");
    } else {
        mailBtn.textContent = "Показать e-mail";
        mailBtn.setAttribute("data-show", "false");
    }
});

// Переключение столбцов

const footerCols = document.querySelectorAll(".content__footer-col");

footerCols.forEach((el) => {
    el.addEventListener("click", () => {
        if (!el.classList.contains("active")) {
            footerCols.forEach((el) => el.classList.remove("active"));
            el.classList.add("active");
        }
    });
});
