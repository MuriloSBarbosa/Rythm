const controls = document.querySelectorAll('.control');

let currentItem = 5;

const items = document.querySelectorAll('.item');

items[5].scrollIntoView({
    inline: "center",
});

window.scroll(0, 0);

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

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        items[currentItem].classList.add('current-item')

    })
});
