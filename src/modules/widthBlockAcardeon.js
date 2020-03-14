const AccardionBlock = (elemHeader, elemContent, elementContainer) => {
    const headerElement = document.querySelectorAll(elemHeader);
    const collapseElement = document.querySelectorAll(elemContent);
    const container = document.querySelector(elementContainer);
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
        target = target.closest(elemHeader);
        if (target) {
            headerElement.forEach((item, index) => {
                if (target === item) {
                    addClass(index);
                }
            });
        }
    });
};

export default AccardionBlock;