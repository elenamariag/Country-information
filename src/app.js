import axios from 'axios';

// 1. Wij hebben de dependency axios nodig
// 2. Importeren van Axios in JavaScript
// 3. Async functie schrijven
// 4. Aanroepen van API binnen de functie
// 5. Try and Catch binnen de functie zetten
// 6. Data van de API aanroepen per onderdeel (bv. Result.name)
// 7. Data toevoegen via innerHTML aan element
// 8. Resultaat van de functie loggen

// 9. Map door de array van result heen
// 10. Voeg dit toe in het nieuw gemaakt element

async function getCountries (){
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data);
        console.log(result.data[0]);

        result.data.sort((a,b) => {
            return a.population - b.population;
        })

        getAllCountries(result.data)

    } catch (e) {
        console.error(e)
    }
}
getCountries()

function getAllCountries (countries) {

    const countryUnorderedList = document.getElementById('country-names')

    countries.map((allCountries) => {

        const countryList = document.createElement('li')

        countryList.innerHTML = `
        <h3 class="${northernRegion(allCountries.region)}"> ${allCountries.name}</h3>
        <img src="${allCountries.flag}" class="flag"/>
        <p>Has a population of: ${allCountries.population} people</p>`

        countryUnorderedList.appendChild(countryList);

    })
}

// 1. Maak een nieuwe functie die een parameter verwacht
// 2. Maak een if-statement
// 3. Vergelijk of de parameter gelijk is aan een bepaalde region
// 4. als dit zo is, return dan een  bepaalde kleur als string

function northernRegion (continent){
    if (continent === "Africa"){
        return "blue";
    } else if (continent === "Europe"){
        return "yellow";
    } else if (continent === "Americas"){
        return "green";
    } else if (continent === "Oceania"){
        return "purple";
    } else {
        return "red";
    }
}

