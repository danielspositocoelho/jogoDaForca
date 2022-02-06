const initialY = gameArea.height-100;     // define referencia para area dos tracejados e letras da palavra  
const initialX = (10*gameArea.width)/100;
const LINEWIDTH = 3;
const LINEGAPS = 20;
const lineSize = 60;
const FONTWIDTH = 50;
const textMarginBottom = 10;  
const ERROR_FONT = 'monospace';
const POINT_FONT = 'cursive';


function drawWordGaps (word)
{
    var x = initialX;
    giz.strokeStyle ='white';
    giz.lineWidth = LINEWIDTH;
    
    giz.clearRect(0,0,gameArea.width,gameArea.height);
    for(var i = 0; i<word.length; i++)
    {
        
        giz.beginPath(); //começa um caminho, outra forma dentro desse contexto desse gameArea
        giz.moveTo(x,initialY);//estabelece o ponto de início
        giz.lineTo((x+lineSize),initialY);//faz linha
        giz.stroke();//preenche o último path iniciado
        x += (lineSize+LINEGAPS);
        giz.closePath(); //começa um caminho, outra forma dentro desse contexto desse gameArea
    }

}



function revealLetter (letter,word)
{
    
    console.log(`${word} revealLetter`);
    giz.fillStyle = 'rgba(230, 230, 230, 0.747)';
    giz.font = `${FONTWIDTH}px ${POINT_FONT}`;
    var x = initialX;
    for(var i = 0; i<word.length; i++)
    {
        if(letter==word[i])
        {
            giz.fillText(letter,x+lineSize/4,(initialY-textMarginBottom))
        }
        x += (lineSize+LINEGAPS);
    }
}

//FUNÇÃO QUE CONSTRÓI LISTA DE ERROS
var newLine = 0;
var lineLimit = 5;    // número máximo de erros que cabem em linha na área reservada
var errorsInLine = 1; // SE A FUNÇÃO FOR CHAMADA É PORQUE JÁ HÁ UM ERRO
function markMistake(wrongLetter)
{    
    giz.fillStyle ='rgba(255, 15, 15, 0.808)';
    giz.font = `${FONTWIDTH}px ${ERROR_FONT}`;
    var y = (gameArea.height/2)+newLine; //linhas começam na metade da altura do gameArea, descem a cada 5 erros na linha
    var gap = errorsInLine*FONTWIDTH;   
    var x = (3*gameArea.width/4)+gap;    //letras aparecem em 3/4 da largura do gameArea, movendo um espaço de letra a cada erro já registrado e voltando ao 0 quando completa a linha (5 erros)

    if (mistakes.length>=lineLimit) 
    {
        newLine+=50;
        lineLimit = lineLimit*2;
        errorsInLine = 0;
    }
    giz.fillText(wrongLetter, x, y);
    errorsInLine++;
}

function popWinMsg ()
{
    console.log('ok');
    giz.fillStyle = 'blue';
    giz.fillText('Você venceu. Parabéns!', gameArea.width/2, gameArea.height/4);
}

function popLossMsg ()
{
    console.log('ok');
    giz.fillStyle = 'red';
    giz.fillText('Não foi dessa vez.', gameArea.width/2, gameArea.height/4);
}