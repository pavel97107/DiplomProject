const AccardionBlock = (elemHeader, elemContent, elementContainer, x) => {
    const headerElement = document.querySelectorAll(elemHeader);
    const collapseElement = document.querySelectorAll(elemContent);
    const body = document.querySelector('span');
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

        if (target === target.closest(elemHeader)) {
            headerElement.forEach((item, index) => {
                if (target === item) {
                    addClass(index);
                }
            });
        }


        console.log(event.target);
    });

    btnStep[0].addEventListener('click', (event) => {
        let target = event.target.matches('span');
        if (target) {
            return false;
        } else {
            calcContentOne.style.maxHeight = `${calcContentOne
                .scrollHeight - calcContentOne.scrollHeight}px`;
        }
    });


};

export default AccardionBlock;