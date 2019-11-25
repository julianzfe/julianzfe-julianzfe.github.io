//länder
var afrika = 1235.5;
var südamerika = 1261.5;
var europa = 4209.3;
var nordamerika = 6035.6;
var asien = 16274.1;
var australien = 2100;
//länder2008
var afrika8 = 1028;
var südamerika8 = 1132.6;
var europa8 = 4965.7;
var nordamerika8 = 6600.4;
var asien8 = 12954.7;
var australien8 = 1993;
//allgemein
var kg = " kg ";
var gesamt = afrika + südamerika + europa + nordamerika + asien + australien;
var prozent = "%";
//afrika
function af() {
    //vars
    var ad = (afrika - afrika8);
    var ar8 = (afrika / gesamt) * 100;
    //absolute
    console.log(afrika);
    document.querySelector(".abso").innerHTML = "1235,5";
    //relative
    console.log(ar8 + prozent);
    document.querySelector(".rela").innerHTML = "3,97%";
    //wachstum%
    console.log(ad / afrika8 * 100 + prozent);
    document.querySelector(".grop").innerHTML = "20,18%";
    //wachstum
    console.log(ad);
    document.querySelector(".grow").innerHTML = "207,5";
    document.querySelector(".chart").setAttribute('height', '4%');
}
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener('click', af);
});
//südamerika
function sa() {
    //vars
    var adsa = (südamerika - südamerika8);
    var sar8 = (südamerika / gesamt) * 100;
    //absolute
    console.log(südamerika);
    //relative
    console.log(sar8 + prozent);
    //wachstum%
    console.log(adsa / europa8 * 100 + prozent);
    //wachstum
    console.log(adsa);
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener('click', sa);
});
//europa
function eu() {
    //vars
    var adeu = (europa8 - europa);
    var eur8 = (europa / gesamt) * 100;
    //absolute
    console.log(europa);
    //relative
    console.log(eur8 + prozent);
    //wachstum%
    console.log(adeu / europa8 * 100 + prozent);
    //wachstum
    console.log(adeu);
}
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', eu);
});
//nordamerika
function na() {
    //vars
    var adus = (nordamerika8 - nordamerika);
    var usr8 = (nordamerika / gesamt) * 100;
    //absolute
    console.log(nordamerika);
    //relative
    console.log(usr8 + prozent);
    //wachstum%
    console.log(adus / nordamerika8 * 100 + prozent);
    //wachstum
    console.log(adus);
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener('click', na);
});
//asien
function asi() {
    //vars
    var asd = (asien - asien8);
    var asr8 = (asien / gesamt) * 100;
    //absolute
    console.log(asien);
    //relative
    console.log(asr8 + prozent);
    //wachstum%
    console.log(asd / asien8 * 100 + prozent);
    //wachstum
    console.log(asd);
}
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener('click', asi);
});
//australien
function aus() {
    //vars
    var ausd = (australien - australien8);
    var ausr8 = (australien / gesamt) * 100;
    //absolute
    console.log(australien);
    //relative
    console.log(ausr8 + prozent);
    //wachstum%
    console.log(ausd / australien8 * 100 + prozent);
    //wachstum
    console.log(ausd);
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener('click', aus);
});
//# sourceMappingURL=emissionen.js.map