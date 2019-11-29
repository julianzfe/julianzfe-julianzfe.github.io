window.addEventListener("load", function () {
    this.document.querySelector("#button").addEventListener("click", playSample);
});
function playSample() {
    console.log("klick");
    var sound = new Audio('assets/kick.mp3');
    sound.play();
}
//# sourceMappingURL=a7.js.map