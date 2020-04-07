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
    // console.log(arr);
    arr.forEach(element => {
        var card = {};
        if(element[0].startsWith('DOUBLE ')){
            card.moveSpaces = 2;
            element[0] = element[0].substring(7,element[0].length);
        } else {
            card.moveSpaces = 1;
        }
        card.color = element[0];
        switch(element[0]){
            case 'PEANUT':
                card.special = 'candy';
                break;
            case 'LOLLIPOP':
                card.special = 'candy';
                break;
            case 'MINT':
                card.special = 'candy';
                break;
            case 'ICECREAM':
                card.special = 'candy';
                break;
            default:
                card.special = 'no';
                break;
        }
        var quantity = element[1];
        while (quantity > 0) {
            shuffledDeck.push(card);
            quantity--;
        };
    });  
    return shuffledDeck;
};

// console.log(shuffle(deck));
module.exports = shuffle(deck);