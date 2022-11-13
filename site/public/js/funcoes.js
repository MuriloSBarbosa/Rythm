// sessão
function validarSessao() {

    var login = sessionStorage.LOGIN_ORQUESTRA;
    var nome = sessionStorage.NOME_ORQUESTRA;

    if (login != null && nome != null) {
        spn_orquestraNome.innerHTML = nome;

    } else {
        window.location = "./login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    loading_gif.style.display = "flex";
}

function finalizarAguardar() {
    loading_gif.style.display = "none";
}

function aparecer_card(texto) {
    div_card.style.display = "flex";
    mensagem_erro.innerHTML = texto;
}