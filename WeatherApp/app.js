const apikey = "301902d2c63f535d6362c9aa6877e3fc";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".searchbox input");
const searchbtn = document.querySelector(".searchbox button");
const weathericon = document.querySelector(".weathericon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.body.style.backgroundImage = "url(hq720.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    } else {
        try {
            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

            if (data.main.temp >= 38) {
                document.body.style.backgroundImage = "url(31468409.jpg)";
            } else if (data.main.temp <= 15) {
                document.body.style.backgroundImage = "url(49354365.jpg)";
            } else if (data.main.temp > 15 && data.main.temp < 20) {
                document.body.style.backgroundImage = "url(888.jpg)";
            } else if (data.main.temp >= 20 && data.main.temp <= 26) {
                document.body.style.backgroundImage = "url(50383622.jpg)";
            } else if (data.main.temp > 26 && data.main.temp < 30) {
                document.body.style.backgroundImage = "url(999.jpg)";
            } else {
                document.body.style.backgroundImage = "url(666.jpg)";
            }

            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";

            if (data.weather[0].main == "Clouds") {
                weathericon.src = "cloud.png";
            } else if (data.weather[0].main == "Rain") {
                weathericon.src = "rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weathericon.src = "drizzle.png";
            } else if (data.weather[0].main == "Clear") {
                weathericon.src = "clear.png";
            } else if (data.weather[0].main == "Mist") {
                weathericon.src = "mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        } catch (error) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.body.style.backgroundImage = "url(hq720.jpg)";
            document.body.style.backgroundSize ="cover";
            document.body.style.backgroundRepeat = "no-repeat";
        }
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
searchbox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkweather(searchbox.value);
    }
});