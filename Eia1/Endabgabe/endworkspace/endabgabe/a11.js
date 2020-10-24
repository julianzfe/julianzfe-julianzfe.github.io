window.addEventListener('load', function () {
    // Deklarierung der Arrays für die Kartenstapel
    var deck = []; // ungemischter Kartenstapel
    var spielerKarten = []; // Array der Spielerkarten
    var gegnerKarten = []; // Array der Gegnerkarten
    var ablageStapel = []; // Array der gespielten Karten
    // Deklarierung von Hilfsvariablen
    var spielKarte; // aktive Karte
    var spielerAktiv; // Spieler aktiv?
    var bereitsGezogen; // Karte bereits gezogen?
    // wäre reudundant, wird in spielen ausgeführt
    kartenStapelGenerieren();
    console.log(deck);
    // Spiel beginnen, nach Button klick
    document.querySelector("#start").addEventListener("click", spielen);
    /*
     * "Init- bzw. Main-Methode"
     * Spiel beginnen
     * alle Karten mischen und Spielfeld erzeugen
     */
    function spielen() {
        spielZurueckSetzen(); // Das Spiel zurücksetzen
        kartenStapelGenerieren(); // (Neuen) Kartenstapel erzeugen
        deck = kartenMischen(deck); // Karten mischen
        kartenGeben(); // zu Spiel beginn erhält jeder Spieler 5 Karten
        kartenAnzeigen(spielerKarten); // HTML updaten und Spieler-Karten erzeugen
        kartenAnzeigen(gegnerKarten); // HTML updaten und Gegner-Karten erzeugen
        spielKarteHerunternehmen(); // Aktive Spiel-Karte vom Aufnahmestapel nehmen
        kartenAnzeigen(ablageStapel); // HTML updaten und Ablagestapel anzeigen
        kartenAnzeigen(deck); // HTML updaten und Deck anzeigen
        document.getElementById("deck").addEventListener("click", karteZiehen, false);
        document.getElementById("status").innerHTML = "Du darfst anfangen!"; // In currentMove Html Section beschreiben, wer als Nächstes an der Reihe ist/Was zu tun ist
        spielerAktiv = true;
    }
    /*
     * Kommunikation mit HTML
     * Funktionen der Anzeige von Karten für die HTML-GUI
     */
    function kartenAnzeigen(array) {
        var klasse = "";
        if (array == spielerKarten) {
            klasse = "spielerkartenfeld";
        }
        else if (array == gegnerKarten) {
            klasse = "gegnerkartenfeld";
        }
        else if (array == deck) {
            klasse = "deck";
        }
        else if (array == ablageStapel) {
            klasse = "spielkarte";
        }
        htmlZurueckSetzen(klasse); // HTML updaten und Stapel löschen
        if (klasse == "momspieler" || klasse == "spielerkartenfeld") {
            for (var i = 0; i < array.length; i++) {
                erstelleSichtbareKarte(array, i, klasse);
            }
        }
        else {
            for (var i = 0; i < array.length; i++) {
                erstelleVerdeckteKarte(array, i, klasse);
            }
        }
    }
    function erstelleSichtbareKarte(array, arrayIndex, klasse) {
        var einfuegeDiv = knotenErstellen(klasse, array[arrayIndex].farbe);
        var i = 5;
        while (i) {
            var nummerP = document.createElement("p");
            nummerP.innerHTML = "" + array[arrayIndex].zahl;
            if (i == 5) {
                nummerP.setAttribute("class", "zahl");
            }
            einfuegeDiv.appendChild(nummerP);
            i -= 1;
        }
        if (klasse == "spielkarte") {
            einfuegeDiv.addEventListener('click', function () { karteLegen(array[arrayIndex], arrayIndex); }, false);
        }
    }
    function erstelleVerdeckteKarte(array, arrayIndex, klasse) {
        var einfuegeDiv = knotenErstellen(klasse, "backside");
        var image = document.createElement("div");
        image.setAttribute("class", ".verdeckt");
        einfuegeDiv.appendChild(image);
    }
    function htmlZurueckSetzen(klasse) {
        var htmlKnoten = document.getElementById(klasse);
        while (htmlKnoten.firstChild) {
            htmlKnoten.removeChild(htmlKnoten.firstChild);
        }
    }
    function knotenErstellen(klasse, farbe) {
        var einfuegeDiv = document.createElement("div");
        einfuegeDiv.setAttribute("class", klasse + " " + "karte" + " " + farbe);
        document.getElementById(klasse).appendChild(einfuegeDiv);
        return einfuegeDiv;
    }
    /*
     * Funktionen zur Spielsteuerung
     */
    function spielZurueckSetzen() {
        // HTML "säubern"
        htmlZurueckSetzen("spielerkartenfeld");
        htmlZurueckSetzen("gegnerkartenfeld");
        htmlZurueckSetzen("deck");
        htmlZurueckSetzen("spielkarte");
        // Variablen "säubern"
        spielerKarten = [];
        gegnerKarten = [];
        deck = [];
        ablageStapel = [];
    }
    function kartenStapelGenerieren() {
        for (var i = 0; i < 4; i++) {
            var farbe;
            if (i == 0) {
                farbe = "pink";
            }
            else if (i == 1) {
                farbe = "rot";
            }
            else if (i == 2) {
                farbe = "gelb";
            }
            else if (i == 3) {
                farbe = "blau";
            }
            for (var x = 0; x <= 9; x++) {
                var neueKarte = {
                    farbe: farbe, zahl: x
                };
                deck.push(neueKarte);
            }
        }
    }
    function kartenGeben(anzahl) {
        while (anzahl) {
            spielerKarten.push(deck[0]);
            deck.splice(0, 1);
            gegnerKarten.push(deck[0]);
            deck.splice(0, 1);
            anzahl -= 1;
        }
    }
    // Anwendung des Fisher-Yates-Shuffle-Algorithmus
    function kartenMischen(array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    function kartenNeuMischen() {
        document.getElementById("status").innerHTML = "Der Ablagestapel ist leer und wird aus den gespielten Karten neu zusammengemischt!";
        ablageStapel.splice(ablageStapel.length - 1, 1);
        deck = kartenMischen(ablageStapel);
        ablageStapel = [spielKarte];
        kartenAnzeigen(deck);
        kartenAnzeigen(ablageStapel);
    }
    function spielKarteHerunternehmen() {
        ablageStapel.push(deck[deck.length - 1]);
        spielKarte = {
            zahl: ablageStapel[0].zahl,
            farbe: ablageStapel[0].farbe
        };
        deck.splice(deck.length - 1, 1);
    }
    function zaehleSpielbareKarten() {
        var zaehler = 0;
        for (var i = 0; i < spielerKarten.length; i++) {
            if (validiereKarte(spielerKarten[i], spielKarte)) {
                zaehler += 1;
            }
        }
        return zaehler;
    }
    function karteLegen(zuSpielendeKarte, index) {
        if (spielerAktiv) {
            if (validiereKarte(zuSpielendeKarte, spielKarte)) {
                spielerAktiv = false;
                bereitsGezogen = false;
                ablageStapel.push(zuSpielendeKarte);
                spielKarte = zuSpielendeKarte;
                spielerKarten.splice(index, 1);
                kartenAnzeigen(spielerKarten);
                kartenAnzeigen(ablageStapel);
                if (spielerKarten.length == 0) {
                    document.getElementById("status").innerHTML = "Du hast gewonnen!";
                    spielZurueckSetzen();
                }
                else {
                    document.getElementById("status").innerHTML = "Dein Gegner ist an der Reihe!";
                    gegnerZug();
                    bereitsGezogen = false;
                }
            }
            else {
                window.alert("Die Karte passt nicht! Spiel eine andere oder nimm eine neue Karte auf.");
            }
        }
    }
    function karteZiehen() {
        if (spielerAktiv) {
            if (bereitsGezogen == false && zaehleSpielbareKarten() == 0) {
                // Bei leerem Aufnahmestapel neu mischen
                if (deck.length == 0) {
                    kartenNeuMischen();
                }
                spielerKarten.push(deck[deck.length - 1]);
                deck.splice(deck.length - 1, 1);
                kartenAnzeigen(spielerKarten);
                kartenAnzeigen(deck);
                bereitsGezogen = true;
                if (spielerKarten[spielerKarten.length - 1].farbe != spielKarte.farbe && spielerKarten[spielerKarten.length - 1].zahl != spielKarte.zahl) {
                    document.getElementById("status").innerHTML = "Dein Gegner ist an der Reihe!";
                    gegnerZug();
                    spielerAktiv = false;
                    bereitsGezogen = false;
                }
            }
            else if (zaehleSpielbareKarten() > 0) {
                document.getElementById("status").innerHTML = "Du musst keine Karte aufnehmen!";
            }
            else if (bereitsGezogen) {
                document.getElementById("status").innerHTML = "Du hast schon eine Karte aufgenommen!";
            }
        }
    }
    function gegnerZug() {
        var spielbar = false;
        for (var i = 0; i < gegnerKarten.length; i++) {
            // Fall 1: Gegner kann eine Karte legen
            if (validiereKarte(gegnerKarten[i], spielKarte)) {
                spielKarte = gegnerKarten[i];
                ablageStapel.push(spielKarte);
                gegnerKarten.splice(i, 1);
                document.getElementById("status").innerHTML = "Der Gegner legt eine Karte ab!";
                setTimeout(function () {
                    kartenAnzeigen(deck);
                    kartenAnzeigen(gegnerKarten);
                }, 1500);
                // Dann ist der Spieler wieder an der Reihe
                setTimeout(function () {
                    document.getElementById("status").innerHTML = "Du bist dran!";
                    spielerAktiv = true;
                }, 1600);
                //setze Signalwort auf true, sodass klar ist, dass eine Karte gelegt werden konnte
                spielbar = true;
                // Überprüfe ob Gegner keine Karten mehr hat, also gewonnen hat
                if (gegnerKarten.length == 0) {
                    setTimeout(function () {
                        document.getElementById("status").innerHTML = "Du hast verloren!";
                        spielZurueckSetzen();
                    }, 1600);
                }
                break;
            }
        }
        // Fall 2: Gegner kann nicht legen, nimmt eine Karte auf und versucht diese abzulegen (Signalwort ist noch auf false)
        if (spielbar == false) {
            if (deck.length == 0) {
                kartenNeuMischen();
            }
            gegnerKarten.push(deck[deck.length - 1]);
            deck.splice(deck.length - 1, 1);
            document.getElementById("status").innerHTML = "Gegner nimmt eine Karte auf!";
            setTimeout(function () {
                kartenAnzeigen(deck);
                kartenAnzeigen(gegnerKarten);
            }, 1600);
            if (validiereKarte(gegnerKarten[gegnerKarten.length - 1], spielKarte)) {
                spielKarte = gegnerKarten[gegnerKarten.length - 1];
                ablageStapel.push(spielKarte);
                setTimeout(function () {
                    gegnerKarten.splice(gegnerKarten.length - 1, 1);
                    document.getElementById("status").innerHTML = "Der Gegner legt eine Karte ab!";
                }, 2000);
                setTimeout(function () {
                    kartenAnzeigen(gegnerKarten);
                    kartenAnzeigen(ablageStapel);
                }, 2000);
            }
            // Dann ist der Spieler wieder an der Reihe
            setTimeout(function () {
                document.getElementById("status").innerHTML = "Du bist dran!";
                spielerAktiv = true;
            }, 2000);
        }
    }
    function validiereKarte(karte1, karte2) {
        if (karte1.farbe == karte2.farbe || karte1.zahl == karte2.zahl) {
            return true;
        }
        return false;
    }
});
//# sourceMappingURL=a11.js.map