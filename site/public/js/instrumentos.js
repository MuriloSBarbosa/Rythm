function filtro(tipo) {
    var content = document.querySelectorAll(".content-instrumento");
    var buttons = document.getElementsByName('button-filtro');

    for (let i = 0; i < content.length; i++) {
        const contentAtual = content[i];
        const button = buttons[i];

        button.classList = '';
        contentAtual.style.display = 'none';
    }

    if (tipo == 'cordas') {
        btn_cordas.classList = 'active-filtro';
        content_cordas.style.display = 'flex';
    } else if (tipo == 'madeiras') {
        btn_madeiras.classList = 'active-filtro';
        content_madeiras.style.display = 'flex';
    } else if (tipo == 'metais') {
        btn_metais.classList = 'active-filtro';
        content_metais.style.display = 'flex';
    } else {
        btn_percussao.classList = 'active-filtro';
        content_percussao.style.display = 'flex';
    }
}


filtro('cordas');

