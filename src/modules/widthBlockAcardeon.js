const AccardionBlock = () => {
    const headerElement = document.querySelectorAll(".panelElement");
    const collapseElement = document.querySelectorAll(".collapseElement");
    const container = document.querySelector(".slideInDown");

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
        target = target.closest(".panelElement");
        if (target) {
            headerElement.forEach((item, index) => {
                if (target === item) {
                    addClass(index);
                }
            });
        }
    });

    console.log(collapseElement);
    console.log(headerElement);
};

export default AccardionBlock;