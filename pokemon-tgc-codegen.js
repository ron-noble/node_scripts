var numberOfCodes = process.argv[2]

if(numberOfCodes == null || ""){
    numberOfCodes = 1;
}

var code = new Array("2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

for (j = 0; j < numberOfCodes; j++) {
    getCode();
}

function getCode(){
    var RndCode = "";
    for (i = 0; i < 3; i++) {
        var z = Math.floor(Math.random() * 32);
        RndCode = RndCode + code[z];
    }
    RndCode = RndCode + "-";
    for (i = 0; i < 4; i++) {
        var z = Math.floor(Math.random() * 32);
        RndCode = RndCode + code[z];
    }
    RndCode = RndCode + "-";
    for (i = 0; i < 3; i++) {
        var z = Math.floor(Math.random() * 32);
        RndCode = RndCode + code[z];
    }
    RndCode = RndCode + "-";
    for (i = 0; i < 3; i++) {
        var z = Math.floor(Math.random() * 32);
        RndCode = RndCode + code[z];
    }

    console.log(RndCode);
}