const key = await fetch("key.json").then(response=>{
    const json = response.json()
    return json
    
})
const apikey = key.key
const locationInput = document.getElementById("location")
const fetchbutton = document.getElementById("fetchcity")
const weathercondition = document.getElementById("condition")
const weathertemperature = document.getElementById("temperature")
fetchbutton.addEventListener("click", async function(){
    const city = locationInput.value
    if(!city)
    {
        alert("Please Enter Valid City Name")
    }
    else
    {
        const baseurl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`
        const weather = await fetch(baseurl).then(r=>r.json())
        
        if(weather.error)
        {
            alert(weather.error.message)
        }
        else
        {
            weathertemperature.innerHTML = "Current temperature: " + weather.current.temp_c + "&deg;C"
            weathercondition.innerHTML = "Current Sky Condition: " + weather.current.condition.text
        }
    }
})





  