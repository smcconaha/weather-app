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

//.addEventListener


// ACCESS WEATHER API
const apiKey = '575569b4257361f897018503a4e9e153';
let zipCode = 40509;


let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;

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

getWeather(apiUrl);

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
  //Callback function creates by rowCol, parentId, qty, text, class, ID
  createRowCol('row', 'master', 1,'', 'header','headRow');
  createRowCol('col', 'headRow', 1,'', 'header','headCol1');
  createRowCol('col', 'headRow', 1,'', 'header','headCol2');
  //Callback function creates by element, parentId, qty, text, class, ID 
  createElements('h1', 'master', 1,'Weather App', 'header', 'headerText');
  let inputZip = createElements('input', 'headCol1', 1,'', 'headerZipEnt', 'input');
  //inputZip.type = 'numeric';
  //inputZip.maxlength = '5';
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