const popUpCall = () => {
    const popUpWindow = document.querySelector('.popup-call');
    const body = document.querySelector('body');


    const addDisplay = (elem) => {
        elem.classList.toggle('active-block');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.call-btn')) {
            addDisplay(popUpWindow);
        }
        if (target.closest('.popup-close')) {
            addDisplay(popUpWindow);
        }
        if (target.matches(".popup-call")) {
            addDisplay(popUpWindow);
        }
    });

};



export default popUpCall;