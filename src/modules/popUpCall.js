'use strict';
const blockButton = () => {
    document.querySelector('.consultation-btn').disabled = true;
    document.querySelector('.userQuestion').addEventListener('input', () => {
        if (document.querySelector('.userQuestion').value) {
            document.querySelector('.consultation-btn').disabled = false;
        }
    });
};

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
            blockButton();
        }
        if (target.matches(selector)) {
            addDisplay(popUpWindow);
            deleteMessageFunc();
            resetInput();
            blockButton();
        }
    });



};


export {
    blockButton,
    popUpCall
};