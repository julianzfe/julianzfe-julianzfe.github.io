window.addEventListener("load", Begrueßungfunkt);
var gruß;
var ueingabe = prompt("как тебя зовут");
function Begrueßungfunkt() {
    if (ueingabe == "") {
        gruß = "Почему ты ломаешься ??";
    }
    else {
        gruß = "Здравствуйте " + ueingabe + "! как дела ?";
    }
    document.getElementById("demo").innerHTML = gruß;
}
//# sourceMappingURL=gruß.js.map