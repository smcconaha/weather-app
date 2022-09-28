// DEFINE VARIABLES
let weatherState = {
  city: '',
  temperature: {
    kelvin: '',
    fahr: '',
    celcius: '',
  },
  condtion: '',
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

// ACCESS WEATHER API
//my API key 575569b4257361f897018503a4e9e153
const apiKey = '575569b4257361f897018503a4e9e153';
let zipCode = 40509;

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;

//ACCESSING API USING AXIOS 
//const axios = require('axios').default; //this is not needed with script tag included in HTML
async function getWeather(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    objectTranslate(response);                
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

  getWeather(apiUrl);

 //FUNCTION that translates received data
function objectTranslate (response) {
  weatherState.city = response.data.name;
  weatherState.temperature.kelvin = response.data.main.temp;
  weatherState.temperature.fahr = weatherState.temperature.kelvin;
  weatherState.temperature.celcius = weatherState.temperature.kelvin;
  weatherState.condtion = response.data.weather[0].description;
  weatherState.otherInfo = response.data.weather[0].icon;
};

//CREATING INIT ELEMENTS
let master = document.getElementById('master');
master.id = 'master';
master.class = 'container';


function INIT () {
  //Callback function creates by rowCol, parentId, qty, text, class, ID
  createRowCol('row', 'master', 1,'', 'header','headRow');
  createRowCol('col', 'headRow', 1,'', 'header','headCol1');
  createRowCol('col', 'headRow', 1,'', 'header','headCol2');
  //Callback function creates by element, parentId, qty, text, class, ID 
  createElements('h1', 'master', 1,'Weather App', 'header', 'headerText');
  createElements('input', 'headCol1', 1,'', 'headerZipEnt', 'input');
  createElements('button', 'headCol2', 1, 'Submit', 'headerZipEnt', 'button');
}
INIT ();

//CREATE ROW and COL function
function createRowCol (rowColNeed, parentId, qty, text, className, idName) {
  for (i = 0; i < qty; i++) {
    let newDiv = document.createElement('div');
    if (idName) {
      newDiv.id = idName;
    }
    if (className) {
      newDiv.className = `${rowColNeed} ${className}`;
    } else {
      newDiv.className = rowColNeed;
    }
    if (text) {
      newDiv.textContent = text;
    }
    document.getElementById(parentId).appendChild(newDiv);
  }
};

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