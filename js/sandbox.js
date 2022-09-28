// ZIP CODE VALID
function validZip (num) {
    if (typeof num !== 'number') {
        console.log('Please enter a valid number');
    } else {
        console.log('Thank you');
    }
};

// ACCESS WEATHER API
//my API key 575569b4257361f897018503a4e9e153
const apiKey = '575569b4257361f897018503a4e9e153';
let zipCode = 40509;

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

//ACCESSING API USING AXIOS 
/*const axios = require('axios').default; //this is not needed with script tag included in HTML
async function getWeather(apiUrl) {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.name);
      console.log(response.data.main.temp);
      console.log(response.data.weather[0].description);
      console.log(response.data.weather[0].icon);                  
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  getWeather(apiUrl);
*/
//CREATING INIT ELEMENTS
let master = document.querySelector('div');
master.setAttribute('id', 'master');
master.setAttribute('class', 'container');
let city = document.createElement('h1');
city.textContent = "Something";
city.setAttribute('id','city');
document.body.appendChild(city);

function INIT () {
  let 
}

function createRow (rowColNeed, num, className, idName) {
  for (i = 0; i <= num; i++) {
    document.createElement('div');
    if (idName) {
      rowColNeed.id = idName;
    }
    if (className) {
      rowColNeed.class = className;
    }
    document.body.appendChild.();
  }
}
  
function createCol () {

}
