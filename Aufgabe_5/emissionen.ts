var test:string = "hallo";
var welt:string = "welt";

var zahl:number = 90;
var zahl2:number=100;

console.log(zahl2*zahl);

var zahl:number = 20;
var zahl1:number = 200;
var ergebnis:number = (zahl/zahl1)*100;
var prozent:string = "%";
console.log(ergebnis+ " %");

var Emissionen :string ="Emissionen";
var der:string ="der";
var Welt:string ="Welt:";
console.log(Emissionen+der+Welt);


var space:string =" ";
var afrika:number = 1235.5;
var südamerika:number = 1261.5;
var europa:number = 4209.3;
var nordamerika:number = 6035.6;
var asien:number = 16274.1;
var australien:number = 2100;

var afrika8:number = 1028;
var südamerika8:number = 1132.6;
var europa8:number = 4965.7;
var nordamerika8:number = 6600.4;
var asien8:number = 12954.7;
var australien8:number = 1993;

console.log(afrika+südamerika+europa+nordamerika+asien+australien);

var ds:string ="das sind ";
var dw:string=" der gesamten Emissionen ";
var kg:string =" kg ";
var gesamt:number = afrika+südamerika+europa+nordamerika+asien+australien;
var mehr:string =" mehr als 2008 ";
var de:string =" die Emissionen ";
var oder:string =" oder ";
var weniger:string =" weniger als 2008 ";


var af8:string ="die Emissionen Afrikas liegen bei ";

console.log(af8 + afrika + kg)
var gesamt:number = afrika+südamerika+europa+nordamerika+asien+australien;
var ar8:number = (afrika/gesamt)*100;
var prozent:string = "%"; 
console.log(ds + ar8+prozent + dw);

var ad:number = (afrika-afrika8);
console.log(ds + ad+kg + oder + ad / afrika8 *100 +prozent + mehr );

console.log(space);

var sa8:string ="die Emissionen Südamerikas liegen bei ";

console.log(sa8 + südamerika + kg);
var sar8:number = (südamerika/gesamt)*100;
var prozent:string = "%"; 
console.log(ds + sar8+prozent + dw);

var adsa:number = (südamerika-südamerika8)
console.log(ds + adsa+kg + oder + adsa / südamerika8 *100 +prozent + mehr )

console.log(space);

var eu8:string ="die Emissionen Europas liegen bei ";

console.log(eu8 + europa + kg);
var eur8:number = (europa/gesamt)*100;
var prozent:string = "%"; 
console.log(ds + eur8+prozent + dw);

var adeu:number = (europa8-europa)
console.log(ds + adeu+kg + oder + adeu / europa8 *100 +prozent + weniger )

console.log(space);

var us8:string ="die Emissionen Nordamerikas liegen bei ";

console.log(us8 + nordamerika + kg)
var usr8:number = (nordamerika/gesamt)*100;
var prozent:string = "%"; 
console.log(ds + usr8+prozent + dw);

var adus:number = (nordamerika8-nordamerika);
console.log(ds + adus+kg + oder + adus / nordamerika8 *100 +prozent + weniger );

console.log(space);

var as8:string ="die Emissionen Asiens liegen bei ";

console.log(as8 + asien + kg);
var asr8:number = (asien/gesamt)*100;
var prozent:string = "%"; 
console.log(ds + asr8+prozent + dw);

var asd:number = (asien-asien8);
console.log(ds + asd+kg + oder + asd / asien8 *100 +prozent + mehr );

console.log(space);

var aus8:string ="die Emissionen Australiens liegen bei ";

console.log(aus8 + australien + kg);
var ausr8:number = (australien/gesamt)*100;
var prozent:string = "%"; 
console.log(ds + ausr8+prozent + dw);

var ausd:number = (australien-australien8);
console.log(ds + ausd+kg + oder + ausd /australien8 *100 +prozent + mehr );



