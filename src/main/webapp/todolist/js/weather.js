const API_KEY = "2d6f3161e5a8c2a07c2300a3b1f272b8";
const weathers = document.querySelector("#weather");
function onGeoOK(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
   console.log(url);
   fetch(url)
        .then(response => response.json()).
        then(data => {
            const weather = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:nth-child(3)");
            const weatherIcon = document.querySelector("#weather img");
            const weatherIconCode = data.weather[0].icon;
            weatherIcon.id ="icons";
            weather.id ="font";
            city.id ="font";
			weatherIcon.src = `./img/icons/${weatherIconCode}.png`;
            weather.innerText = `${Math.round(data.main.temp - 273.15)}°  /  `;
            city.innerText = data.name;
            
			
   });
}

function onGeoError() {
    //alert("HTTP에서는 날씨를 확인할 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
