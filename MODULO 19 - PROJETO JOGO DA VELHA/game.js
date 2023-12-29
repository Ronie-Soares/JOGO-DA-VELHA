
//INICIA VARIAVEIS DAS POSICOES,JOGADOR, TIPO JOGADOR E GAMEOVER
var posicoes = [null, null, null, null, null, null, null, null, null];
let jogadorDaVez = 0;
let jogador = ['o', 'x'];
var gameOver = false;

function movimento(posicaoJogada) {

    if (gameOver) {
        return;
    }


    if (posicaoJogada == '') {
        alert('Aqui nao pode jogar')
    } else {
        posicoes[posicaoJogada] = jogador[jogadorDaVez]
        
        gameOver = fim();
        velha();

        if (gameOver == false) {
            if (jogadorDaVez == 0) {
                jogadorDaVez = 1;
            } else {
                jogadorDaVez = 0
            }
        }

    }

    return gameOver;
}

function fim() {
    let jogadasGanhasPossiveis = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < jogadasGanhasPossiveis.length; i++) {
        
        let sequenciasGanhadoras = jogadasGanhasPossiveis[i];

        let posicao1 = sequenciasGanhadoras[0];
        let posicao2 = sequenciasGanhadoras[1];
        let posicao3 = sequenciasGanhadoras[2]

        if (posicoes[posicao1] == posicoes[posicao2] &&
        posicoes[posicao1] == posicoes[posicao3] &&
        posicoes[posicao1] != null
        ){
            return true
        }

    }
    return false;

}

function velha(){
    let empate = 0;
    posicoes.forEach(element => {
        if(element != null){
            empate++ ;
        }
    });
    if (empate == 9 && gameOver == false){
        setTimeout(()=>{
            alert("VELHA!")

        },30)
    }
    console.log
}

function recomecar(){

    for (let i = 0; i < posicoes.length; i++){
        posicoes[i] = null
    }
    jogadorDaVez = 0
    gameOver = false;

    limparTela()
}