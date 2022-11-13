function abrir_modalAdicionar() {
    div_backgroundModal.style.display = 'flex';
    div_adicionarModal.style.display = 'block'
    document.body.style.overflow = 'hidden';
}
function fechar_modalAdicionar() {
    div_adicionarModal.classList.add('sumirModal');

    in_adcNome.value = "";
    in_adcTelefone.value = "";
    sel_adcNaipe.value = "";
    in_adcNome.focus();

    setTimeout(() => {
        div_backgroundModal.style.display = 'none';
        div_adicionarModal.classList.remove('sumirModal');
        div_adicionarModal.style.display = 'none'
        document.body.style.overflow = '';
    }, 500);
}

function abrir_modalEditar() {
    div_backgroundModal.style.display = 'flex';
    div_editarModal.style.display = 'block'
    document.body.style.overflow = 'hidden';
}
function fechar_modalEditar() {
    div_editarModal.classList.add('sumirModal');
    setTimeout(() => {
        div_backgroundModal.style.display = 'none';
        div_editarModal.classList.remove('sumirModal');
        div_editarModal.style.display = 'none'
        document.body.style.overflow = '';
    }, 500);
}
function qual_adcNaipe() {
    sel_adcInstrumento.innerHTML = "";
    var naipe = sel_adcNaipe.value;
    var option = ``;
    if (!(naipe == "")) {
        if (naipe == 'cordas') {
            option =
                `
                                <option value="">-- escolha um --</option>
                                <option value="1">Violino</option>
                                <option value="2">Violoncelo</option>
                                <option value="3">Contrabaixo</option>
                                <option value="4">Harpa</option>
                                <option value="5">Violão</option>
                    `
        } else if (naipe == 'madeiras') {
            option =
                `
                                <option value="">-- escolha um --</option>
                                <option value="6">Flauta</option>
                                <option value="7">Oboé</option>
                                <option value="8">Fagote</option>
                                <option value="9">Contrafagote</option>
                                <option value="10">Clarinete</option>
                                <option value="11">Clarone</option>
                                <option value="12">Corne Inglês</option>
                                <option value="13">Saxofone Soprano</option>
                                <option value="14">Saxofone Alto</option>
                                <option value="15">Saxofone Tenor</option>
                                <option value="16">Saxofone Baritono</option>
                    `
        } else {
            option =
                `
                                <option value="">-- escolha um --</option>
                                <option value="17">Trompete</option>
                                <option value="18">Trompa</option>
                                <option value="19">Trombone</option>
                                <option value="20">Tuba</option>
                                <option value="21">Eufônio</option>
                                <option value="22">Flugelhorn</option>
                `
        }
        sel_adcInstrumento.innerHTML = option;
        sel_adcInstrumento.disabled = false;

    } else {
        sel_adcInstrumento.disabled = true;
        option = `<option value="">-- Selecione um naipe --</option>`
        sel_adcInstrumento.innerHTML = option;
    }
}

function qual_edtNaipe() {
    sel_edtInstrumento.innerHTML = "";
    var naipe = sel_edtNaipe.value;
    var option = ``;
    if (!(naipe == "")) {
        if (naipe == 'cordas') {
            option =
                `
                                <option value="">-- escolha um --</option>
                                <option value="1">Violino</option>
                                <option value="2">Violoncelo</option>
                                <option value="3">Contrabaixo</option>
                                <option value="4">Harpa</option>
                                <option value="5">Violão</option>
                    `
        } else if (naipe == 'madeiras') {
            option =
                `
                                <option value="">-- escolha um --</option>
                                <option value="6">Flauta</option>
                                <option value="7">Oboé</option>
                                <option value="8">Fagote</option>
                                <option value="9">Contrafagote</option>
                                <option value="10">Clarinete</option>
                                <option value="11">Clarone</option>
                                <option value="12">Corne Inglês</option>
                                <option value="13">Saxofone Soprano</option>
                                <option value="14">Saxofone Alto</option>
                                <option value="15">Saxofone Tenor</option>
                                <option value="16">Saxofone Baritono</option>
                    `
        } else {
            option =
                `
                                <option value="">-- escolha um --</option>
                                <option value="17">Trompete</option>
                                <option value="18">Trompa</option>
                                <option value="19">Trombone</option>
                                <option value="20">Tuba</option>
                                <option value="21">Eufônio</option>
                                <option value="22">Flugelhorn</option>
                `
        }
        sel_edtInstrumento.innerHTML = option;
        sel_edtInstrumento.disabled = false;

    } else {
        sel_edtInstrumento.disabled = true;
        option = `<option value="">-- Selecione um naipe --</option>`
        sel_edtInstrumento.innerHTML = option;
    }
}


spn_orquestraNome.innerHTML = sessionStorage.NOME_ORQUESTRA;

// function limparFormulario() {
//     document.getElementById("form_postagem").reset();
// }

function adicionarMusico() {

    var nome = in_adcNome.value;
    var telefone = in_adcTelefone.value;
    var naipe = sel_adcNaipe.value;
    var instrumento = sel_adcInstrumento.value;

    in_adcNome.parentElement.childNodes[1].style.color = '#000';
    in_adcNome.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(0 0 0 / 30%)';
    in_adcTelefone.parentElement.childNodes[1].style.color = '#000';
    in_adcTelefone.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(0 0 0 / 30%)';
    sel_adcInstrumento.parentElement.childNodes[1].style.color = '#000';
    sel_adcInstrumento.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(0 0 0 / 30%)';
    sel_adcNaipe.parentElement.childNodes[1].style.color = '#000';
    sel_adcNaipe.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(0 0 0 / 30%)';

    if (nome == "" || telefone == "" || instrumento == "" || naipe == "") {
        if (nome == "") {
            in_adcNome.parentElement.childNodes[1].style.color = 'red';
            in_adcNome.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(255 0 0 / 30%)';
        }
        if (telefone == "") {
            in_adcTelefone.parentElement.childNodes[1].style.color = 'red';
            in_adcTelefone.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(255 0 0 / 30%)';
        }
        if (instrumento == "") {
            sel_adcInstrumento.parentElement.childNodes[1].style.color = 'red';
            sel_adcInstrumento.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(255 0 0 / 30%)';
        }
        if (naipe == "") {
            sel_adcNaipe.parentElement.childNodes[1].style.color = 'red';
            sel_adcNaipe.parentElement.childNodes[3].style.boxShadow = '0 0 3px rgb(255 0 0 / 30%)';
        }

        alert("Preencha todos os campos");
        return false;
    }

    var idOrquestra = sessionStorage.ID_ORQUESTRA;

    var corpo = {
        nome: in_adcNome.value,
        telefone: in_adcTelefone.value,
        instrumento: sel_adcInstrumento.value,

    }
    fetch(`/meusMusicos/cadastrarMusico/${idOrquestra}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        h2_loading.innerHTML = 'Adicionando...';

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            var msg = "Musico adicionado com sucesso!...";
            aparecer_card(msg);

            in_adcNome.value = "";
            in_adcTelefone.value = "";
            sel_adcNaipe.value = "";

            setTimeout(() => {
                div_card.style.display = "none";
                finalizarAguardar();
                window.location = "./meusMusicos.html";
            }, "2500")

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;

}

function editar(idAviso) {
    sessionStorage.ID_POSTAGEM_EDITANDO = idAviso;
    console.log("cliquei em editar - " + idAviso);
    window.alert("Você será redirecionado à página de edição do aviso de id número: " + idAviso);
    window.location = "/dashboard/edicao-aviso.html"

}

function deletar_musico(idMusico) {
    console.log("Criar função de excluir musico - ID" + idMusico);

    fetch(`/meusMusicos/deletar/${idMusico}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        aguardar();

        if (resposta.ok) {
            var texto = `Músico ${idMusico} deletado com sucesso!`;
            aparecer_card(texto);
            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                window.location = "/meusMusicos.html";
            }, "1500")

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function atualizarFeed() {
    var idOrquestra = sessionStorage.ID_ORQUESTRA;

    fetch(`/meusMusicos/listar/${idOrquestra}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                h2_nenhumAchado.innerHTML = "Nenhum músico cadastrado."
                throw "Nenhum músico cadastrado!";
            }

            resposta.json().then(function (resposta) {

                var texto = 'Listando Musicos';
                aparecer_card(texto);
                document.body.style.overflow = 'hidden';

                console.log("Dados recebidos: ", JSON.stringify(resposta));

                div_planilhaMusicos.innerHTML =
                    `
                <table class="tabela-musicos">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Musico</th>
                            <th>Instrumento</th>
                            <th>Telefone</th>
                            <th>Excluir</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody id="table_musicos">
                    </tbody>
                </table>
                `;
                for (let i = 0; i < resposta.length; i++) {
                    var musico = resposta[i];
                    table_musicos.innerHTML +=
                        `
                        <tr>
                            <td>${musico.idMusico}</td>
                            <td>${musico.nome}</td>
                            <td>${musico.instrumento}</td>
                            <td>${musico.telefone}</td>
                            <td><button onclick="deletar_musico(${musico.idMusico})"><img src="/assets/imgs/lixo.svg"></button></td>
                            <td><button onclick="abrir_modalEditar(${musico.idMusico})"><img src="/assets/imgs/lapis.svg"></button></td>
                        </tr>
                    `
                }

                setTimeout(() => {
                    div_card.style.display = "none";
                    document.body.style.overflow = '';
                }, "2000")
            });

        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
    });
}

