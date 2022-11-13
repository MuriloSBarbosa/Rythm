function entrar() {

    var loginVar = in_login.value;
    var senhaVar = in_senha.value;

    in_login.parentElement.childNodes[3].style.color = '#dbdbdb';
    in_senha.parentElement.childNodes[3].style.color = '#dbdbdb';

    if (loginVar == "" || senhaVar == "") {
        if (loginVar == "") {
            in_login.parentElement.childNodes[3].style.color = 'red';
        }
        if (senhaVar == "") {
            in_senha.parentElement.childNodes[3].style.color = 'red';
        }

        alert("Preencha os campos obrigatórios!");

        return false;
    }

    aguardar();

    console.log("FORM LOGIN: ", loginVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/orquestra/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            loginServer: loginVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.LOGIN_ORQUESTRA = json.login;
                sessionStorage.NOME_ORQUESTRA = json.nome;
                sessionStorage.ID_ORQUESTRA = json.idOrquestra;

                setTimeout(function () {
                    window.location = "./musicos.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}