// MILESTONE 0

let array = [
    {
        fullName: "Tizio Caio 1",
        role: "Developer",
        image: "./img/assets/angela-caroll-chief-editor.jpg"
        
    },
    {
        fullName: "Tizio Caio 2",
        role: "Developer",
        image: "./img/assets/angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 3",
        role: "Developer",
        image: "./img/assets/angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 4",
        role: "Developer",
        image: "./img/assets/angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 5",
        role: "Developer",
        image: "./img/assets/angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Tizio Caio 6",
        role: "Developer",
        image: "./img/assets/angela-caroll-chief-editor.jpg"
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

// Prendiamo l'elemento HTML contenente le card
let cardContainer = document.getElementById("cardContainer")
createCards(cardContainer, array)

/**
 * Dato un elemento HTML aggiunge, sottoforma di figli, n card, dove n
 * è la lunghezza di arrayOfObject.
 */
function createCards(cardContainer, arrayOfObject) {
    for (let i = 0; i < arrayOfObject.length; i++) {
        cardContainer.innerHTML += `
        <!-- CARD ${i} -->
        <div class="col col-sm-6 col-md-6 col-lg-4">
            <div class="card text-center">
                <img src="${arrayOfObject[i].image}" class="card-img-top" alt="cabine-image">
                <div class="card-body">
                    <h5 class="card-title">${arrayOfObject[i].fullName}</h5>
                    <h6 class="card-text">${arrayOfObject[i].role}</h6>
                </div>
            </div>
        </div>
        `
    }
}

