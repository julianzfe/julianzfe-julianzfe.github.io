var reihe = ["kick.mp3", "snare.mp3", "kick.mp3"];
var a = false;
var index = 0;
var sound;
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
    document.querySelector("#play").addEventListener("mousedown", StartBeat);
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
function StartBeat() {
    var index = 0;
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
        sound = setInterval(gedoens, 300);
        a = false;
        console.log("an");
    }
    else {
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(sound);
        console.log("aus");
    }
}
function gedoens() {
    playSample(reihe[index]);
    index += 1;
    if (index > (reihe.length - 1))
        index = 0;
    console.log(reihe[index]);
}
function loeschen() {
    reihe.length = 0;
}
function aufnahme() {
    a = true;
    console.log("Aufnahme");
}
document.querySelector("#delete").addEventListener("click", loeschen);
document.querySelector("#record").addEventListener("click", aufnahme);
//# sourceMappingURL=drumpad.js.map