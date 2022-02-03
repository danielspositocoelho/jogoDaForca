/*JOGO DA FORCA

 Deve funcionar só com letras maiúsculas (use função para capitalizar todas por padrão);
- Não devem ser utilizadas letras com acentos nem caracteres especiais;
- Ao completar o desenho da forca, deve ser exibida uma mensagem na tela de "Fim de Jogo";
- Se completar a palavra correta antes de acabarem as tentativas, deve ser exibida na tela a mensagem "Você Venceu. Parabéns!";
- A página deve ter os traços indicando cada letra da palavra, separados por espaço;
- A página deve ter um botão de "Iniciar Jogo" para começar o jogo;
- Só deve ser possívél escrever letras (os números não serão válidos)
- As letras erradas devem aparecer na tela, mas não podem aparecer repetidamente;
- As letras corretas devem ser mostradas na tela acima dos traços, nas posições corretas em relação à palavra.

Extras:
- A página deve conter um campo para inserção de texto com a finalidade de adicionar novas palavras ao jogo, e um botão "Adicionar nova palavra"


1. sortear palavra
2. desenhar traços da palavra
3. ler tecla digitada

4. validar tecla: filtros e verifica se jogo acabou
5a - se Ganhou: exibe mensagem de vitória
! - pergunta se quer outra palavra

5b - se Perdeu: exibe mensagem de derrota
!

5. - se continua: verificar jogada
6A SE ACERTO - adiciona letra sobre o traço correto 

6B SE ERRO - verifica se letra já foi errada antes
7B - caso não, adiciona letra errada a uma lista de erros ao lado, sim não adiciona
7B - verifica estado atual do desenho 
7B - adiciona próximo traço ao desenho

*/
var inputNewWord = document.querySelector('#newWord');
var btnAddNewWord = document.querySelector('#addWord');
var startGame = document.querySelector('#begin');
var fontSize = 200;
var secretWords = ['ABACAXI','CADERNO','GATO','MOCHILA','ACADEMIA','PRATO','TATUAGEM','CARRO','GASOLINA','CELULAR','COMPUTADOR','GADO','ARO','PILULA','OUVIDOR','ALFAIATE','EQUILIBRISTA','EXTENSOR','PIO','PRESIDENTE','AGUA']
var gameArea = document.querySelector('#gameArea');
var giz = gameArea.getContext('2d');
btnAddNewWord.addEventListener('click', function addNewWord(){

})
function validateNewWord ()
{

}                    

startGame.addEventListener('click', function newGame (){
    // checa se o jogo acabou ?
    // reset
    // desenhando campo do jogo               
    var word = genRandomWord(); // gerando palavra secreta aleatória
    drawWordGaps(word);
    console.log(word);
})   


function genRandomWord ()
{
    var randomIndex = Math.floor(Math.random()*(secretWords.length-1));
    return secretWords[randomIndex];
}

function drawWordGaps (word)
{
    var y = 120;
    var x = 10;
    
    var lineSize = 60;
    var gap = 20;
    giz.strokeStyle ='white';
    giz.lineWidth = 3;
    
    giz.clearRect(0,0,gameArea.width,gameArea.height);
    for(var i = 0; i<word.length; i++)
    {
        
        giz.beginPath(); //começa um caminho, outra forma dentro desse contexto desse canvas
        giz.moveTo(x,y);//estabelece o ponto de início
        giz.lineTo((x+lineSize),y);//faz linha
        giz.stroke();//preenche o último path iniciado
        x += (lineSize+gap);
        giz.closePath(); //começa um caminho, outra forma dentro desse contexto desse canvas
    }

}

function validateKey ()
{

}

function checkGuess ()
{

}

function scoresPoints ()
{

}

function drawHangman ()
{

}

function isEnd ()
{

}

function popWinMsg ()
{

}

function popLossMsg ()
{

}


