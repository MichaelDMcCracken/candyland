const FULL_DECK = require('./assets/cards');
var BOARD = require('./assets/board');
var PLAYERS = require('./assets/players');
var CARDS = [...FULL_DECK];
// console.log(FULL_DECK);
// console.log(BOARD);
var numberOfPlayers = 4;
PLAYERS.splice(numberOfPlayers, 4 - numberOfPlayers);

var firstPlace = {"name": "", "location": 0};

function play(){
    while(firstPlace.location < 83){
    var p = 0;
        while(p < 4){
            var drawnCard = draw();
            PLAYERS[p].location = moveTo(PLAYERS[p],drawnCard); //move the current player based on the card drawn
            console.log(PLAYERS[p],drawnCard);
            // PLAYERS[p].history.push(PLAYERS.location);
            if (PLAYERS[p].location > firstPlace.location) {
                firstPlace.location = PLAYERS[p].location;
                firstPlace.name = PLAYERS[p].name;
            }
            p++;            
        }
    }
    console.log("Winner: ", firstPlace)
};

function moveTo(currentPlayer,drawnCard){
    var nextSpace = currentPlayer.location;
    if (drawnCard.special == 'candy') {
        nextSpace = 0;                  //sometimes, candy slots are behind the player
        console.log('candy!');
    }
    while (drawnCard.color != BOARD[nextSpace].color){
        nextSpace++;
    };

    if(drawnCard.moveSpaces == 2){
        nextSpace++;
        while (drawnCard.color != BOARD[nextSpace].color) {
            nextSpace++;
        };
    };

    if(BOARD[nextSpace].special.type == 'shortcut'){
        console.log("shortcut!!");
        nextSpace = BOARD[nextSpace].special.moveTo;
    };

    // console.log(drawnCard);
    return nextSpace; //have to calculate the space they go to
};


function draw(){
    var cardOnTop = Math.round(Math.random() * (CARDS.length - 1));
    var drawnCard = CARDS[cardOnTop];
    CARDS.splice(cardOnTop,1);
    if(CARDS.length == 0){
        CARDS = [...FULL_DECK]; //reset the deck
        console.log("Ran out of cards. Shuffling the deck!");
    };
    return drawnCard;
};

play();