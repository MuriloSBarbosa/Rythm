
function abrir_modalAdicionar() {
    div_backgroundModal.style.display = 'flex';
    div_adicionarModal.style.display = 'block'
    document.body.style.overflow = 'hidden';
}
function fechar_modalAdicionar() {
    div_adicionarModal.classList.add('sumirModal');
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
