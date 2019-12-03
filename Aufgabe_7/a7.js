window.addEventListener("load", function () {
    this.document.querySelector("#button1").addEventListener("click", playSample);
});
function playSample() {
    console.log("klick");
    var sound = new Audio('assets/kick.mp3');
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playSample2("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { playSample2("snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { playSample2("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { playSample2("f.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { playSample2("g.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { playSample2("a.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { playSample2("c.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { playSample2("laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { playSample2("laugh-2.mp3"); });
});
function playSample2(ton) {
    var sound = new Audio("assets/" + ton);
    sound.play();
}
window.addEventListener("load", function () {
    this.document.querySelector("#play").addEventListener("click", tonreihe);
});
function tonreihe() {
    var reihe = ["assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3",];
    var index = 0;
    var interval = setInterval(gedoens, 300);
    function gedoens() {
        var MyMelody = new Audio(reihe[index]);
        MyMelody.play();
        index += 1;
        if (index > 11)
            index = 0;
        console.log(reihe[index]);
    }
}
var list = ["Otto", "Eduard", "Leopold", "von", "Bismarck", "Schönhausen"];
var index = 0;
setInterval(function () {
    console.log(list[index]);
    index++;
}, 1000);
//# sourceMappingURL=a7.js.map