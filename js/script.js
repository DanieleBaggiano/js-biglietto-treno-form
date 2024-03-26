// INPUT
const trovaBtnElem = document.getElementById ("genera-btn"); // object | null
console.log(trovaBtnElem, typeof trovaBtnElem);

trovaBtnElem.addEventListener("click", function() {
    // console.log("CLICK");   TEST
    // RACCOLTA DATI
    const kmInputElem = document.getElementById("user-km"); // object | null
    console.log(kmInputElem, typeof kmInputElem);

    const kmValue = parseInt(kmInputElem.value); // number
    console.log(kmValue, typeof kmValue);

    const ageInputElem = document.getElementById("user-age"); //object | null
    console.log(ageInputElem, typeof ageInputElem);

    const ageValue = parseInt(ageInputElem.value); // number
    console.log(ageValue, typeof ageValue);
})

