const popUpCall = (selector, btn, btnClose) => {
    const popUpWindow = document.querySelector(selector);
    const body = document.querySelector('body');

    const addDisplay = (elem) => {
        elem.classList.toggle('active-block');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches(btn)) {
            addDisplay(popUpWindow);
        }
        if (target.closest(btnClose)) {
            addDisplay(popUpWindow);
        }
        if (target.matches(selector)) {
            addDisplay(popUpWindow);
        }
    });


};


export default popUpCall;