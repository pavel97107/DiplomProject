'use strict';
const result = {};

const calc = () => {
    const typeSeptic = document.querySelector(".typeSeptic");
    const checkBottom = document.querySelector(".checkBottom");
    const itemDis = document.querySelectorAll(".itemDisabled");
    const calcContainer = document.querySelector(".calc-container");
    const showTotalbtn = document.querySelector('.btnShowTotal');
    // Параметры options
    const diameterRingSelect = document.querySelector(".diameterRing");
    const numberRingSelect = document.querySelector(".numberRing");
    const diameterRingSelect2 = document.querySelector(".diameterRing2");
    const numberRingSelect2 = document.querySelector(".numberRing2");
    const calcResult = document.getElementById("calc-result");
    const distance = document.querySelector(".distance");

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

    //main object
    const data = {};


    // total - общая сумма
    // bottomValue - наличие дна
    data.price = 10000;
    data.total = '';
    data.bottomValue = 1000;

    calcContainer.addEventListener("click", event => {
        let target = event.target;

        if (target === target.closest(".typeSeptic")) {
            typeSeptic.classList.toggle("two");
            if (typeSeptic.classList.contains("two")) {
                itemsDisabledFalse();
                data.bottomValue = 2000;
                data.price = 15000;
            } else {
                itemsDisabledTrue();
                data.bottomValue = 1000;
                data.price = 10000;
            }
        }

        if (target === target.closest(".checkBottom")) {
            checkBottom.classList.toggle("bottomFalse");
            if (checkBottom.classList.contains("bottomFalse")) {
                data.bottomValue = 0;
            } else {
                if (typeSeptic.classList.contains("two")) {
                    data.bottomValue = 2000;
                } else {
                    data.bottomValue = 1000;
                }
            }
        }
    });

    const calculationOneType = () => {
        data.numberRing =
            numberRingSelect.options[numberRingSelect.selectedIndex].value;
        data.diameterRing =
            diameterRingSelect.options[diameterRingSelect.selectedIndex].value;

        data.numberRing2 =
            numberRingSelect2.options[numberRingSelect2.selectedIndex].value;
        data.diameterRing2 =
            diameterRingSelect2.options[diameterRingSelect2.selectedIndex].value;

        data.numberRingOne =
            numberRingSelect.options[numberRingSelect.selectedIndex].textContent;
        data.diameterRingOne =
            diameterRingSelect.options[diameterRingSelect.selectedIndex].textContent;

        data.numberRingTwo =
            numberRingSelect2.options[numberRingSelect2.selectedIndex].textContent;
        data.diameterRingTwo =
            diameterRingSelect2.options[diameterRingSelect2.selectedIndex].textContent;


        if (data.price === 15000) {
            data.total =
                data.price * data.numberRing * data.diameterRing * data.numberRing2 * data.diameterRing2 +
                data.bottomValue;
            data.distanceHome = +distance.value;
        } else {
            data.total =
                data.price * data.numberRing * data.diameterRing +
                data.bottomValue;

            delete data.diameterRing2;
            delete data.numberRing2;
            delete data.numberRingTwo;
            delete data.diameterRingTwo;
            data.distanceHome = +distance.value;
        }

        data.diameterRing = data.diameterRingOne;
        data.numberRing = data.numberRingOne;
        delete data.diameterRing;
        delete data.numberRing;

        data.diameterRing2 = data.diameterRingTwo;
        data.numberRing2 = data.numberRingTwo;
        delete data.diameterRing2;
        delete data.numberRing2;

        calcResult.value = data.total;
        result.calc = JSON.stringify(data);
    };


    calcContainer.addEventListener("change", event => {
        let target = event.target;

        if (target.matches("select") || target.matches("input")) {
            calculationOneType();
        }
    });



};

export {
    calc,
    result
};