'use strict'

const { default: Swiper } = require("swiper");

const bodyElement = document.body;
const form = document.querySelector('.feedback__form');
const button = document.querySelector('.feedback__btn');
const faqButton = document.querySelector('.faq__btn');
const exampleButton = document.querySelectorAll('.button');

const link = document.querySelector('.wrapper');

function followLink(event) {
    if (event.target.closest("li")) {
        event.preventDefault();
        console.log("Наши действия");
    }
};

link.addEventListener("click", followLink);

function showClick() {
    console.log('Ура');
};

form.addEventListener("click", function (event) {
    console.log('Клик на форму');
});

button.addEventListener("click", showClick);

faqButton.addEventListener('click', showClick);

const mainForm = document.forms.main;
const userNameText = mainForm.userName;
console.log(userNameText);

const userNameTextPlaceholder = userNameText.placeholder;
console.log(userNameTextPlaceholder);

const checkPhone = document.querySelector('.checkPhone');

function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
        key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}
checkPhone.addEventListener('click', checkPhoneKey)







