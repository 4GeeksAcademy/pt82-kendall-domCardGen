import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let cardSuit = [
    { symbol: '♥', class: 'heart red' },
    { symbol: '♦', class: 'diamond red' },
    { symbol: '♠', class: 'spade black' },
    { symbol: '♣', class: 'club black' }
  ];

  let randomCardValue = cardValue[Math.floor(Math.random() * cardValue.length)];
  let randomCardSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];

  let suit = document.querySelectorAll(".suit");
  let centerNum = document.getElementById('centerNum')

  suit.forEach(suit => {
    suit.textContent = randomCardSuit.symbol;
  });

  centerNum.textContent = randomCardValue;

  let card = document.querySelector(".card")

  card.className = "card col-3" + randomCardSuit.class;


  console.log(`Your card is.. ${randomCardValue} of ${randomCardSuit.symbol}'s!`);
};
