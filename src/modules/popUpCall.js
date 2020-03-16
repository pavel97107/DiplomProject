'use strict';
const popUpCall = (selector, btn, btnClose, resetInput) => {
    const popUpWindow = document.querySelector(selector);
    const body = document.querySelector('body');


    const addDisplay = (elem) => {
        elem.classList.toggle('active-block');
    };

    const deleteMessageFunc = () => {
        if (document.querySelector('.status')) {
            document.querySelector('.status').remove();
        } else {
            return false;
        }
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches(btn)) {
            addDisplay(popUpWindow);
        }
        if (target.closest(btnClose)) {
            addDisplay(popUpWindow);
            deleteMessageFunc();
            resetInput();
        }
        if (target.matches(selector)) {
            addDisplay(popUpWindow);
            deleteMessageFunc();
            resetInput();
        }
    });


};


export default popUpCall;