const key = 'c36df61ab6e0a228c941b05a8b770830'
const botao = document.querySelector('.botao-busca')
const cidadetela = document.querySelector('.cidade')
const tempo = document.querySelector('.temp')
const imagem = document.querySelector('.img-previsao')
const textprev = document.querySelector('.texto-previsao')
const umidade = document.querySelector('.umidade')

botao.addEventListener('click', cliquenobotao)

function cliquenobotao(){
    const cidade = document.querySelector('.input-cidade').value
    buscarCidade(cidade)
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta=>resposta.json())
    console.log(dados)
    dadosnatela(dados)
}

function dadosnatela(dados){
    cidadetela.innerHTML = "Tempo em " + dados.name
    tempo.innerHTML = Math.ceil(dados.main.temp) + " °C"
    imagem.src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    textprev.innerHTML = dados.weather[0].description
    umidade.innerHTML = "Umidade: "+dados.main.humidity+"%"

}