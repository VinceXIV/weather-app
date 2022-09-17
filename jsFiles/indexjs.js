
let cityItem = document.querySelector('form');
let dayNight = document.querySelector('.day-night');
let icon = document.querySelector('.icon');
let weatherCondition = document.querySelector('.weather-condition');


cityItem.addEventListener('submit', e=>{

    e.preventDefault();
    const cityName = e.target.city.value.trim();

    getCity(cityName)
    .then(cityInfo =>{console.log(cityInfo)});
})


