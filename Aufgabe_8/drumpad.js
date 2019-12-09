var reihe = ["assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3",];
var a = false;
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#Record").addEventListener("click", aufnahme);
    document.querySelector("#delete").addEventListener("click", loeschen);
});
function playSample(ton) {
    var sound = new Audio("assets/" + ton);
    sound.play();
    if (a == true) {
        reihe.push(ton);
    }
}
window.addEventListener("load", function () {
    this.document.querySelector("#play").addEventListener("click", tonreihe);
});
function tonreihe() {
    var index = 0;
    var interval = setInterval(gedoens, 100);
    function gedoens() {
        var faz = new Audio(reihe[index]);
        faz.play();
        index += 1;
        if (index > (reihe.length - 1))
            index = 0;
        console.log(reihe[index]);
    }
}
function loeschen() {
    reihe.length = 0;
}
function aufnahme() {
    a = true;
    console.log("This is recording a new Beat");
}
document.querySelector("#delete").addEventListener("click", loeschen);
document.querySelector("#record").addEventListener("click", aufnahme);
//# sourceMappingURL=drumpad.js.map