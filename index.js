//randomizing dice1

var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1; 
 if(randomNumber1==1)
 {
     document.querySelector(".img1").setAttribute('src','images/dice1.png');        
 }
 else if(randomNumber1==2)
 {
     document.querySelector(".img1").setAttribute('src','images/dice2.png');
 }
 else if(randomNumber1==3)
 {
     document.querySelector(".img1").setAttribute('src','images/dice3.png');
 }
 else if(randomNumber1==4)
 {
     document.querySelector(".img1").setAttribute('src','images/dice4.png');
 }
 else if(randomNumber1==5)
 {
     document.querySelector(".img1").setAttribute('src','images/dice5.png');
 }
 else if(randomNumber1==6)
 {
     document.querySelector(".img1").setAttribute('src','images/dice6.png');
 }
  
 
//randomizing dice2

 var randomNumber2;
 randomNumber2=Math.floor((Math.random()*6)+1);
 if(randomNumber2==1)
 {
     document.querySelector(".img2").setAttribute('src','images/dice1.png');        
 }
 else if(randomNumber2==2)
 {
     document.querySelector(".img2").setAttribute('src','images/dice2.png');
 }
 else if(randomNumber2==3)
 {
     document.querySelector(".img2").setAttribute('src','images/dice3.png');
 }
 else if(randomNumber2==4)
 {
     document.querySelector(".img2").setAttribute('src','images/dice4.png');
 }
 else if(randomNumber2==5)
 {
     document.querySelector(".img2").setAttribute('src','images/dice5.png');
 }
 else if(randomNumber2==6)
 {
     document.querySelector(".img2").setAttribute('src','images/dice6.png');
 }


 //displaying winner
 if(randomNumber1>randomNumber2)
 {
    document.querySelector("h1").textContent="Player 1 Wins!";
 }
 else if(randomNumber1<randomNumber2)
 {
    document.querySelector("h1").textContent="Player 2 Wins!";
 }
 else if(randomNumber1==randomNumber2)
 {
    document.querySelector("h1").textContent="Draw";
 }




//  //optimized code
//  var randomNumber1=Math.floor(Math.random()*6)+1;
//  var imgload="dice" + randomNumber1 + ".png";
//  var imgchange=document.querySelectorAll("img")[0];
//  var img='images/' + imgload;
//  imgchange.setAttribute('src',img);

//  var randomNumber2=Math.floor(Math.random()*6)+1;
//  var imgload="dice" + randomNumber2 + ".png";
//  var imgchange=document.querySelectorAll("img")[1];
//  var img='images/' + imgload;
//  imgchange.setAttribute('src',img);

//   if(randomNumber1>randomNumber2)
//  {
//     document.querySelector("h1").textContent="Player 1 Wins!";
//  }
//  else if(randomNumber1<randomNumber2)
//  {
//     document.querySelector("h1").textContent="Player 2 Wins!";
//  }
//  else if(randomNumber1==randomNumber2)
//  {
//     document.querySelector("h1").textContent="Draw";
//  }