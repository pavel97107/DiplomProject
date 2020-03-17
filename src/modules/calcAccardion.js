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
    // она относится к опциям
    const itemsDisabledFalse = () => {
        itemDis.forEach(item => {
            item.classList.remove("itemDisabled");
        });
    };

    // Функция добовляет класс (display = none)
    // если тип септика однокамерный то эта функция скрывает опции которые отвечают за второй колодец
    const itemsDisabledTrue = () => {
        itemDis.forEach(item => {
            item.classList.add("itemDisabled");
        });
    };

    //объект где находятся данные с калькулятора
    const data = {};


    // total - общая сумма
    // bottomValue - наличие дна
    // цена за тип септика
    data.price = 10000;
    data.total = '';
    data.bottomValue = 1000;



    // этот обработчик события отслеживает клик по выбору типа септика (однокамерный или двухкамерный)
    // по дефолту стоит однокамерный значит price = 10000, при клике кнопку смену типа навешивается класс,
    //'two' потом условие проверяет если есть класс 'two' тогда price 15000 если нету тогда 10000, также происходим со дном колодца
    // если target '.checkBottom' тоесть мы нажали на кнопку которая отвечает за наличие дна то  мы добовляем класс bottomFalse (который означает что дно не нужно и value дна = 0)
    // если класса 'bottomFalse' нету ету тогда мы проверяем наличие класса 'two' который накладывается на тип септика если он есть то value=2000 если нету то value=1000
    // (цена за дно плюсуется сразу к сумме типа септика потому что по дефолту он есть если открыть вкладу)
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
        // если нажимаю на кнопку "следущий шаг" или другую вкладку то происходит расчет
        if (target.closest('.btn-step') || target.closest('.calc-heading')) {
            calculationOneType();
        }
    });




    // сдесь мы получаем данные с опций
    // если price 15000 то высчитываются все опции и инпут с расстояние
    // если price 10000 то высчитывается опции только с блока который отвечает за один колодец
    // а вторые опции которые отвечают за второй колодец они удаляются из формулы так как они не нужны
    // потом происходит вычисление и сумма (data.total) записывается в CalcResult.value
    // в этой функци объект заполнен нужными нам данными и мы его присваиваем в объект result, который потом экспортируем
    // и передаем в модуль sendForm где записваем его в объект с данными с формы
    const calculationOneType = () => {
        data.numberRing =
            numberRingSelect.options[numberRingSelect.selectedIndex].value;
        data.diameterRing =
            diameterRingSelect.options[diameterRingSelect.selectedIndex].value;

        data.numberRing2 =
            numberRingSelect2.options[numberRingSelect2.selectedIndex].value;
        data.diameterRing2 =
            diameterRingSelect2.options[diameterRingSelect2.selectedIndex].value;



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

            data.distanceHome = +distance.value;
        }


        calcResult.value = data.total;
        result.calc = JSON.stringify(data);
    };

    // этот листенер отслеживает изменения в инпутах и опциях, каждый раз когда меняется значение тогда срабатывает фукция calculationOneType()
    // которая производит расчет
    // онлайн калькулятор так сказать
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