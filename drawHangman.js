const hangmanColor = 'white';
const headRadius = '25';
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
    giz.arc(400, 275, headRadius, 0 , 2*Math.PI);
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
