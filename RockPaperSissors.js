/* let yourScore=0;
let opponentScore=0;
let opponentNumber;*/

//this is an earlier logic for the applicaion

/*function checkSignal(yourNumber)
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
  }*/

  const randomNumber=Math.random();
  var generatedSymbol;
  let yourScore=0;
  let opponentScore=0;
  function randomNumberGenerator()
  {
    if(randomNumber>=0 && randomNumber< 1/3)
      {
        generatedSymbol="rock";
      }
  
    else if(randomNumber>=1/3 && randomNumber< 2/3)
        {
          generatedSymbol="paper";
        }
    else if(randomNumber>=2/3 && randomNumber< 1)
          {
           generatedSymbol="sissors";
          }
  
  }

  function refree(userSymbol)
  { 
    randomNumberGenerator();
    
  if(userSymbol===generatedSymbol)
      {
          console.log("tie");
      }

  else if(userSymbol==="rock" && (generatedSymbol==="sissors"))
      {
          console.log("you win");
          yourScore+=1;
      }
  else if(userSymbol==="paper" && (generatedSymbol==="rock"))
      {
          console.log("you win");
          yourScore+=1;
      }
  else if(userSymbol==="sissors" && (generatedSymbol==="paper"))
      {
           console.log("you win");
           yourScore+=1;
      }

  else 
       {
        opponentScore+=1;
        console.log("Computer wins this time");
        
      }
  
  document.getElementById('scoreDisplay').textContent = `Your Score: ${yourScore}\u00A0\u00A0\u00A0\u00A0Opponent Score: ${opponentScore}`;
  

  }

  function reset()
  {
    document.getElementById('scoreDisplay').textContent = `Your Score: ${yourScore=0}\u00A0\u00A0\u00A0\u00A0Opponent Score: ${opponentScore=0}`;
    
  }
