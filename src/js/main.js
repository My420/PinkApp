var menuButton = document.querySelector(".page-header__button");
var mainNav = document.querySelector(".main-nav");
var header = document.querySelector(".page-header__wrapper");
var pageHeader = document.querySelector(".page-header");
var formButton = document.querySelector(".information__button");
var popupOkButton = document.querySelector(".popup__button--ok");
var popupErrorButton = document.querySelector(".popup__button--error");
var popupOk = document.querySelector(".popup__wrapper--ok");
var popupError = document.querySelector(".popup__wrapper--error");
var inputLastname = document.getElementById("user-lastname");
var inputName = document.getElementById("user-name");
var inputMail = document.getElementById("user-mail");
var pageForm = document.querySelector(".page-form");

//Меню по умолчанию открыто(на случай если js не загрузиться) закрываем его

mainNav.classList.add("main-nav--closed");
menuButton.classList.add("page-header__button--open");
header.classList.add("page-header__wrapper--closed");
pageHeader.classList.add("page-header--closed");

// По нажатию на кнопку открываем\закрываем меню

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
  menuButton.classList.toggle("page-header__button--open");
  header.classList.toggle("page-header__wrapper--closed");
  pageHeader.classList.toggle("page-header--closed");
});

// Кнопка формы + простая валидация

if (formButton) {
  formButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (inputLastname.value && inputName.value && inputMail.value) {
      popupOk.classList.remove("popup-close");
      inputLastname.classList.remove("errorInput");
      inputName.classList.remove("errorInput");
      inputMail.classList.remove("errorInput");
    } else {
      popupError.classList.remove("popup-close");
      inputLastname.classList.add("errorInput");
      inputName.classList.add("errorInput");
      inputMail.classList.add("errorInput");
    }
  });
}

// Кнопка закрытия попапа

if (popupOkButton) {
  popupOkButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupOk.classList.add("popup-close");
  });

  popupErrorButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupError.classList.add("popup-close");
  });
}
