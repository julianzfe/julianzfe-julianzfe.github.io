
//länder
var afrika:number = 1235.5;
var südamerika:number = 1261.5;
var europa:number = 4209.3;
var nordamerika:number = 6035.6;
var asien:number = 16274.1;
var australien:number = 2100;
//länder2008
var afrika8:number = 1028;
var südamerika8:number = 1132.6;
var europa8:number = 4965.7;
var nordamerika8:number = 6600.4;
var asien8:number = 12954.7;
var australien8:number = 1993;
//allgemein
var kg:string =" kg ";
var gesamt:number = afrika+südamerika+europa+nordamerika+asien+australien;
var prozent:string = "%"; 

//afrika

function af()
{
//vars
var ad:number = (afrika-afrika8);
var ar8:number = (afrika/gesamt)*100;


//absolute
console.log(afrika);
//relative
console.log(ar8+prozent);
//wachstum%
console.log(ad /afrika8 *100 +prozent)
//wachstum
console.log(ad)
}

//südamerika

function sa()
{
//vars
var adsa:number = (südamerika-südamerika8)
var sar8:number = (südamerika/gesamt)*100;


//absolute
console.log(südamerika);
//relative
console.log(sar8+prozent);
//wachstum%
console.log(adsa /europa8 *100 +prozent)
//wachstum
console.log(adsa)
}

//europa

function eu()
{
//vars
var adeu:number = (europa8-europa);
var eur8:number = (europa/gesamt)*100;


//absolute
console.log(europa);
//relative
console.log(eur8+prozent);
//wachstum%
console.log(adeu /europa8 *100 +prozent)
//wachstum
console.log(adeu)
}

//nordamerika

function na()
{
//vars
var adus:number = (nordamerika8-nordamerika);
var usr8:number = (nordamerika/gesamt)*100;


//absolute
console.log(nordamerika);
//relative
console.log(usr8+prozent);
//wachstum%
console.log(adus /nordamerika8 *100 +prozent)
//wachstum
console.log(adus)
}

//asien

function asi()
{
//vars
var asd:number = (asien-asien8);
var asr8:number = (asien/gesamt)*100;


//absolute
console.log(asien);
//relative
console.log(asr8+prozent);
//wachstum%
console.log(asd /asien8 *100 +prozent)
//wachstum
console.log(asd)
}

//australien

function aus()
{
//vars
var ausd:number = (australien-australien8);
var ausr8:number = (australien/gesamt)*100;


//absolute
console.log(australien);
//relative
console.log(ausr8+prozent);
//wachstum%
console.log(ausd /australien8 *100 +prozent)
//wachstum
console.log(ausd)
}