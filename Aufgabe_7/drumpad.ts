window.addEventListener("load",function(){
    this.document.querySelector("#button1").addEventListener("click",playSample);

});
function playSample(){
    console.log("klick");
    var sound:HTMLAudioElement = new Audio('assets/kick.mp3');
sound.play();

}




window.addEventListener("load", function () {
    document.querySelector ("#button1") .addEventListener ("mousedown", function () { playSample2 ("kick.mp3");    });

    document.querySelector ("#button2") .addEventListener ("mousedown", function () { playSample2 ("snare.mp3");   });

    document.querySelector ("#button3") .addEventListener ("mousedown", function () { playSample2 ("hihat.mp3");   });

    document.querySelector ("#button4") .addEventListener ("mousedown", function () { playSample2 ("fn.mp3");       });

    document.querySelector ("#button5") .addEventListener ("mousedown", function () { playSample2 ("gn.mp3");       });

    document.querySelector ("#button6") .addEventListener ("mousedown", function () { playSample2 ("an.mp3");       });

    document.querySelector ("#button7") .addEventListener ("mousedown", function () { playSample2 ("cn.mp3");       });

    document.querySelector ("#button8") .addEventListener ("mousedown", function () { playSample2 ("laugh-1.mp3"); });
    
    document.querySelector ("#button9") .addEventListener ("mousedown", function () { playSample2 ("laugh-2.mp3"); });

});

function playSample2(ton) {
    var sound = new Audio("assets/" + ton);
sound.play();
}




window.addEventListener("load",function(){
    this.document.querySelector("#play").addEventListener("click",tonreihe);

});

function tonreihe () {

var reihe= ["assets/kick.mp3","assets/kick.mp3","assets/kick.mp3","assets/kick.mp3","assets/kick.mp3","assets/kick.mp3","assets/kick.mp3","assets/snare.mp3","assets/kick.mp3",     ];
var index:number = 0;
var interval = setInterval(gedoens,100)

    function gedoens(){
        
        var faz:HTMLAudioElement = new Audio(reihe [index]);
        faz.play();
        index += 1;
        if (index>11) index=0;
        console.log(reihe [index]);
        

    }

}









var list:string[] = ["Otto","Eduard","Leopold","von","Bismarck","Schönhausen"]
var index:number = 0;
setInterval(function(){
        console.log( list [index]);
        index++;
}, 1000)











