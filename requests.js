// const getPuzzle = (callback)=>{
    
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e)=>{
   
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             callback(undefined, data.puzzle);
//         }else if (e.target.readyState === 4){
//             callback((new Error('faled to fetch data')), undefined);
//             //console.log("there has been an error");
//         }
//     })

//     request.open('GET','https://puzzle.mead.io/puzzle');
//     request.send();
// }
//Get Puzzle Promise
// const getPuzzle = ()=> new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e)=>{
   
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             //console.log(data.puzzle.toLowerCase());
//             resolve(data.puzzle);
            
//         }else if (e.target.readyState === 4){
//             reject((new Error('faled to fetch data')));
//             //callback((new Error('faled to fetch data')), undefined);
//             //console.log("there has been an error");
//         }
//     })

//     request.open('GET','https://puzzle.mead.io/puzzle');
//     request.send();
// })
//
const getPuzzle = ()=>{
    return fetch('https://puzzle.mead.io/puzzle',{}).then((response)=>{
        if (response.status === 200) {
            return response.json()
        }else{
            throw new Error('failed to fetch data');
        }
    }).then((data)=>{
        return data.puzzle;
    });
}
const countriesURL = 'http://api.countrylayer.com/v2/all?access_key=c054e39030e6b475de636b1bc5b95e18';
//
const fetchCountryDetails = (countryCode) => fetch(countriesURL, {}).then((response)=>{
    if (response.status === 200) {
        return response.json();
    }else{
        throw new Error('failed to fetch country data');
    }
}).then((countries)=>{
    const targetCountry = countries.find((elem)=>elem.alpha2Code === countryCode);
    if (targetCountry) {
        return targetCountry
    }else{
        throw new Error(`No country for code ${countryCode}`);
    }
})

const ipInfoUrl = "https://ipinfo.io/json?token=78f45cc8afb918";
const getLocation = ()=>fetch(ipInfoUrl).then((response)=>{
    if (response.status === 200){
        return response.json()
    }else{
        throw new Error('failed to fetch IP data');
    }
})

//
// const getCountryDetails =(countryCode)=> new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {

//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const countries = JSON.parse(e.target.responseText);
//         const targetCountry = countries.find((elem)=>elem.alpha2Code === countryCode);
//         if (targetCountry) {
//             resolve(targetCountry);
//         }else{
//             reject((new Error("no country with this code")));
//         }
        
//         //console.log(countries[0]);
//     } else if (e.target.readyState === 4) {
//         reject((new Error("failed to get country")));
//     }
//     })

//     request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=c054e39030e6b475de636b1bc5b95e18');
//     //access_key=c054e39030e6b475de636b1bc5b95e18
//     //request.setRequestHeader('access_key','c054e39030e6b475de636b1bc5b95e18');
//     request.send();
// })

// const getCountryDetails = (countryCode, callback)=> {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {

//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const countries = JSON.parse(e.target.responseText);
//         const targetCountry = countries.find((elem)=>elem.alpha2Code === countryCode);
//         if (targetCountry) {
//             callback(undefined, targetCountry);
//         }else{
//             callback((new Error("no country with this code")), undefined);
//         }
        
//         //console.log(countries[0]);
//     } else if (e.target.readyState === 4) {
//         callback((new Error("failed to get country")), undefined);
//     }
//     })

//     request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=c054e39030e6b475de636b1bc5b95e18');
//     //access_key=c054e39030e6b475de636b1bc5b95e18
//     //request.setRequestHeader('access_key','c054e39030e6b475de636b1bc5b95e18');
//     request.send();
// }