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

var gameOver = 6; // seis erros acaba o jogo
var points = 0;
var mistakes = [];
var fontSize = 200;
var secretWords = ['ABACAXI','CADERNO','GATO','MOCHILA','ACADEMIA','PRATO','TATUAGEM','CARRO','GASOLINA','CELULAR','COMPUTADOR','GADO','ARO','PILULA','OUVIDOR','ALFAIATE','EQUILIBRISTA','EXTENSOR','PIO','PRESIDENTE','AGUA','CADEIRA','SURDO','PALAVRA','SAUDADE','PORTA','FOLGA','COPO','VOO','FIO','HIDROMASSAGEM', 'CAÇA', 'CAÇADOR']
var gameArea = document.querySelector('#gameArea');
gameArea.width = 1200;
gameArea.height = 800;
var giz = gameArea.getContext('2d');

gameArea.addEventListener('dblclick', function coordenadas (event){
    const rect = gameArea.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y);

    giz.beginPath();
    giz.arc(x,y,5,0,2*3.14);
    giz.fill();
});

btnAddNewWord.addEventListener('click', function addNewWord(){

})

function validateNewWord ()
{

}                    

startGame.addEventListener('click', function newGame (){
    points = 0; // reset            
    var word = genRandomWord(); // gerando palavra secreta aleatória
    drawWordGaps(word);
    console.log(word);
    document.addEventListener('keypress', function(e){
    isEnd(word);// checa se o jogo acabou ?

        if (validateKey(e.key))
        {
            checkGuess(e.key, word);
        }
    })
})   

function genRandomWord ()
{
    var randomIndex = Math.floor(Math.random()*(secretWords.length-1));
    return secretWords[randomIndex];
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
    var rightGuess = false; // assumimos que a tentativa é falsa
    for (var i = 0; i < word.length; i++)
    {
        if (key == word[i])  // procuramos na palavra atual as ocorrências da tentativa
        {
            rightGuess = true;  // toda vez que encontramos dizemos que a tentativa é verdadeira e revelamos a letra
            points++;
            revealLetter(key,word);
        }
    }

    if (rightGuess == false) //caso a tentativa continue falsa é pq não foi encontrada a letra na palavra
    {
        var difMistake = true;  //assumimos que o erro é novo

        for (var i = 0; i < mistakes.length; i++) // checamos se o erro já foi feito anteriormente
        {
            if(key==mistakes[i])
            {
                difMistake = false;
            }
        }
        if(difMistake) // se o erro é novo adicionamos na lista e desenhamos a próxima parte da forca
        {
            mistakes.push(key);
            markMistake(key);
            drawHangman();
        }
    }
}

function isEnd (word)
{
    if (points == word.length)
        return true;
    else
        return false;
}




