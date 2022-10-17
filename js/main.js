const result = document.querySelector('.result');
const img = document.querySelector('.img');

img.addEventListener('click', startGame);

//function to start the game
function startGame() {
    //first random number generation
   let randomDice = Math.floor(Math.random() * 6) + 1;
   const firstRandomImg = 'img/' + 'dice' +randomDice+ '.png';
   img.setAttribute('src', firstRandomImg);
   img.classList.toggle('animation');

   //second random number generation
   const secondImg = document.querySelector('.second-img');
   let secondRandomDice = Math.floor(Math.random() * 6) + 1;
   const secondRandomImg = `img/dice${secondRandomDice}.png`;
   secondImg.classList.toggle('animation');
   secondImg.setAttribute('src', secondRandomImg);

  if(randomDice > secondRandomDice) {
    result.innerHTML = 'PLAYER 1 IS THE WINNER🏆';
  } else if(randomDice < secondRandomDice) {
      result.innerHTML = ' YOU LOSE🤦‍♀️';
  } else if(randomDice == secondRandomDice) {
      result.innerHTML = '🏆IT\'S A DRAW GAME🏆';
  }
}


