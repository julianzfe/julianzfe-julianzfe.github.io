window.addEventListener("load", function () {
    this.document.querySelector("#button").addEventListener("click", playSample);
});
function playSample() {
    console.log("klick");
    var sound = new Audio('assets/kick.mp3');
    sound.play();
}
var sound = new Audio('');
sound.play();
window.addEventListener('load', function () {
    document.querySelector(".button").addEventListener('click', play);
});
//# sourceMappingURL=a7.js.map