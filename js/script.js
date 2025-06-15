'use strict'

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
    
};

form.addEventListener("click", function (event) {
    event.preventDefault()
});

button.addEventListener("click", showClick);

faqButton.addEventListener('click', showClick);

const mainForm = document.forms.main;
const userNameText = mainForm.userName;


const userNameTextPlaceholder = userNameText.placeholder;


const checkPhone = document.querySelector('.checkPhone');

function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
        key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}
checkPhone.addEventListener('keydown', checkPhoneKey)






