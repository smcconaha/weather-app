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


const axios = require('axios').default;
async function getWeather(apiUrl) {
    try {
      const response = await axios.get(apiUrl);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  getWeather(apiUrl);
  

