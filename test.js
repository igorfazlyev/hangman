const fetchCountry = document.querySelector("#fetch");
const results = document.querySelector('#results');
const resultElement = document.querySelector('#country');
const countryCode = document.querySelector('#countryCode');

const renderResults = (resultString)=>{
    resultElement.textContent = '';
    resultElement.textContent = resultString;
    //results.appendChild(resultElement);
}
fetchCountry.addEventListener('click', (e)=>{
   //console.log("Event works");
   
   
   if (countryCode.value === ''){
    resultElement.textContent = 'No country code provided';
   }else{
      // getCountryDetails(countryCode.value.trim(), (error, country)=>{
      //   resultElement.textContent = '';
      //   if (error) {
      //     resultElement.textContent = error;
      //   }else{
      //     //console.log(country);
      //     resultElement.textContent = `The country is ${country.name}, the capital is ${country.capital}`;
      //   };
      //   results.appendChild(resultElement);
      // })
      //Promises rework below
      
      getCountryDetails(countryCode.value.trim()).then((country)=>{
        console.log(country);
        renderResults(`The country is ${country.name}, the capital is ${country.capital}`);
        
      }, (err)=>{
        renderResults(`${err}`);
      })
   }
})



