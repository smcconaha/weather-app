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
  
//CREATING INIT ELEMENTS
let master = document.getElementById('master');
master.id = 'master';
master.className = 'container text-center';
  
  
function INIT () {
  //Callback function creates by element, parentId, qty, text, class, ID 
  createElements('div', 'master', 1,'', 'card','headCard');
  createElements('h5', 'headCard', 1,'Weather App', 'card-title','headCardMain');
  createElements('div', 'master', 1,'', 'input-group mb-3', 'inputGroup');
  createElements('span', 'inputGroup', 1,'Zip Code Entry', 'input-group-text', '');
  createElements('input', 'inputGroup', 1,'', 'form-control', 'zipInput');
  createElements('button', 'headCard', 1, 'Submit', 'btn btn-info', 'submitBtn');
  submitBtn = document.getElementById('submitBtn');
  zipInput = document.getElementById('zipInput');
  zipInput.setAttribute('aria-label', 'With textarea');
  submitRequest(submitBtn, zipInput);
};


function apiPagePop (createElements) {
  createElements('div', 'master', 1,'', 'card border-dark mb-3','cityCard');
  cityCard = document.getElementById('cityCard');
  cityCard.style = 'max-width: 60rem;';
  createElements('div', 'cityCard', 1,'', 'card-header bg-warning','cityHeader');
  document.getElementById('cityHeader');
  cityHeader = document.getElementById('cityHeader');
  cityHeader.textContent = 'City';
  createElements('div', 'cityCard', 1,'', 'card-title','cityTitle');  
  createElements('p', 'cityTitle', 1, weatherState.city, 'card-text','city');  
  
  createElements('div', 'master', 1,'', 'row border border-success p-4','tempRow');
  createElements('div', 'tempRow', 1,'Temperature', 'col-12 bg-warning p-1','tempHead');  
  createElements('div', 'tempRow', 1,'', 'col-4','kelvinCol');
  createElements('p', 'kelvinCol', 1, weatherState.temperature.kelvin, 'col body','kelvin'); 
  createElements('div', 'tempRow', 1,'', 'col-4','fahrCol');
  createElements('p', 'fahrCol', 1, weatherState.temperature.fahr, 'col body','fahr');
  createElements('div', 'tempRow', 1,'', 'col-4','celciusCol');   
  createElements('p', 'celciusCol', 1, weatherState.temperature.celcius, 'col body','celcius');
  

  
  createElements('div', 'master', 1,'', 'card border-dark mb-3','condiCard');
  condiCard = document.getElementById('condiCard');
  condiCard.style = 'max-width: 60rem;';
  createElements('div', 'condiCard', 1,'', 'card-header bg-warning','condiHeader');
  document.getElementById('condiHeader');
  cityHeader = document.getElementById('condiHeader');
  cityHeader.textContent = 'Condition';
  createElements('div', 'condiCard', 1,'', 'card-title','condiTitle');  
  createElements('p', 'condiTitle', 1, weatherState.condition, 'card-text','condition');    
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