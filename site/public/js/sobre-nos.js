const controls = document.querySelectorAll('.control');

let currentItem = 7;

const items = document.querySelectorAll('.item');
const descriptions = document.querySelectorAll('.description');

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) {
            currentItem--;
        } else {
            currentItem++;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        console.log('click', isLeft, currentItem);

        items.forEach(item =>
            item.classList.remove('current-item')
        );

        descriptions.forEach(description =>
            description.classList.remove('activeDesc', 'activeDescLast'),
        );

        items[currentItem].classList.add('current-item')

        if (currentItem == maxItems - 1) {
            items[currentItem].scrollIntoView({
                inline: "end",
                behavior: "smooth",
                block: "nearest"
            });
            descriptions[currentItem].classList.add('activeDescLast');

        } else {
            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest"
            });
            descriptions[currentItem].classList.add('activeDesc');
        }



    })
});

ScrollReveal({ reset: true });

ScrollReveal().reveal('.reveal', {
    distance: "100px",
    duration: 1000,
    delay: 100
});


window.onload = function () {
    items[7].scrollIntoView({
        inline: "center",
    });
    window.scroll(0, 0);
}