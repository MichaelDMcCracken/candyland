var spaces = {
    "START": [0],
    "RED": [1, 7, 13, 19, 26, 32, 39, 45, 52, 58, 64, 71, 77, 83],
    "PURPLE": [2, 8, 14, 20, 27, 34, 40, 46, 53, 59, 65, 72, 78, 83],
    "YELLOW": [3, 9, 15, 22, 28, 35, 41, 47, 54, 60, 66, 73, 79, 83],
    "BLUE": [4, 10, 16, 23, 29, 36, 42, 48, 55, 61, 68, 74, 80, 83],
    "ORANGE": [5, 11, 17, 24, 30, 37, 43, 49, 56, 62, 69, 75, 81, 83],
    "GREEN": [6, 12, 18, 25, 31, 38, 44, 51, 57, 63, 70, 76, 82, 83],
    "MINT": [21],
    "PEANUT": [33],
    "LOLLIPOP": [50],
    "ICECREAM": [67]
};

var specials = {
    "licorice": [27, 54], //lose a turn
    "shortcut": [[18, 25], [4, 36]] //shortcut to the next space in the array
};

function setUpBoard(spaces){
    var arr = Object.entries(spaces);
    var BOARD = [];
    var i = 0;
    while(i < 84){
        arr.forEach(element => {
            if (element[1].includes(i)){
                var obj = {};
                obj.location = i;
                obj.color = element[0];
                obj.special = isItSpecial(i);
                BOARD.push(obj);
            };            
        });
        i++;
    };
    console.log(BOARD);   
};

function isItSpecial(i) {
    var shortcuts = specials.shortcut;
    var ret = "no"; 
    var obj = {};
    if (specials.licorice.includes(i)){
        return "licorice";
    };
    shortcuts.forEach(el => {
        if(el[0] === i){
            obj.type = "shortcut";
            obj.moveTo = el[1];
            ret = obj;
        }
    });
    return ret;
};

setUpBoard(spaces);