import axios from 'axios';
//stappenplan voor countries part 2!
// 1.  Dependencies installeren voordat je begint met het schrijven van de code
// 2.  Je gaat dan een async functie schrijven (async / await)
// 3.  Je plaatst dit dan in een try catch constructie
// 4.  Het request zelf (endpoint, type)
//          -  dit is bijvoorbeeld de GET naar
//          -  Voor vlag, naam en currency kijk je naar all GET https://restcountries.com/v2/name/peru//
//          -  je maakt hier een functie voor
// 5.  Je checkt het dan met een console.log
// 6.  Je zet in je HTML een form
// 7.  Je zet een input er in
// 7.   keyup event listener die moet je halen uit target.value
//          -   Log en check dit dan vervolgens zodat je weet wat erin staat
// 8.   Je maakt dan een event listener die luistert naar een enter of klik (pagina moet niet refreshen = default)
// 9.   Maak hier een if else statement die je koppeld aan je API
// 10. Probeer het op de pagina te krijgen (index html container maken en die naar javascript halen)
// 11.  Ga nu bezig met stylen


async function getCountryInfo (name){
    const containerResult = document.getElementById("results")

    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);

        console.log(result.data);
        const countries = result.data[0];

        containerResult.innerHTML = `
        <img src="${countries.flag}" width="200px">
        <h3> ${countries.name}</h3>
        <p>${countries.name} is situated in ${countries.subregion} and has a population of ${countries.population}</p>
        <p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)} </p>
        `

    } catch (e) {
        console.error(e)
    }
}
getCountryInfo()

function getCurrencies (currencies){

    if (currencies.length === 2) {
    return `and you can pay with ${currencies[0].name} and ${currencies[1].name}`
    } else {
        return `you can pay with ${currencies[0].name}`
    }
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', searchCountries)

function searchCountries (e){
    e.preventDefault()

    const inputField = document.getElementById('country-field')

    getCountryInfo(inputField.value)
}