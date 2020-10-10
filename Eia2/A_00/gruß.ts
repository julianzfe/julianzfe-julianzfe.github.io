window.addEventListener("load", Begrueßungfunkt);

var gruß: string;
var ueingabe: string = prompt("как тебя зовут");

function Begrueßungfunkt(): void 

{

     
    if (ueingabe == "") 
     {
        gruß = "Почему ты ломаешься ??";
    }
     else 
     {
        gruß = "Здравствуйте " + ueingabe + "! как дела ?";
    }
    document.getElementById("demo").innerHTML = gruß;
}