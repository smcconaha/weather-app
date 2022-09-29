// DEFINE VARIABLES
let weatherState = {
  city: '',
  temperature: {
    kelvin: '',
    fahr: '',
    celcius: '',
  },
  condition: '',
  otherInfo:'',
};
// ZIP CODE VALID
function validZip (num) {
  if (typeof num !== 'number') {
    console.log('Please enter a valid number');
  } else {
    console.log('Thank you');
  }
};

//EVENT Listener
function submitRequest () {
  submitBtn.addEventListener ('click', () => {
    const apiKey = '575569b4257361f897018503a4e9e153';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.innerHTML},us&appid=${apiKey}`;
    getWeather(apiUrl);
    createElements('div', 'master', 1,'THIS IS A CLICK TEST', 'row header','headRow');
  });
};
  
  //ACCESSING API USING AXIOS 
  //const axios = require('axios').default; //this is not needed with script tag included in HTML
  async function getWeather(apiUrl) {
    try {
      const response = await axios.get(apiUrl);
      objectTranslate(response.data);                
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
  
  
  //FUNCTION that translates received data
  function objectTranslate (response) {
    weatherState.city = response.name;
    weatherState.temperature.kelvin = Math.round(response.main.temp);
    weatherState.temperature.fahr = Math.round((response.main.temp - 273.15) * 1.8 + 32) + ': F';
    weatherState.temperature.celcius = Math.round((response.main.temp -273.15)
    ) + ': C';
    weatherState.condition = response.weather[0].main;
    weatherState.otherInfo = response.weather[0].icon;
  };
  
  //CREATING INIT ELEMENTS
  let master = document.getElementById('master');
  master.id = 'master';
  master.class = 'container';
  
  
  function INIT () {
    //Callback function creates by element, parentId, qty, text, class, ID 
    createElements('div', 'master', 1,'', 'row header','headRow');
    createElements('div', 'headRow', 1,'', 'col header','headCol1');
    createElements('div', 'headRow', 1,'', 'col header','headCol2');
    createElements('h1', 'headRow', 1,'Weather App', 'header', 'headerText');
    createElements('input', 'headCol1', 1,'', 'headerZipEnt', 'zipInput');
    //inputZip.type = 'numeric';
    //inputZip.maxlength = '5';
    createElements('button', 'headCol2', 1, 'Submit', 'headerZipEnt', 'submitBtn');
    submitBtn = document.getElementById('submitBtn');
    zipInput = document.getElementById('zipInput');
    getWeather(submitBtn, zipInput);
};

window.addEventListener('DOMContentLoaded', (event) => {
  INIT();
});

//CREATE ELEMENTS
function createElements (element, parentId, qty, text, className, idName) {
  for (i = 0; i < qty; i++) {
    let newElement = document.createElement(element);
    if (idName) {
      newElement.id = idName;
    }
    if (className) {
      newElement.className = className;
    }
    if (text) {
      newElement.textContent = text;
    }
    document.getElementById(parentId).appendChild(newElement);
  }
};