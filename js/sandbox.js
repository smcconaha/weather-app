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

//EVENT Listener with zip validation
function submitRequest () {
  submitBtn.addEventListener ('click', () => {
    let zipInput = document.getElementById('zipInput');
    if (isNaN(zipInput.value) || zipInput.value.length !== 5) {
      alert('Please input valid zip code');
    } else {
      const apiKey = '575569b4257361f897018503a4e9e153';
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.value},us&appid=${apiKey}`;
      getWeather(apiUrl);
    }
  });
};

//ACCESSING API USING AXIOS 
//const axios = require('axios').default; //this is not needed with script tag included in HTML
async function getWeather(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    //objectTranslate(response.data);
    weatherState.city = response.data.name;
    weatherState.temperature.kelvin = Math.round(response.data.main.temp);
    weatherState.temperature.fahr = Math.round((response.data.main.temp - 273.15) * 1.8 + 32) + ' F';
    weatherState.temperature.celcius = Math.round((response.data.main.temp -273.15)
    ) + ' C';
    weatherState.condition = response.data.weather[0].main;
    weatherState.otherInfo = response.data.weather[0].icon;
    apiPagePop(createElements);              
  } catch (error) {
    console.error(`Response error: ${error}`);
  }
};
  
  
//FUNCTION that translates received data
//function objectTranslate (response) {
//};
  
//CREATING INIT ELEMENTS
let master = document.getElementById('master');
master.id = 'master';
master.className = 'container text-center';
  
  
function INIT () {
  //Callback function creates by element, parentId, qty, text, class, ID 
  createElements('div', 'master', 1,'', 'row header','headRow');
  createElements('div', 'headRow', 1,'Weather App', 'col-12','headColMain');
  createElements('div', 'headRow', 1,'', 'col-4 offset-2','headCol1');
  createElements('div', 'headRow', 1,'', 'col-4 offset-2','headCol2');
  createElements('input', 'headCol1', 1,'', 'headerZipEnt', 'zipInput');
  //inputZip.type = 'numeric';
  //inputZip.maxlength = '5';
  createElements('button', 'headCol2', 1, 'Submit', 'headerZipEnt', 'submitBtn');
  submitBtn = document.getElementById('submitBtn');
  zipInput = document.getElementById('zipInput');
  submitRequest(submitBtn, zipInput);
};

function apiPagePop (createElements) {
  createElements('div', 'master', 1,'', 'row  border border-success p-4','cityRow');
  createElements('div', 'cityRow', 1,'City', 'col-12 bg-warning p-1','cityCol');
  createElements('p', 'cityRow', 1, weatherState.city, 'col-12','city');  
  createElements('div', 'master', 1,'', 'row border border-success p-4','tempRow');
  createElements('div', 'tempRow', 1,'Temperature', 'col-12 bg-warning p-1','tempHead');  
  createElements('div', 'tempRow', 1,'', 'col-4','kelvinCol');
  createElements('p', 'kelvinCol', 1, weatherState.temperature.kelvin, 'col body','kelvin'); 
  createElements('div', 'tempRow', 1,'', 'col-4','fahrCol');
  createElements('p', 'fahrCol', 1, weatherState.temperature.fahr, 'col body','fahr');
  createElements('div', 'tempRow', 1,'', 'col-4','celciusCol');   
  createElements('p', 'celciusCol', 1, weatherState.temperature.celcius, 'col body','celcius');
  createElements('div', 'master', 1,'', 'row border border-success p-4','condiRow');
  createElements('div', 'condiRow', 1,'Condition', 'col-12 bg-warning p-1','condiHead');
  createElements('div', 'condiRow', 1,'', 'col-12','condiCol');
  createElements('p', 'condiCol', 1, weatherState.condition, 'col body','condition');
  //createElements('div', 'master', 1,'', 'row border border-success p-4','imgRow');
  //createElements('div', 'imgRow', 1,'Other Info', 'col-12 bg-warning p-1','imgCol');
  createElements('div', 'master', 1,'', 'card','imgHead');
  imgHead = document.getElementById('imgHead');
  imgHead.style = "width: 18rem";
  createElements('img', 'imgHead', 1,'', 'card-img-top','imgSrc');
  imgSrc = document.getElementById('imgSrc');
  imgSrc.src = `https://openweathermap.org/img/wn/${weatherState.otherInfo}@2x.png`;
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