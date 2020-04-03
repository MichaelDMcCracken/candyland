var deck = {
    "YELLOW": 4,
    "DOUBLE YELLOW": 3,
    "PURPLE": 3,
    "DOUBLE PURPLE": 3,
    "BLUE": 4,
    "DOUBLE BLUE": 3,
    "GREEN": 4,
    "DOUBLE GREEN": 3,
    "ORANGE": 4,
    "DOUBLE ORANGE": 3,
    "RED": 3,
    "DOUBLE RED": 3,
    "PEANUT": 1,
    "LOLLIPOP": 1,
    "MINT": 1,
    "ICECREAM": 1
};

// console.log(Object.entries(deck));

function shuffle(deck){
    var arr = Object.entries(deck);
    var shuffledDeck = [];
    arr.forEach(element => {
        var color = element[0];
        var quantity = element[1];
        while (quantity > 0) {
            shuffledDeck.push(color);
            quantity--;
        };
        // console.log(shuffledDeck);
    });  
    return shuffledDeck;
};

module.exports = shuffle(deck);



