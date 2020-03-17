'use strict';
const AccardionBlock = (elemHeader, elemContent, elementContainer) => {
    const headerElement = document.querySelectorAll(elemHeader);
    const collapseElement = document.querySelectorAll(elemContent);
    const container = document.querySelector(elementContainer);
    const btnStep = document.querySelectorAll('.btn-step');
    const calcContentOne = document.querySelector('.calc-content');
    collapseElement[0].style.maxHeight = `${collapseElement[0].scrollHeight}px`;
    collapseElement[0].style.transition = `max-height 0.5s ease-out`;


    const addClass = index => {
        for (let i = 0; i < collapseElement.length; i++) {
            if (i === index) {
                collapseElement[i].classList.add("in");
                collapseElement[i].classList.add("heightAnimation");
                collapseElement[
                    i
                ].style.maxHeight = `${collapseElement[i].scrollHeight}px`;
            } else {
                collapseElement[i].style.maxHeight = `${collapseElement[i]
          .scrollHeight - collapseElement[i].scrollHeight}px`;
            }


        }
    };

    container.addEventListener("click", event => {
        let target = event.target;
        const headerNode = target.closest(elemHeader);
        if (headerNode) {
            headerElement.forEach((item, index) => {
                if (headerNode === item) {
                    addClass(index);
                }
            });
        }
    });


    btnStep[0].addEventListener('click', () => {
        calcContentOne.style.maxHeight = `${calcContentOne
                .scrollHeight - calcContentOne.scrollHeight}px`;
    });


};

export default AccardionBlock;