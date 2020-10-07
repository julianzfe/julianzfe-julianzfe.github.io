
interface Karte {
    farbe: string;      // Farbe der Karte
    zahl: number;    // Wertigkeit der Karte
}

//Variablen und Arrays 
let ukartendeck: Karte[] = []; // ungemischtes Kartendeck
kartengenerieren();
console.log(ukartendeck);

let playerCards: Karte[] = []; // Array der Spielerkarten
let kikarten: Karte[] = []; // Array der Gegnerkarten
let gekarten: Karte[] = []; // Die gespielten Karten

let spkarte: Karte;
console.log(spkarte)
let momspieler: boolean;
let kartegenommen: boolean = false;


window.onload = function () {
    document.getElementById("spielbeginn").addEventListener("click", spielstarten, false); //funktion "spielstarten" wird durch "click" ausgeführt
}

// Karten werden gemischt und im Dom angezeigt
function spielstarten() {
    // Alles aus dem DOM löschen
    loeschen(); //karten werden gelöscht, damit diese bei einem neustart nicht mehr da sind
    kartengenerieren(); // die karten werden generiert und in die arrays gepusht (funktion bei line 271)

    // Mischen
    ukartendeck = shuffle(ukartendeck);

    // Abwechselnd Karten an Spieler und Computer (Gegner) verteilen, bis jeder 6 Karten hat
    let i = 6;
    while (i) {
        playerCards.push(ukartendeck[0]);
        ukartendeck.splice(0, 1);
        kikarten.push(ukartendeck[0]);
        ukartendeck.splice(0, 1);
        i -= 1;
    }
    console.log(ukartendeck); // für problembehandlung in der frühen entwicklungsphase
    console.log(playerCards);// für problembehandlung in der frühen entwicklungsphase
    console.log(kikarten); // für problembehandlung in der frühen entwicklungsphase

    //Spieler-Karten in HTML erzeugen
    updateHtml(playerCards);

    // Computer-Karten in HTML erzeugen
    updateHtml(kikarten);

    // Aktive Karte vom Aufnahmestapel nehmen und in Html erzeugen hier wird eine karte aus dem gemischten kartendeck in die spielkartenvariable gepusht
    gekarten.push(ukartendeck[ukartendeck.length - 1]);
    spkarte = {
        farbe: gekarten[0].farbe,
        zahl: gekarten[0].zahl
    }
    ukartendeck.splice(ukartendeck.length - 1, 1);
    updateHtml(gekarten);

    // Aufnahmestapel in Html erzeugen
    updateHtml(ukartendeck);


    document.getElementById("stack").addEventListener("click", takeCard, false);


    document.getElementById("zug").innerHTML = "Spieler"; // wer ist an der reihe
    momspieler = true;

}

function playThisCard(cardToPlay: Karte, index: number) { 
    if (momspieler) {
        if (cardToPlay.farbe == spkarte.farbe || cardToPlay.zahl == spkarte.zahl) {
            momspieler = false;
            kartegenommen = false;
            gekarten.push(cardToPlay);
            spkarte = cardToPlay;
            playerCards.splice(index, 1);
            updateHtml(playerCards);
            updateHtml(gekarten);

            // Überprüfe ob Spieler noch Karten hat
            if (playerCards.length == 0) {
                document.getElementById("zug").innerHTML = "Du hast gewonnen!";
                loeschen();
            }
            else {
                document.getElementById("zug").innerHTML = "Gegner";
                kartegenommen = false;
                opponent();
            }
        }


    }
}

function takeCard() { //wenn der spieler keine Karte, die er spielen kann, hat muss eine Karte aufgenommen werden
    if (momspieler) {
        if (kartegenommen == false && playableCardsCount() == 0) {


            playerCards.push(ukartendeck[ukartendeck.length - 1]);
            ukartendeck.splice(ukartendeck.length - 1, 1);
            updateHtml(playerCards);
            updateHtml(ukartendeck);
            kartegenommen = true;
            console.log(ukartendeck);


            if (playerCards[playerCards.length - 1].farbe != spkarte.farbe && playerCards[playerCards.length - 1].zahl != spkarte.zahl) {
                momspieler = false;
                document.getElementById("zug").innerHTML = "Gegner";
                kartegenommen = false;
                opponent();
            }
        }
        else if (playableCardsCount() > 0) {
            document.getElementById("zug").innerHTML = "Du musst keine Karte aufnehmen!";
        }
        else if (kartegenommen) {
            document.getElementById("zug").innerHTML = "Du hast schon eine Karte aufgenommen!";
        }
    }
}

function opponent() {
    let couldLay: boolean = false;
    for (let i = 0; i < kikarten.length; i++) {
        // Fall 1: Gegner kann eine Karte legen
        if (kikarten[i].farbe == spkarte.farbe || kikarten[i].zahl == spkarte.zahl) {
            spkarte = kikarten[i];
            gekarten.push(spkarte);
            kikarten.splice(i, 1);
            document.getElementById("zug").innerHTML = "Gegner";
            setTimeout(function () { updateHtml(gekarten); updateHtml(kikarten); }, 1500);
            //der Spieler ist wieder an der Reihe
            setTimeout(function () { document.getElementById("zug").innerHTML = "Spieler"; momspieler = true; }, 1600);
            //setze Signalwort auf true, sodass klar ist, dass eine Karte gelegt werden konnte
            couldLay = true;

            // überprüfe ob Gegner keine Karten mehr hat, also gewonnen hat
            if (kikarten.length == 0) {
                setTimeout(function () { document.getElementById("zug").innerHTML = "verloren"; loeschen() }, 1600);
            }
            break;
        }
    }
    // fall 2: Gegner kann nicht legen, nimmt eine Karte auf und versucht diese abzulegen (Signalwort ist noch auf false)
    if (couldLay == false) {



        kikarten.push(ukartendeck[ukartendeck.length - 1]);
        ukartendeck.splice(ukartendeck.length - 1, 1);
        document.getElementById("zug").innerHTML = "Gegner nimmt eine Karte auf!";
        setTimeout(function () { updateHtml(ukartendeck); updateHtml(kikarten); }, 1600);
        if (kikarten[kikarten.length - 1].farbe == spkarte.farbe || kikarten[kikarten.length - 1].zahl == spkarte.zahl) {
            spkarte = kikarten[kikarten.length - 1];
            gekarten.push(spkarte);

            setTimeout(function () { kikarten.splice(kikarten.length - 1, 1); document.getElementById("zug").innerHTML = "Der Gegner legt eine Karte ab!"; }, 2000);
            setTimeout(function () { updateHtml(kikarten); updateHtml(gekarten); }, 2000);
        }
        // der Spieler ist wieder an der Reihe
        setTimeout(function () { document.getElementById("zug").innerHTML = "Du bist dran!"; momspieler = true; }, 2000);

    }
}
// es wird überprüft ob man eine Karte legen kann 
function playableCardsCount(): number {
    let count: number = 0;

    for (let i = 0; i < playerCards.length; i++) {
        if (playerCards[i].farbe == spkarte.farbe || playerCards[i].zahl == spkarte.zahl) {
            count += 1;
        }
    }
    return count;
}
// die Kommunikation mit HTML (vitaler knotenpunkt) 
function updateHtml(array: Karte[]) {
    let classStr: string = "";
    if (array == playerCards) {
        classStr = "player";
    }
    else if (array == kikarten) {
        classStr = "computer";
    }
    else if (array == ukartendeck) {
        classStr = "stack";
    }
    else if (array == gekarten) {
        classStr = "active";
    }
    clearHtml(classStr);
    if (classStr == "player" || classStr == "active") {

        for (let i = 0; i < array.length; i++) {
            createOpenCardHtml(array, i, classStr);
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            createHiddenCardHtml(array, i, classStr);
        }
    }

}
// die "Hand" des Spielers in Html anzeigen (durch das erstellen von "div", die ihre werte aus den arrays bekommen)  
function createOpenCardHtml(array: Karte[], arrayIndex: number, classString: string) {


    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", classString + " " + "card" + " " + array[arrayIndex].farbe);
    document.getElementById(classString).appendChild(holdingDiv);

    let i = 1;
    while (i) {
        let numberP: HTMLElement = document.createElement("p");
        numberP.innerHTML = "" + array[arrayIndex].zahl;


        if (i == 3) {
            numberP.setAttribute("class", "middle");
        }

        holdingDiv.appendChild(numberP);

        i -= 1;
    }
    if (classString == "player") {
        holdingDiv.addEventListener('click', function () { playThisCard(array[arrayIndex], arrayIndex) }, false);
    }

}

// verdeckte Karte in HTML erstellen
function createHiddenCardHtml(array: Karte[], arrayIndex: number, classString: string) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", classString + " " + "card" + " " + "backside");
    document.getElementById(classString).appendChild(holdingDiv);

    let image: HTMLElement = document.createElement("img");
    image.setAttribute("src", "imgs/ei.jpg");
    holdingDiv.appendChild(image);
}


// mit dieser funktion generiert man die karten 
function kartengenerieren() {
    for (let i = 0; i < 4; i++) {
        let kfarbe: string;
        if (i == 0) { kfarbe = "purple" }
        else if (i == 1) { kfarbe = "blue" }
        else if (i == 2) { kfarbe = "red" }
        else if (i == 3) { kfarbe = "green" }
        for (let j = 0; j <= 9; j++) {
            let newCard: Karte = {
                farbe: kfarbe,
                zahl: j
            }
            ukartendeck.push(newCard);
        }
    }
}
//hier werden alle erstellten Karten aus HTML gelöscht, damit man ein neues spiel beginnen kann 
function loeschen() {
    clearHtml("player");
    clearHtml("computer");
    clearHtml("active");
    clearHtml("stack");
    playerCards = [];
    kikarten = [];
    ukartendeck = [];
    gekarten = [];
    let spkarte: Karte;
    let momspieler: boolean = true;
    let kartegenommen: boolean = false;
}

function clearHtml(classString: string) {
    let myNode: HTMLElement = document.getElementById(classString);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

// Fisher-Yates shuffle Algorithmus
function shuffle(array: Karte[]) {
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}