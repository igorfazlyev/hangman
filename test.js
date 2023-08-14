const fetchCountry = document.querySelector("#fetch");
const results = document.querySelector('#results');
const resultElement = document.querySelector('#country');
const countryCode = document.querySelector('#countryCode');
const ipLocation = document.querySelector('#ip-location');

const renderResults = (resultString)=>{
    resultElement.textContent = '';
    resultElement.textContent = resultString;
    //results.appendChild(resultElement);
}
const renderLocation = (locationData)=>{
  ipLocation.textContent ='';
  ipLocation.textContent = locationData;
}
fetchCountry.addEventListener('click', (e)=>{
   //console.log("Event works");
   
   
   if (countryCode.value === ''){
    resultElement.textContent = 'No country code provided';
   }else{
      fetchCountryDetails(countryCode.value.trim()).then((country)=>{
        console.log(country);
        renderResults(`The country is ${country.name}, the capital is ${country.capital}`);
      }).catch((err)=>{
        renderResults(`${err}`);
      });
   }
})
// getLocation().then((location)=>{
//   return fetchCountryDetails(location.country);
// }).then((countryDetails)=>{
//   renderLocation(`You're accessing the page from ${countryDetails.name}(${countryDetails.alpha2Code})`);
// }).catch((err)=>{
//   renderLocation(err);
// })



