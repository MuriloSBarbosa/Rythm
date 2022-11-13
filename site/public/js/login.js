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
        aguardar();
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            var msg = "Login realizado com sucesso! Redirecionando...";
            aparecer_card(msg);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.LOGIN_ORQUESTRA = json.login;
                sessionStorage.NOME_ORQUESTRA = json.nome;
                sessionStorage.ID_ORQUESTRA = json.idOrquestra;

            });

            setTimeout(() => {
                div_card.style.display = "none";
                finalizarAguardar();
            }, "3000")

            setTimeout(() => {
                window.location = "meusMusicos.html";
            }, "1500")
        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.log(texto);

                aparecer_card(texto);

                setTimeout(() => {
                    div_card.style.display = "none";
                    finalizarAguardar();
                }, "2500")
            });
        }

    }).catch(function (erro) {
        console.log(erro);
        finalizarAguardar();
    })

    return false;
}
