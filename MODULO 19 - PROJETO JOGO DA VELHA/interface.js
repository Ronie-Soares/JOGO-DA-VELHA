// ESSE EVENTO CARREGA TODO DOCUMENTO APOS CARREGAR O HTML
document.addEventListener('DOMContentLoaded', () => {

    //AQUI ESTAMOS PEGANDO TODOS OS ELEMENTOS QUE SAO DA CLASSE 'CASA'
    // E É COLOCADO EM UM ARRAY
    let casas = document.querySelectorAll(".casa");
    //AQUI ESTAMOS VARRENDO TODO O ARRAY E COLOCANDO EM CASA ELEMENTO DA
    //CLASSE 'CASA' UM EVENTO DO TIPO CLICK QUE CHAMA A FUNC CLICANDO
    casas.forEach(element => {
        element.addEventListener('click', clicando)
    });

})
//AQUI ESTAMOS PEGANDO O ID DAQUELE ELEMENTO QUE FOI CLICADO E ENVIANDO
//COMO ARGUMENTO PARA A FUNCAO MOVIMENTO QUE ADICIONA
//QUAL JOGADOR FEZ ESSA JOGADA.
function clicando(evento) {
    if (movimento(evento.target.id) == true) {
        setTimeout(() => {
            alert("o jogo acabou")
        }, 20);
    };
    //AQUI CHAMA FUNCAO PARA MOSTRAR NA TELA O SIMBOLO DO JOGADOR
    adicionarJogadorTela2(evento.target.id);
    // console.log(evento.target.id)

};

function adicionarJogadorTela2(posicao){
    let casa = document.getElementById(posicao);
    casa.innerHTML = `<div class='${posicoes[posicao]}'></div>`

}

function adicionarJogadorTela() {

    //AQUI ESTAMOS PEGANDO TODOS OS ELEMENTOS QUE SAO DA CLASSE 'CASA'
    // E É COLOCADO EM UM ARRAY
    let casas = document.querySelectorAll(".casa");

    //AQUI INDENTIFICAMOS QUAL CLASSE FOI GRAVADA NO ELEMENTO CLICADO
    casas.forEach(element => {
        //APOS VARRER O ARRAY,  VERIFICAMOS QUAL JOGADOR FOI GRAVADO NAS POSICOES
        // E AI ADICIONAMOS A PEÇA NO TABULEIRO
        if (posicoes[element.id] != null) {
            element.innerHTML = `<div class='${posicoes[element.id]}'></div>`
        } else {
        }

    });

};

function limparTela() {


    //AQUI ESTAMOS PEGANDO TODOS OS ELEMENTOS QUE SAO DA CLASSE 'CASA'
    // E É COLOCADO EM UM ARRAY
    let casas = document.querySelectorAll(".casa");

    //AQUI INDENTIFICAMOS QUAL CLASSE FOI GRAVADA NO ELEMENTO CLICADO
    casas.forEach(element => {
        //APOS VARRER O ARRAY,  VERIFICAMOS QUAL JOGADOR FOI GRAVADO NAS POSICOES
        // E AI ADICIONAMOS A PEÇA NO TABULEIRO

            element.innerHTML = `<div class='${posicoes[element.id]}'></div>`

    });

};
