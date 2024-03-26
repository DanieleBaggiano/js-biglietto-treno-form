// INPUT
const trovaBtnElem = document.getElementById("genera-btn"); // object | null
console.log(trovaBtnElem, typeof trovaBtnElem);

trovaBtnElem.addEventListener("click", function () {
    // console.log("CLICK");   TEST
    // RACCOLTA DATI
    //chilometri
    const kmInputElem = document.getElementById("user-km"); // object | null
    console.log(kmInputElem, typeof kmInputElem);

    const kmValue = parseInt(kmInputElem.value); // number
    console.log(kmValue, typeof kmValue);

    // age
    const ageInputElem = document.getElementById("user-age"); //object | null
    console.log(ageInputElem, typeof ageInputElem);

    const ageValue = parseInt(ageInputElem.value); // number
    console.log(ageValue, typeof ageValue);

    // result
    // const resultElem = document.getElementById("result"); // object | null
    // console.log(resultElem, typeof resultElem)

    // const resultValue = parseInt(resultElem.value); // number
    // console.log(resultValue, typeof resultValue);

    // PARTE LOGICA
    const prezzoAlKm = 0.21;

    let prezzoBase = kmValue * prezzoAlKm; //  number
    console.log(prezzoBase, typeof prezzoBase);

    let sconto = 0

    if (ageValue < 18) {
        sconto = 20;
        console.log("Sconto in %", sconto);
        const scontoTotale = prezzoBase * sconto / 100;
        console.log("sconto in €", scontoTotale);
        const prezzoFinale = prezzoBase - scontoTotale;
        console.log("prezzo finale", prezzoFinale);
        document.getElementById("result").innerHTML = `${prezzoFinale.toFixed(2)}`;
    } else if (ageValue > 65) {
        sconto = 40;
        console.log("Sconto in %", sconto);
        const scontoTotale = prezzoBase * sconto / 100;
        console.log("sconto in €", scontoTotale);
        const prezzoFinale = prezzoBase - scontoTotale;
        console.log("prezzo finale", prezzoFinale);
        document.getElementById("result").innerHTML = `${prezzoFinale.toFixed(2)}`;
    } else {
        const prezzoFinale = prezzoBase;
        console.log("prezzo finale", prezzoFinale);
        document.getElementById("result").innerHTML = `${prezzoFinale.toFixed(2)}`;
    }

    // OUTPUT
    if (isNaN(kmValue) === false && isNaN(ageValue) === false && kmValue > 0 && ageValue > 0) {

    } else {
        alert("Dati errati!");
    }
})

