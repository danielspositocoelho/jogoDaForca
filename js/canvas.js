const initialY = gameArea.height-100;     // define referencia para area dos tracejados e letras da palavra  
const initialX = (10*gameArea.width)/100;
const LINEWIDTH = 3;
const LINEGAPS = 20;
const lineSize = 60;
const FONTSIZE = 100;
const textMarginBottom = 10;  
giz.fillStyle = 'white';
giz.font = '50px cursive';

function drawWordGaps (word)
{
    var x = initialX;
    giz.strokeStyle ='white';
    giz.lineWidth = LINEWIDTH;
    
    giz.clearRect(0,0,gameArea.width,gameArea.height);
    for(var i = 0; i<word.length; i++)
    {
        
        giz.beginPath(); //começa um caminho, outra forma dentro desse contexto desse canvas
        giz.moveTo(x,initialY);//estabelece o ponto de início
        giz.lineTo((x+lineSize),initialY);//faz linha
        giz.stroke();//preenche o último path iniciado
        x += (lineSize+LINEGAPS);
        giz.closePath(); //começa um caminho, outra forma dentro desse contexto desse canvas
    }

}

function drawHangman ()
{

}

function revealLetter (letter,word)
{
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

function markMistake(wrongLetter)
{
    var x = (3*gameArea.width/4);
    var y = (gameArea.height/2);
    var gap = mistakes*10;

    giz.fillText(wrongLetter, x+gap, y+gap);
}

function popWinMsg ()
{

}

function popLossMsg ()
{

}