const controls = document.querySelectorAll('.control');

let currentItem = 5;

const items = document.querySelectorAll('.item');

items[5].scrollIntoView({
    inline: "center",
});

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


const controlsVideo = document.querySelectorAll('.control-video');

let currentItemVideo = 2;

const itemsVideo = document.querySelectorAll('.itemVideo');

itemsVideo[2].scrollIntoView({
    inline: "center",
});


const maxItemsVideo = itemsVideo.length;

controlsVideo.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) {
            currentItemVideo--;
        } else {
            currentItemVideo++;
        }

        if (currentItemVideo >= maxItemsVideo) {
            currentItemVideo = 0;
        }

        if (currentItemVideo < 0) {
            currentItemVideo = maxItemsVideo - 1;
        }

        console.log('click', isLeft, currentItemVideo);

        itemsVideo.forEach(item =>
            item.classList.remove('current-item')
        );

        itemsVideo[currentItemVideo].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });

        itemsVideo[currentItemVideo].classList.add('current-item')

    })
});


window.scroll(0, 0);