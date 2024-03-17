const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');

async function getweather(city)
{
    var res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bcd237d073e609ec6f384ec198d2d3d0&units=metric`);
    if(res.status ==404)
    {
        document.querySelector('.error').style.display="block";
    }else{
        document.querySelector('.error').style.display="none";
    }
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML=data.name ;
    document.querySelector('.humidityP').innerHTML=Math.round(data.main.humidity) + "%";
    document.querySelector('.windS').innerHTML=Math.round(data.wind.speed) +"km/h";

    if (data.weather[0].main == "Clouds") {
        image.src = "clouds.jpeg";
    } else if (data.weather[0].main == "Clear") {
        image.src = "Clear.jpeg";
    } else if (data.weather[0].main == "Rain") {
        image.src = "rain.jpeg";
    } else if (data.weather[0].main == "Drizzle") {
        image.src = "drizzle.jpeg";
    } else if (data.weather[0].main == "Mist") {
        image.src = "mist.jpeg";
    }
}
searchBtn.addEventListener('click',() =>{
    getweather(searchInput.value);

})
getweather();