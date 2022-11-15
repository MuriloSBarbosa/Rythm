var idOrquestra = sessionStorage.ID_ORQUESTRA;

var texto = 'Carregando gráficos';
aparecer_card(texto);
document.body.style.overflow = 'hidden';
setTimeout(() => {
    div_card.style.display = "none";
    document.body.style.overflow = '';
}, "1500")

function obterDadosGrafico(idOrquestra, tipo) {

    indicesGrafico.style.display = 'none';
    fetch(`/graficos/obterDados/${idOrquestra}/${tipo}`, {
        cache: 'no-store'
    })
        .then(function (response) {
            if (response.ok) {
                div_ChartGeral.style.display = 'none';
                div_ChartCordas.style.display = 'none';
                div_ChartMadeiras.style.display = 'none';
                div_ChartMetais.style.display = 'none';
                nenhum_cadastrado.style.display = 'none';

                btn_Geral.classList.remove('btnGeral-active');
                btn_Cordas.classList.remove('btnCordas-active');
                btn_Madeiras.classList.remove('btnMadeiras-active');
                btn_Metais.classList.remove('btnMetais-active');

                if (response.status == 204) {
                    nenhum_cadastrado.style.display = 'block';
                    if (tipo == 'geral') {
                        h2_nenhumAchado.innerHTML = `Nenhum instrumento cadastrado`;
                    } else if (tipo == 'cordas') {
                        h2_nenhumAchado.innerHTML = `Nenhum instrumento de cordas cadastrado`;
                    } else if (tipo == 'madeiras') {
                        h2_nenhumAchado.innerHTML = `Nenhum instrumento de madeiras cadastrado`;
                    } else {
                        h2_nenhumAchado.innerHTML = `Nenhum instrumento de metais cadastrado`;
                    }
                } else {

                    indicesGrafico.style.display = 'block';

                    if (tipo == 'geral') {
                        btn_Geral.classList.add('btnGeral-active');
                        div_ChartGeral.style.display = 'block';
                        var cor = '#3ec5ff';
                        var chart = 'chartGeral';
                        indicesGrafico.style.color = cor;

                        response.json().then(function (resposta) {

                            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                            texto_indice.innerHTML = `Total de intrumentos: ${resposta.length}`;
                            plotarGrafico(resposta, cor, chart);
                        });
                    } else if (tipo == 'cordas') {
                        btn_Cordas.classList.add('btnCordas-active');
                        div_ChartCordas.style.display = 'block';
                        var cor = '#ffb066';
                        var chart = 'chartCordas';
                        indicesGrafico.style.color = cor;
                        response.json().then(function (resposta) {

                            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                            texto_indice.innerHTML = `Total de cordas: ${resposta.length}`;
                            plotarGrafico(resposta, cor, chart);
                        });
                    } else if (tipo == 'madeiras') {
                        btn_Madeiras.classList.add('btnMadeiras-active');
                        div_ChartMadeiras.style.display = 'block';
                        var cor = '#f27500';
                        var chart = 'chartMadeiras';
                        indicesGrafico.style.color = cor;
                        response.json().then(function (resposta) {

                            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                            texto_indice.innerHTML = `Total de madeiras: ${resposta.length}`;
                            plotarGrafico(resposta, cor, chart);
                        });
                    } else {
                        btn_Metais.classList.add('btnMetais-active');
                        div_ChartMetais.style.display = 'block';
                        var cor = '#232323';
                        var chart = 'chartMetais';
                        indicesGrafico.style.color = '#fff';
                        response.json().then(function (resposta) {

                            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                            texto_indice.innerHTML = `Total de metais: ${resposta.length}`;
                            plotarGrafico(resposta, cor, chart);
                        });
                    }

                }
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGrafico(resposta, cor, chart) {
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [
            {
                label: 'Quantidade',
                data: [],
                fill: false,
                backgroundColor: cor,
                borderColor: '#FFF',
                tension: 0.1
            }
        ]
    };


    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];

        labels.push(registro.nome);
        dados.datasets[0].data.push(registro.qtdInstrumento);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(chart),
        config
    );

}


obterDadosGrafico(idOrquestra, 'geral');    