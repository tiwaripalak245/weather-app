let form = document.querySelector('form')
let button = document.querySelector('button')
let input = document.querySelector('input')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h4 = document.querySelector('h4')
let img = document.querySelector('img')
let card = document.querySelector('.card')
let body = document.querySelector('body')

const getWeather = async (e) => {
    e.preventDefault();
   try {
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=fb4f29414fc94afe8ce83516231912&q=${input.value}&aqi=yes
    `)
    const data = await response.json();

    const value = data.current.temp_c;
    const icon = data.current.condition.icon;
    const feel = data.current.condition.text;
    const cityName = data.location.name;

h1.innerText = value + "°c"
h2.innerText =cityName;
    img.setAttribute('src', icon)
   h4.innerText = feel; 

body.style.backgroundImage = `url(https://source.unsplash.com/random/?city,night${feel})`
body.style.backgroundSize = `cover`;


   } catch (error) {
    window.alert("Enter valid city name")
   }



   form.reset()

}

form.addEventListener("submit", getWeather)