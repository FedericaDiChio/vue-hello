/* 
TRACCIA:
Descrizione:
Inizializzare Vue e stampare a schermo un messaggio all’interno di un h1, 
utilizzando le properietà di Vue presenti in data.
*/

//Facciamo un controllo con il console.log
console.log("Test:", Vue);

//Inizializziamo Vue
const root = new Vue ({
    // colleghiamo con l'id nell'html;
    // in Data assegniamo un messaggio e un'immagine; 
    el: "#root",
    data: {
        message: "Hello World!",
        image: "./img/hotfuzz.jpg"
    }
});
