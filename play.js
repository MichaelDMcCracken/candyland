const FULL_DECK = require('./assets/cards');
var BOARD = require('./assets/board');
var PLAYERS = require('./assets/players');
var CARDS = [...FULL_DECK];
console.log(FULL_DECK);

var numberOfPlayers = 4;
PLAYERS.splice(numberOfPlayers, 4 - numberOfPlayers);

var firstPlace = {"name": "", "location": 0};

// function play(){
//     while(firstPlace.location < 83){
//     }
// };

// function move(){

// };


function draw(numberOfCards){
    var cardOnTop = Math.round(Math.random() * (CARDS.length - 1));
    var drawnCard = CARDS[cardOnTop];
    CARDS.splice(cardOnTop,1);
    console.log(CARDS.length, cardOnTop, drawnCard);
    if(CARDS.length == 0){
        CARDS = [...FULL_DECK]; //reset the deck
        console.log(FULL_DECK);
        console.log("Ran out of cards. Shuffling the deck!");
    };
};

function drawSomeCards(num){
    for(i = 0; i < num; i++){
        draw(CARDS.length);
    }
}

drawSomeCards(52);