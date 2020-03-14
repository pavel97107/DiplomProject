const calc = (price = 10000) => {
    const typeSeptic = document.querySelector('.typeSeptic');
    const checkBottom = document.querySelector('.checkBottom');
    const itemDis = document.querySelectorAll('.itemDisabled');
    const calcContainer = document.querySelector('.calc-container');

    const itemsDisabledTrue = () => {
        itemDis.forEach((item) => {
            item.classList.remove('itemDisabled');
        });
    };
    const itemsDisabledFalse = () => {
        itemDis.forEach((item) => {
            item.classList.add('itemDisabled');
        });
    };




    let diameter;
    let total;
    let bottomValue = 1000;

    calcContainer.addEventListener('click', (event) => {
        let target = event.target;

        if (target === target.closest('.typeSeptic')) {
            typeSeptic.classList.toggle('two');
            if (typeSeptic.classList.contains('two')) {
                itemsDisabledTrue();
            } else {
                itemsDisabledFalse();
            }
        }

        if (target === target.closest('.checkBottom')) {
            checkBottom.classList.toggle('bottomFalse');
            if (checkBottom.classList.contains('bottomFalse')) {
                bottomValue = 0;
                console.log(bottomValue);
            } else {
                bottomValue = 1000;
                console.log(bottomValue);
            }
        }


    });



    const calculation = () => {
        const calcResult = document.getElementById('calc-result');
        console.log(calcResult);


        // total = price * diameter * numberRing + bottomValue;
        // calcResult.value = total;
    };

    calculation();



};


export default calc;