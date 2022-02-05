const hangmanColor = 'white';
const raioCabeça = '25';
function drawHangman (){
    
    giz.strokeStyle = `${hangmanColor}`;
    var errorNumber = mistakes.length;  
    switch(errorNumber)
    {
        case 1: drawHanger();
            break;
        case 2: drawHead();
            break;
        case 3: drawBody();
            break;
        case 4: drawLeftArm();
            break;
        case 5: drawRightArm();
            break;
        case 6: drawLeftLeg();
            break;
        case 7: drawRightLeg();
            break;
        default:
        return false;
    }
}

function drawHanger()
{

    giz.beginPath();
    giz.moveTo(115, 580);
    giz.lineTo(175, 580); // base
    giz.lineTo(143.5, 545);//ponta do triangulo r -> l
    giz.lineTo(115, 580);
    giz.moveTo(143.5, 545);//ponta base
    giz.lineTo(143.5,170);//haste vertical
    giz.lineTo(400,170);//haste horizontal
    giz.lineTo(400,250);//haste vertical descendente
    giz.stroke();   
    giz.closePath(); 
}

function drawHead()
{
    giz.beginPath();
    giz.arc(400, 275, raioCabeça, 0 , 2*Math.PI);
    giz.stroke();
}

function drawBody()
{
    giz.beginPath();
    giz.moveTo(400, 300)
    giz.lineTo(400, 445);
    giz.closePath();
    giz.stroke();
}

function drawLeftLeg()
{
    giz.beginPath();
    giz.moveTo(400, 440)
    giz.lineTo(350,505);
    giz.closePath();
    giz.stroke();
}

function drawRightLeg()
{
    giz.beginPath();
    giz.moveTo(398, 440)
    giz.lineTo(440,505);
    giz.closePath();
    giz.stroke();
}

function drawLeftArm()
{
    giz.beginPath();
    giz.moveTo(400, 345)
    giz.lineTo(485,300);
    giz.closePath();
    giz.stroke();
}

function drawRightArm()
{
    giz.beginPath();
    giz.moveTo(400, 345)
    giz.lineTo(315,295);
    giz.closePath();
    giz.stroke();
}
/*base erro 1
113, 584
169, 579
136, 546
112, 582

hastes erro 1
x: 134.0078125 y: 546.625
x: 143.5 y: 174
x: 431.0078125 y: 167.625
x: 431.0078125 y: 240.625

membros erro 2 3 4 5 6 7
x: 430.0078125 y: 264.625
x: 428.0078125 y: 293.625
x: 430.0078125 y: 359.625
x: 493.0078125 y: 306.625
x: 427.0078125 y: 357.625
x: 359.0078125 y: 308.625
x: 430.0078125 y: 354.625
x: 431.0078125 y: 429.625
x: 476.0078125 y: 471.625
x: 430.0078125 y: 428.625
x: 376.0078125 y: 471.625 */