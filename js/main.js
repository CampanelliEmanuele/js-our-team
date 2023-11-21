// MILESTONE 0

let array = [
    {
        fullName: "Tizio Caio 1",
        role: "Developer",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 2",
        role: "Developer",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 3",
        role: "Developer",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 4",
        role: "Developer",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 5",
        role: "Developer",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 6",
        role: "Developer",
        image: "angela-caroll-chief-editor.jpg"
    }
];


// MILESTONE 1

// Dato un array di oggetti, stampiamo i campi di ogni oggetto.
function printArrayObjects(arrayOfObject) {
    for (let key in arrayOfObject) {
        console.log(key)
    }
}

// MILESTONE 2

/**
 * Dato un elemento HTML aggiunge, sottoforma di figli, n card, dove n
 * è la lunghezza di arrayOfObject.
 */
function createCards(htmlElement, arrayOfObject) {
    for (let i = 0; i < arrayOfObject.length; i++) {
        let p = document.createElement("p")
        p.innerHTML += arrayOfObject[i].fullName
        htmlElement.appendChild(p)
    }
}

// Prendiamo l'elemento HTML contenente le card
let cardContainer = document.getElementById("cardContainer")
createCards(cardContainer, array)
