const calc = (price = 10000) => {
    const typeSeptic = document.querySelector(".typeSeptic");
    const checkBottom = document.querySelector(".checkBottom");
    const itemDis = document.querySelectorAll(".itemDisabled");
    const calcContainer = document.querySelector(".calc-container");

    // Параметры options
    const diameterRingSelect = document.querySelector(".diameterRing");
    const numberRingSelect = document.querySelector(".numberRing");
    const calcResult = document.getElementById("calc-result");
    const distance = document.querySelector('.distance');


    // Функция удаляет класс (display = none)
    const itemsDisabledFalse = () => {
        itemDis.forEach(item => {
            item.classList.remove("itemDisabled");
        });
    };

    // Функция добовляет класс (display = none)
    const itemsDisabledTrue = () => {
        itemDis.forEach(item => {
            item.classList.add("itemDisabled");
        });
    };

    // total - общая сумма
    // bottomValue - наличие дна
    let total;
    let bottomValue = 1000;

    calcContainer.addEventListener("click", event => {
        let target = event.target;

        if (target === target.closest(".typeSeptic")) {
            typeSeptic.classList.toggle("two");
            if (typeSeptic.classList.contains("two")) {
                itemsDisabledFalse();
                bottomValue = 2000;
            } else {
                itemsDisabledTrue();
                bottomValue = 1000;
            }
        }

        if (target === target.closest(".checkBottom")) {
            checkBottom.classList.toggle("bottomFalse");
            if (checkBottom.classList.contains("bottomFalse")) {
                bottomValue = 0;
            } else {
                if (typeSeptic.classList.contains("two")) {
                    bottomValue = 2000;
                } else {
                    bottomValue = 1000;
                }
            }
        }

    });


    const calculationOneType = () => {
        const numberRing =
            numberRingSelect.options[numberRingSelect.selectedIndex].value;
        const diameterRing =
            diameterRingSelect.options[diameterRingSelect.selectedIndex].value;

        total = price * diameterRing * numberRing + bottomValue;
        calcResult.value = total;
    };



    calcContainer.addEventListener("change", event => {
        let target = event.target;

        if (target.matches("select") || target.matches("input")) {
            calculationOneType();
        }
    });
};

export default calc;