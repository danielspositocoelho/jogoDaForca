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

function animateLineDrawning(drawningCoordinates)
{
    giz.strokeStyle = 'white';
   for(let frame = 1; frame < drawningCoordinates.length-1; frame++){
        setTimeout(function(){
            giz.beginPath();
            giz.moveTo(drawningCoordinates[frame-1].x, drawningCoordinates[frame-1].y);
            giz.lineTo(drawningCoordinates[frame].x, drawningCoordinates[frame].y);
            giz.stroke();
        },1800)
   }
}

function animateCircleDrawning(drawningCoordinates,x,y)
{
    giz.strokeStyle = 'white';
    for(let frame = 0; frame < drawningCoordinates.length; frame++){
         setTimeout(function(){
             giz.beginPath();
             giz.arc(x,y,headRadius,drawningCoordinates[frame].x,drawningCoordinates[frame].y);
             giz.stroke();
         },2000)
    }
}
//retornamos uma array com as coordenadas fornecidas parceladas em 100 coordenadas intermediarias, começando do ponto 0 e adicionando 1 centésimo da distancia para se chegar ao destino a cada parcela
function calcWaypoints(coordinates){
    var waypoints = [];
    for (let i = 1; i < coordinates.length; i++)
    {
        let originPoint = coordinates[i-1];
        let destinyPoint = coordinates[i];
        let distanceX = destinyPoint.x - originPoint.x;
        let distanceY = destinyPoint.y - originPoint.y;
        for(let j = 0; j<= 100; j++){
            let x = originPoint.x + distanceX * j/100; 
            let y = originPoint.y + distanceY * j/100;
            waypoints.push({x:x, y:y});
        }
    }
    return(waypoints);
}

function drawHanger()
{
    var hangerTriCoord = [{x:115,y:580},{x:175, y:580},{x:143.5, y:545},{x:115, y:580}];
    animateLineDrawning(calcWaypoints(hangerTriCoord));
    var hangerLineCoord = [{x:143.5, y:545}, {x:143.5 ,y:170},{x:400 ,y:170}, {x:400 ,y:250}];
    animateLineDrawning(calcWaypoints(hangerLineCoord));
   
}

function drawHead()
{
    animateCircleDrawning(calcWaypoints([{x:0 , y:0},{x:0 , y:2*Math.PI}]),400,275);
}

function drawBody()
{
    var bodyCoord = [{x:400, y:300},{x:400, y:445}]
    animateLineDrawning(calcWaypoints(bodyCoord));
}

function drawLeftLeg()
{
    var leftLegCoord = [{x:400, y:440},{x:350, y:505}];
    animateLineDrawning(calcWaypoints(leftLegCoord));
}

function drawRightLeg()
{
    var rightLegCoord = [{x:398, y:440},{x:440, y:505}];
    animateLineDrawning(calcWaypoints(rightLegCoord));
}

function drawLeftArm()
{
    var leftArmCoord = [{x:400, y:345},{x:485, y:300}];
    animateLineDrawning(calcWaypoints(leftArmCoord));
}

function drawRightArm()
{
    var rightArmCoord = [{x:400, y:345},{x:315, y:295}];
    animateLineDrawning(calcWaypoints(rightArmCoord));
}
