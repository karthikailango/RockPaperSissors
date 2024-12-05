let yourScore=0;
let opponentScore=0;
let opponentNumber;

/*if((yourNumber === 0 && opponentNumber === 2) || // Rock beats Scissors
(yourNumber === 1 && opponentNumber === 0) || // Paper beats Rock
(yourNumber === 2 && opponentNumber === 1)    // Scissors beats Paper
) */
function checkSignal(yourNumber)
{  opponentNumber=Math.floor(Math.random()*3);
  if((yourNumber === 0 && opponentNumber === 2)||(yourNumber === 1 && opponentNumber === 0)||(yourNumber === 2 && opponentNumber === 1)) 
    {
      yourScore+=1;
    }
    else if(yourNumber===opponentNumber)
      {
        yourScore+=0;
        opponentScore+=0;
      }
   
    else 
    {
       opponentScore+=1; 
    }
document.getElementById('scoreDisplay').textContent = `Your Score: ${yourScore}\u00A0\u00A0\u00A0\u00A0Opponent Score: ${opponentScore}`;
console.log(opponentNumber,yourNumber);
  }

