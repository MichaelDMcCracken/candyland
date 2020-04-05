const FULL_DECK = require('./assets/cards');
var BOARD = require('./assets/board');
var PLAYERS = require('./assets/players');
var CARDS = [...FULL_DECK];
// console.log(FULL_DECK);

var numberOfPlayers = 4;
PLAYERS.splice(numberOfPlayers, 4 - numberOfPlayers);

var firstPlace = {"name": "", "location": 0};

function play(){
    console.log(draw());
    while(firstPlace.location < 83){
    var p = 0;
        while(p < 4){
            PLAYERS[p].location = moveTo(PLAYERS[p],draw()); //move the current player based on the card drawn
            console.log(PLAYERS[p]);
            p++;
        }
        firstPlace.location = 84;
    }
};

function moveTo(currentPlayer,drawnCard){
    var nextSpace = 0;
    


    console.log(currentPlayer,drawnCard, BOARD);
    return nextSpace; //have to calculate the space they go to
};


function draw(){
    var cardOnTop = Math.round(Math.random() * (CARDS.length - 1));
    var drawnCard = CARDS[cardOnTop];
    CARDS.splice(cardOnTop,1);
    // console.log(CARDS.length, cardOnTop, drawnCard);
    if(CARDS.length == 0){
        CARDS = [...FULL_DECK]; //reset the deck
        console.log("Ran out of cards. Shuffling the deck!");
    };
    return drawnCard;
};

play();