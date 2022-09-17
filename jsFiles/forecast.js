

let getCity = async (City) =>{
    const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    const apiKey = 'vpKvBzk0T4w7A1KKm6pzphTLKlJrUecO';
    const query = `?apikey=${apiKey}&q=${City}`;

    let response = await fetch(base+query);
    let data = await response.json();

    return data[0];
}

let getWeather = async (cityKey) =>{
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const apiKey = `vpKvBzk0T4w7A1KKm6pzphTLKlJrUecO`;
    const query = `?apikey=${apiKey}`;
    
    let response = await fetch(base+cityKey+query);
    let data = await response.json();

    return data;
}

getWeather('329260').then(cityWeather => console.log(cityWeather))


