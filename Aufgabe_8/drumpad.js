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
});
function playSample(ton) {
    var sound = new Audio("assets/" + ton);
    sound.play();
}
window.addEventListener("load", function () {
    this.document.querySelector("#play").addEventListener("click", tonreihe);
});
function tonreihe() {
    var reihe = ["assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3",];
    var index = 0;
    var interval = setInterval(gedoens, 100);
    function gedoens() {
        var faz = new Audio(reihe[index]);
        faz.play();
        index += 1;
        if (index > 11)
            index = 0;
        console.log(reihe[index]);
    }
}
//# sourceMappingURL=drumpad.js.map