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

    for (let i = 0; i < content.length; i++) {
        const contentAtual = content[i];
        contentAtual.style.display = 'none';
    }

    if (tipo == 'cordas') {
        content_cordas.style.display = 'flex';
    } else {
        content_madeiras.style.display = 'flex';
    }
}


filtro('cordas');

