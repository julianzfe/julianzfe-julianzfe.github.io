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
    document.querySelector(".chart").setAttribute("style", 'height:' + ar8 + '%');
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
    document.querySelector(".abso").innerHTML = "1261,5";
    //relative
    console.log(sar8 + prozent);
    document.querySelector(".rela").innerHTML = "4,05%";
    //wachstum%
    console.log(adsa / europa8 * 100 + prozent);
    document.querySelector(".grop").innerHTML = "2,59%";
    //wachstum
    console.log(adsa);
    document.querySelector(".grow").innerHTML = "128,9";
    document.querySelector(".chart").setAttribute("style", 'height:' + sar8 + '%');
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
    document.querySelector(".abso").innerHTML = "4209,3";
    //relative
    console.log(eur8 + prozent);
    document.querySelector(".rela").innerHTML = "13,5%";
    //wachstum%
    console.log(adeu / europa8 * 100 + prozent);
    document.querySelector(".grop").innerHTML = "-15,23%";
    //wachstum
    console.log(adeu);
    document.querySelector(".grow").innerHTML = "-756,39";
    document.querySelector(".chart").setAttribute("style", 'height:' + eur8 + '%');
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
    document.querySelector(".abso").innerHTML = "6035,6";
    //relative
    console.log(usr8 + prozent);
    document.querySelector(".rela").innerHTML = "19,39%";
    //wachstum%
    console.log(adus / nordamerika8 * 100 + prozent);
    document.querySelector(".grop").innerHTML = "-8,55%";
    //wachstum
    console.log(adus);
    document.querySelector(".grow").innerHTML = "-564,79";
    document.querySelector(".chart").setAttribute("style", 'height:' + usr8 + '%');
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
    document.querySelector(".abso").innerHTML = "16274,1";
    //relative
    console.log(asr8 + prozent);
    document.querySelector(".rela").innerHTML = "52,30%";
    //wachstum% 
    console.log(asd / asien8 * 100 + prozent);
    document.querySelector(".grop").innerHTML = "25,62%";
    //wachstum
    console.log(asd);
    document.querySelector(".grow").innerHTML = "3319,39";
    document.querySelector(".chart").setAttribute("style", 'height:' + asr8 + '%');
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
    document.querySelector(".abso").innerHTML = "2100,00";
    //relative
    console.log(ausr8 + prozent);
    document.querySelector(".rela").innerHTML = "6,74%";
    //wachstum%
    console.log(ausd / australien8 * 100 + prozent);
    document.querySelector(".grop").innerHTML = "5,36%";
    //wachstum
    console.log(ausd);
    document.querySelector(".grow").innerHTML = "107";
    document.querySelector(".chart").setAttribute("style", 'height:' + ausr8 + '%');
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener('click', aus);
});
//# sourceMappingURL=emissionen.js.map