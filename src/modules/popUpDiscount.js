const popUpDiscount = () => {
    const container = document.querySelector('.sentence .row');
    const btn = document.querySelector('.add-sentence-btn');
    const element = container.querySelectorAll('.col-xs-12');
    const items = document.querySelectorAll('.windowAn');

    const obj = {
        count: -75,
        speed: 5
    };


    const animate = () => {

        items.forEach((item) => {
            item.style.transform = `translateY(${obj.count}%)`;
        });

        obj.count += obj.speed;
        if (obj.count <= 0) {
            requestAnimationFrame(animate);
        }
    };



    const foo = () => {
        element.forEach((item) => {
            if (item.classList.contains('hidden') || item.classList.contains('visible-sm-block')) {
                item.classList.add('active-block');
            }
        });
    };

    btn.addEventListener('click', () => {
        foo();
        requestAnimationFrame(animate);
        btn.style.display = 'none';
    });
};

export default popUpDiscount;