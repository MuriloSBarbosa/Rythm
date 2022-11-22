var imagens = document.querySelectorAll(".imagem");
var nomes = document.querySelectorAll(".nomeImg");

var imagemCompleta = [];

for (let i = 0; i < imagens.length; i++) {
    const imagem = imagens[i];
    const nome = nomes[i];


    imagem.addEventListener("mouseover",
        function () {
            nome.style.display = 'flex';
        }
    )

    imagem.addEventListener("mouseout",
        function () {
            nome.classList.add('sumirNome');
            setTimeout(() => {
                nome.style.display = 'none';
                nome.classList.remove('sumirNome');
            }, 450);
        }
    )
}

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

