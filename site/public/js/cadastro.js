function Prox_passo() {
    form_orquestra.classList.add('sumir-esquerdo');
    setTimeout(() => {
        form_login.style.display = 'flex';
        form_orquestra.style.display = 'none';
        form_orquestra.classList.remove('sumir-esquerdo');
    }, "400")
}
function ant_passo() {
    form_login.classList.add('sumir-direito');
    setTimeout(() => {
        form_orquestra.style.display = 'flex';
        form_login.style.display = 'none';
        form_login.classList.remove('sumir-direito');
    }, "400")
}