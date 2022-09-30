window.addEventListener('DOMContentLoaded', (event) => {
    INIT();
});

//Creating init variables 
let master = document.getElementById('master');
master.id = 'master';
master.className = 'container text-center';
    
function INIT () {
//Callback function creates by element, parentId, qty, text, class, ID 
    createElements('div', 'master', 1,'', 'card','headCard');
    createElements('h5', 'headCard', 1,'Weather App', 'card-title','headCardMain');
    createElements('div', 'master', 1,'', 'input-group mb-3', 'inputGroup');
    createElements('span', 'inputGroup', 1,'Zip Code Entry', 'input-group-text', '');
    createElements('button', 'headCard', 1, 'Submit', 'btn btn-info', 'submitBtn');
    createElements('button', 'headCard', 1, 'Clear Contents', 'btn btn-danger', 'clearBtn');
    createElements('input', 'inputGroup', 1,'', 'form-control', 'zipInput');
    submitBtn = document.getElementById('submitBtn');
    clearBtn = document.getElementById('clearBtn');   
    zipInput = document.getElementById('zipInput');
    zipInput.setAttribute('aria-label', 'With textarea');
    clearRequest(clearBtn);
    submitRequest(submitBtn, zipInput);
};

// Define Variables
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
  
//Event Listener with zip validation
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

//Clear content event listener
function clearRequest () {
    clearBtn.addEventListener ('click', () => {
        while (master.firstChild) {
            master.firstChild.remove()
        };
        INIT();
    });
};


  
//Translating API data into object state
async function getWeather(apiUrl) {
    try {
      const response = await axios.get(apiUrl);
      weatherState.city = response.data.name;
      weatherState.temperature.kelvin = Math.round(response.data.main.temp) + ' K';
      weatherState.temperature.fahr = Math.round((response.data.main.temp - 273.15) * 1.8 + 32) + ' F';
      weatherState.temperature.celcius = Math.round((response.data.main.temp -273.15)
      ) + ' C';
      weatherState.condition = response.data.weather[0].main;
      weatherState.otherInfo = response.data.weather[0].icon;
      apiPagePop(createElements);              
    } catch (error) {
      alert(`Please try again- ${error}`);
    }
};
   
//Create elements
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

//Creates elements following API call, called in translate API data section
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
    createElements('div', 'master', 1,'', 'card border-dark mb-3','tempCard');
    tempCard = document.getElementById('tempCard');
    tempCard.style = 'max-width: 60rem;';
    createElements('div', 'tempCard', 1,'', 'card-header bg-warning','tempHeader');
    document.getElementById('tempHeader');
    tempHeader = document.getElementById('tempHeader');
    tempHeader.textContent = 'Temperature';
    createElements('div', 'tempHeader', 1,'', 'card-group','tempCardGroup');
    createElements('div', 'tempCardGroup', 1,'', 'card','cardOne');
    createElements('div', 'cardOne', 1,'', 'card-body','cardOneBody');
    createElements('h5', 'cardOneBody', 1,'', 'card-title','cardOneTitle');
    createElements('p', 'cardOneBody', 1, weatherState.temperature.kelvin, 'card-title','cardOneText');
    createElements('div', 'tempCardGroup', 1,'', 'card','cardTwo');
    createElements('div', 'cardTwo', 1,'', 'card-body','cardTwoBody');
    createElements('h5', 'cardTwoBody', 1,'', 'card-title','cardTwoTitle');
    createElements('p', 'cardTwoBody', 1, weatherState.temperature.fahr, 'card-title','cardTwoText');
    createElements('div', 'tempCardGroup', 1,'', 'card','cardThree');
    createElements('div', 'cardThree', 1,'', 'card-body','cardThreeBody');
    createElements('h5', 'cardThreeBody', 1,'', 'card-title','cardThreeTitle');
    createElements('p', 'cardThreeBody', 1, weatherState.temperature.celcius, 'card-title','cardThreeText');
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
    createElements('img', 'imgHead', 1,'', 'rounded mx-auto justify-content-center align-items-center','imgSrc');
    imgSrc = document.getElementById('imgSrc');
    imgSrc.src = `https://openweathermap.org/img/wn/${weatherState.otherInfo}@2x.png`;
};
  

  

