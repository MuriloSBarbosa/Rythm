// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_ORQUESTRA;
    var nome = sessionStorage.NOME_ORQUESTRA;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
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