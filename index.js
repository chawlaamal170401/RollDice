// Image1 selection
var randomNumber1;
randomNumber1 = Math.random();
randomNumber1 = (randomNumber1*6)+1;
randomNumber1 = Math.floor(randomNumber1);

var diceImageSrc = "images/"+"dice"+randomNumber1+".png";

var im1= document.querySelector("img.img1");
im1.setAttribute("src",diceImageSrc);

// Image2 selection

var randomNumber2;
randomNumber2 = Math.random();
randomNumber2 = (randomNumber2*6)+1;
randomNumber2 = Math.floor(randomNumber2);

var diceImageSrc2 = "images/dice"+randomNumber2+".png";

document.querySelector("img.img2").setAttribute("src",diceImageSrc2);

// Winner display
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="PLAYER 1 WINS!⛳";
  document.querySelector("h1").style.fontSize="5rem";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent="⛳PLAYER 2 WINS!";
  document.querySelector("h1").style.fontSize="5rem";
}
else
{
  document.querySelector("h1").textContent="DRAW!";
  document.querySelector("h1").style.fontSize="5rem";
}
