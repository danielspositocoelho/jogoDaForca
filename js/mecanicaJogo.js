//SELETORES

var inputNewWord = document.querySelector('#newWord');
var btnAddNewWord = document.querySelector('#addWord');
var startGame = document.querySelector('#begin');
var guess = document.querySelector('.guess');
var gameControls = document.querySelector('#gameStart');
var confirmGuess = document.querySelector('#takeGuess');
var gameArea = document.querySelector('#gameArea');
var giz = gameArea.getContext('2d');

//definindo tamanho do canvas
gameArea.width = 1200;
gameArea.height = 800;

//VARIAVEIS GLOBAIS

let word = '';      //palavra atual do jogo
const MAXERRORS = 7; // desenhamos o hangman em 7 passos totalizndo 7 erros no maximo
var points = [];    //contador de ponto da partida atual
var mistakes = [];  // contador de erros da partida atual
var tries = [];     // registro das tentativas dadas na partida atual

//banco de palavras padrão
var words = ['ABACAXI','CADERNO','GATO','MOCHILA','ACADEMIA','PRATO','TATUAGEM','CARRO','GASOLINA','CELULAR','COMPUTADOR','GADO','ARO','PILULA','OUVIDOR','ALFAIATE','EQUILIBRISTA','EXTENSOR','PIO','PRESIDENTE','AGUA','CADEIRA','SURDO','PALAVRA','SAUDADE','PORTA','FOLGA','COPO','VOO','FIO','HIDROMASSAGEM', 'CAÇA', 'CAÇADOR']

//EVENTOS PRINCIPAIS

startGame.addEventListener('click', function newGame (){
// reset
    points.length = 0;             
    mistakes.length = 0;
    tries.length = 0;
    guess.disabled = false;
    guess.value = '';
    gameControls.classList.remove('invisible');

// gerando palavra secreta aleatória e desenhando espaços para as letras
    word = genRandomWord(); 
    drawWordGaps(word);

//lendo palpite do usuario pelo teclado
    guess.addEventListener('textInput', function(e){

        if (validateKey(e.data))
        {  
            checkGuess(e.data, word);
        } //se não for valido não fazemos nada com o input
    guess.value = '';
    continueGame(word); // checando o fim do jogo  depois de ler a letra, caso já estiver acabado, não lemos o palpite, caso já tenha acabado, não aguardamos outro input
    })

//ADAPTAÇÃO PARA MOBILE - A FUNÇÃO ACIMA SÓ FUNCIONA EM AMBIENTE DESKTOP
    confirmGuess.addEventListener('click', function(){      
        if (validateKey(guess.value))
        {  
            checkGuess(guess.value, word);
        } //se não for valido não fazemos nada com o input
    guess.value = '';
    continueGame(word); // checando o fim do jogo  depois de ler a letra, caso já estiver acabado, não lemos o palpite, caso já tenha acabado, não aguardamos outro input
    })
}) 

btnAddNewWord.addEventListener('click', function addNewWord(){
//adicionando nova palavra ao banco de palavras
    var newWord = inputNewWord.value;
    if(validateNewWord(newWord)){
        newWord = newWord.toUpperCase();
        words.push(newWord);
    }
})


function genRandomWord ()
{
    var randomIndex = Math.floor(Math.random()*(words.length-1));
    return words[randomIndex];
}

function validateKey (input)
{
    if (isNaN(input)) // se não for número pode ser letra
    {
        if(input.toLowerCase() != input.toUpperCase()) //se houver diferença entre maisculo e minisculo é letra
        {
            return true;
        }
        else
        return false;
    }else
        return false;
}

function checkGuess (input, word)
{
    var key = input.toUpperCase(); // todas as letras serão maiúsculas por padrão
    var rightGuess = false;
    var difKey = true;  //assumimos que a letra é nova

    // checamos se a letra já foi digitada nessa rodada
    if(tries.includes(key))
        difKey=false;    
    
        if(difKey){
            for (var i = 0; i < word.length; i++)
            {
                if (key == word[i])  // procuramos na palavra atual as ocorrências da tentativa
                {
                    rightGuess = true;  // toda vez que encontramos dizemos que a tentativa é verdadeira e revelamos a letra
                    revealLetter(key,word);
                    points.push(key); // adicionamos ponto
                }
            }

            if(rightGuess==false){
                mistakes.push(key);//adicionamos erro
                markMistake(key); // caso não for encontrado, marcamos erro
                drawHangman();
            }
        }
    tries.push(key);
}

function continueGame (word)
{
    if (points.length == word.length){
        popWinMsg();
        return false;
    }
    else if (mistakes.length == MAXERRORS){
        popLossMsg();
        return false;
    }else
        return true;
}

function validateNewWord (newWord)
{
    var validWord = true;
    for (let i = 0; i < newWord.length; i++)
    {
        if(validateKey(newWord[i]) == false)
        {
            validWord == false;
            break;
        }
    }
    if(validWord && newWord.length>0)
        return true;
    else
        return false;
}                      