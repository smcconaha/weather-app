# INIT: OBJECT DEFINITION
---
city: 
    type = string
    API object = "data.name"
    description = name of city where weather is being requested, ties to zip code

temperature:
    type = string
    API object = "data.main.temp"
    description = temperature reading of zip code measure in Kelvin

apiKey: 
    type = string
    API object = N/A
    description = API key used for accessing 

condition: 
    type = string
    API object = data.weather.description
    description = descriptor of physical weather

images:
    type = img
    API object = data.weather.icon
    description = image tied to condition

zipCode: 
    type = number
    API object = N/A
    description = zip code used to determin location and pull data from API

---
# How do you define state?
---

Initial state at DOM content load will be the <div> element to include <h1>, <input>, and <button>.  API data will populate additional states by creating the following elements.

---
# FUNCTIONALITY
---

*FUNCTION* -
*ENDFUNCTION* 

*FUNCTION* - createRowCol
*ENDFUNCTION* 

*FUNCTION* - init()
    *FUN* -createRowCol
    create container div
        create row div for header
            create col div
                create button element for zip
            create col div
                create button element for getWeather
*ENDFUNCTION* 

*FUNCTION* - validZip()
    IF validZip does not equal number type
        THEN please enter a valid number AND do not submit request
    ELSE 
        SUBMIT request
*ENDFUNCTION*

*FUNCTION* - createElements()
        create row div for city 
            create col div
        create row div for temperature
            create col div for Kelvin
            create col div for Farenheit
            create col div for Celcius
        create row div for condition
            create col div
        create row div for other info
            create col div for img
*ENDFUNCTION* 

*FUNCTION* - imageSelect
*ENDFUNCTION* 

*FUNCTION* - errorAlert
*ENDFUNCTION* 

*FUNCTION* - clearDom
*ENDFUNCTION* 

*FUNCTION* - buttonClick
*ENDFUNCTION* 

*FUNCTION* - tempConvert
*ENDFUNCTION* 

*FUNCTION* - translateData
    using API data, create new object variables
*ENDFUNCTION* 

---
## START
---

under get, feed in function that separates the pieces of the data out

define the objects as blank
function parseFun (){ object.object = data.weather.temp}


*FUNCTION* - init()
    GET header, zipCode form input, and getWeather button
*ENDFUNCTION*


IF user enters five digit zip code into zipCode form input AND user clicks getWeather button
    THEN *FUNCTION* - validZip
        IF validZip does not equal number type
            THEN please enter a valid number AND do not submit request
        ELSE 
            SUBMIT request
    *ENDFUNCTION*



    
---
## END PROGRAM
---