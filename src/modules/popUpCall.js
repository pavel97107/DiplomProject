const popUpCall = () => {
    const popUpWindow = document.querySelector('.popup-call');
    const body = document.querySelector('body');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.call-btn')) {
            popUpWindow.style.display = 'block';

        }
        if (target.closest('.popup-close')) {
            popUpWindow.style.display = 'none';
        }
        if (target.matches(".popup-call")) {
            popUpWindow.style.display = 'none';
        }
    });

};



export default popUpCall;