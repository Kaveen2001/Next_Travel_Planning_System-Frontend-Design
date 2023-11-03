const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.submitBtn');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
  wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};

/*
document.querySelector('.submitBtn').onclick = () => {
    /!*wrapper.classList.toggle('active');
    wrapper.classList.remove('active-popup');*!/
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
};*/
