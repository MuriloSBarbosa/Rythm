function Prox_passo() {
    var nomeVar = in_nome.value;
    var emailVar = in_email.value;

    in_email.parentElement.childNodes[3].style.color = '#dbdbdb';
    in_nome.parentElement.childNodes[3].style.color = '#dbdbdb';

    if (nomeVar == "" || emailVar == "") {
        if (emailVar == "") {
            in_email.parentElement.childNodes[3].style.color = 'red'
        }
        if (nomeVar == "") {
            in_nome.parentElement.childNodes[3].style.color = 'red'
        }
        alert("Preencha os campos obrigatórios!")
        return false;
    } else {
        form_orquestra.classList.add('sumir-esquerdo');
        setTimeout(() => {
            form_login.style.display = 'flex';
            form_orquestra.style.display = 'none';
            form_orquestra.classList.remove('sumir-esquerdo');
            setTimeout(() => {
                in_login.focus();
            }, "500")
        }, "400")
    }
}
function ant_passo() {
    form_login.classList.add('sumir-direito');
    setTimeout(() => {
        form_orquestra.style.display = 'flex';
        form_login.style.display = 'none';
        form_login.classList.remove('sumir-direito');
    }, "400")
}




function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = in_nome.value;
    var emailVar = in_email.value;
    var telefoneVar = in_telefone.value;
    var celularVar = in_celular.value;
    var loginVar = in_login.value;
    var senhaVar = in_senha.value;
    var confSenhaVar = in_confSenha.value;

    in_login.parentElement.childNodes[3].style.color = '#dbdbdb';
    in_senha.parentElement.childNodes[3].style.color = '#dbdbdb';
    in_confSenha.parentElement.childNodes[3].style.color = '#dbdbdb';
    in_confSenha.parentElement.childNodes[3].style.color = '#dbdbdb';

    if (loginVar == "" || senhaVar == "" || confSenhaVar == "" || senhaVar != confSenhaVar) {
        if (loginVar == "" || senhaVar == "") {
            if (loginVar == "") {
                in_login.parentElement.childNodes[3].style.color = 'red';
            }
            if (senhaVar == "") {
                in_senha.parentElement.childNodes[3].style.color = 'red';
            }
            if (confSenhaVar == "") {
                in_confSenha.parentElement.childNodes[3].style.color = 'red';
            }
            alert("Preencha os campos obrigatórios!")
            return false;
        }

        if (senhaVar != confSenhaVar) {
            in_confSenha.parentElement.childNodes[3].style.color = 'red';
            alert("A senhas não são iguais!")
            return false;
        }
    }


    // Enviando o valor da nova input
    fetch("/orquestra/cadastrar_orquestra", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            telefoneServer: telefoneVar,
            celularServer: celularVar,
            loginServer: loginVar,
            senhaServer: senhaVar,
        })
    }).then(function (resposta) {
        aguardar();

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            var msg = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
            aparecer_card(msg);

            setTimeout(() => {
                div_card.style.display = "none";
                finalizarAguardar();
            }, "4000")

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")
        } else {
            resposta.text().then(texto => {
                console.log(texto);

                aparecer_card(texto);

                setTimeout(() => {
                    div_card.style.display = "none";
                    finalizarAguardar();
                }, "3000")

            });
            console.log("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        aparecer_card(resposta);
        console.log(`#ERRO: ${resposta}`);
        setTimeout(() => {
            div_card.style.display = "none";
        }, "4000")
    });

    return false;
}
