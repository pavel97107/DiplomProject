const popUpDiscount = () => {
    const container = document.querySelector('.sentence .row');
    const btn = document.querySelector('.add-sentence-btn');
    const element = container.querySelectorAll('.col-xs-12');
    const items = document.querySelectorAll('.windowAn');

    const objAnimation = {
        count: -75,
        speed: 2.5
    };

    const objOpacity = {
        count: 0,
        speed: 0.02
    };

    const animate = () => {
        items.forEach((item) => {
            item.style.transform = `translateY(${objAnimation.count}%)`;
        });
        objAnimation.count += objAnimation.speed;
        if (objAnimation.count <= 0) {
            requestAnimationFrame(animate);

        }
    };

    const animateOpacity = () => {
        items.forEach((item) => {
            item.style.opacity = `${objOpacity.count}`;
        });
        objOpacity.count += objOpacity.speed;
        if (objOpacity.count <= 1) {
            requestAnimationFrame(animateOpacity);
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
        requestAnimationFrame(animateOpacity);
        requestAnimationFrame(animate);
        btn.style.display = 'none';
    });
};

export default popUpDiscount;