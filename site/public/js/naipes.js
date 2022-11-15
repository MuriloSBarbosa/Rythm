var idOrquestra = sessionStorage.ID_ORQUESTRA;

var texto = 'Carregando gráfico';
aparecer_card(texto);
document.body.style.overflow = 'hidden';
setTimeout(() => {
    div_card.style.display = "none";
    document.body.style.overflow = '';
}, "1500")

function obterDadosGrafico(idOrquestra, tipo) {

    fetch(`/graficos/obterDados/${idOrquestra}/${tipo}`, {
        cache: 'no-store'
    })
        .then(function (response) {
            if (response.ok) {
                nenhum_cadastrado.style.display = 'none';

                if (response.status == 204) {
                    nenhum_cadastrado.style.display = 'block';
                    h2_nenhumAchado.innerHTML = `Nenhum instrumento cadastrado`;
                } else {
                    div_ChartNaipes.style.display = 'block';
                    response.json().then(function (resposta) {

                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                        plotarGrafico(resposta);
                    });
                }
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGrafico(resposta) {
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
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                borderColor: '#FFF',
                tension: 0.1
            }
        ]
    };


    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    var total = 0;
    var cordas = 0;
    var madeiras = 0;
    var metais = 0;

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];

        labels.push(registro.naipe);
        dados.datasets[0].data.push(registro.qtdInstrumento);

        if (registro.naipe == 'cordas') {
            cordas = registro.qtdInstrumento;
        } else if (registro.naipe == 'madeiras') {
            madeiras = registro.qtdInstrumento;
        } else {
            metais = registro.qtdInstrumento;
        }

        total += registro.qtdInstrumento;
    }
    console.log('---------------------- madeiras ------------------------');
    console.log(madeiras);
    var porcentoCordas = (cordas / total) * 100;
    var porcentoMadeiras = (madeiras / total) * 100;
    var porcentoMetais = (metais / total) * 100;

    porcento_cordas.innerHTML = porcentoCordas.toFixed(1);
    porcento_madeiras.innerHTML = porcentoMadeiras.toFixed(1);
    porcento_metais.innerHTML = porcentoMetais.toFixed(1);

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'doughnut',
        data: dados
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById('chartNaipes'),
        config
    );

}


obterDadosGrafico(idOrquestra, 'naipes');    