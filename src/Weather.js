import React, { useState } from 'react';
import './Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog, faCloudShowersHeavy, faSun, faRainbow, faCloud, faMapMarkerAlt, faThermometerHalf, faPooStorm } from '@fortawesome/free-solid-svg-icons'
import DigitalClock from './DigitalClock';
import Morning from './component/img/morning.jpg'
import Noon from './component/img/noon.jpg'
import Evening from './component/img/evening.jpg'
import Night from './component/img/night.jpg'
import Bg from './component/img/Bg.jpg'







function Weather() {


  const apiKey = '1c7d11bdf9eb334af450650d15059075'

  const [city, setCity] = useState([{}])
  const [search, setSearch] = useState("");

  const getWeather = (e) => {
    console.log(e)
    if (e.key === "Enter") {


      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setCity(data)
          setSearch("")
        })
    }
  }

  const Haze = <FontAwesomeIcon icon={faSmog} />

  const clouds = <FontAwesomeIcon icon={faCloud} />

  const rain = <FontAwesomeIcon icon={faCloudShowersHeavy} />

  const rainbow = <FontAwesomeIcon icon={faRainbow} />

  const clear = <FontAwesomeIcon icon={faSun} />

  const location = <FontAwesomeIcon icon={faMapMarkerAlt} />

  const temperature = <FontAwesomeIcon icon={faThermometerHalf} />

  const Thunderstorm = <FontAwesomeIcon icon={faPooStorm} />


  


  function forecast(str) {
    if (str === "Clouds") {
      return (clouds)
    }
    if (str === "Rain") {
      return (rain)
    }
    if (str === "Clear") {
      return (clear)
    }
    if (str === "Haze") {
      return (Haze)
    }
    if (str === "Thunderstorm") {
      return (Thunderstorm)
    }
    else {
      return rainbow
    }
  }


  function sunrise(sec) {


    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();
    return timestr
  }

  function sunriseUK(sec) {


    var date = new Date((sec * 1000) - 3600000);
    var timestr = date.toLocaleTimeString();
    return timestr
  }

  function sunriseUS(sec) {


    var date = new Date((sec * 1000) - 21600000);
    var timestr = date.toLocaleTimeString();
    return timestr
  }

  function sunriseIN(sec) {


    var date = new Date((sec * 1000) + 12600000);
    var timestr = date.toLocaleTimeString();
    return timestr
  }


  function convertWindDir(deg) {
    let compass = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"]
    let index = Math.round((deg % 360) / 22.5)
    return compass[index]
  }


  function timeMachine(time, morning, noon, evening, night) {
    if (time <= 12 && time >= 1) {
      return morning

    }
    if (time >= 12 && time <= 17) {
      return noon
    }
    if (time >= 17 && time <= 20) {
      return evening
    }
    else {
      return night
    }
  }

  function timeOfDay(time) {
    if (time <= 12 && time >= 1) {
      return "Good Morning"

    }
    if (time >= 12 && time <= 17) {
      return "Good Afternoon"
    }
    if (time >= 17 && time <= 20) {
      return "Good Evening"
    }
    else {
      return "Good Night"
    }
  }

  function onlyEurope(a, b, c, d, e) {
    if (a === "US") {
      return d
    }
    if (a === "GB") {
      return c
    }
    if (a === "IN") {
      return e
    }
    if (a === "LK") {
      return e
    }
    if (a === "BE") {
      return b
    }
    if (a === "BG") {
      return b
    }
    if (a === "CZ") {
      return b
    }
    if (a === "DK") {
      return b
    }
    if (a === "DE") {
      return b
    }
    if (a === "EE") {
      return b
    }
    if (a === "IE") {
      return b
    }
    if (a === "EL") {
      return b
    }
    if (a === "ES") {
      return b
    }
    if (a === "FR") {
      return b
    }
    if (a === "HR") {
      return b
    }
    if (a === "IT") {
      return b
    }
    if (a === "CY") {
      return b
    }
    if (a === "LV") {
      return b
    }
    if (a === "LT") {
      return b
    }
    if (a === "LU") {
      return b
    }
    if (a === "HU") {
      return b
    }
    if (a === "MT") {
      return b
    }
    if (a === "NL") {
      return b
    }
    if (a === "AT") {
      return b
    }
    if (a === "PL") {
      return b
    }
    if (a === "PT") {
      return b
    }
    if (a === "RO") {
      return b
    }
    if (a === "SI") {
      return b
    }
    if (a === "SK") {
      return b
    }
    if (a === "FI") {
      return b
    }
    if (a === "SE") {
      return b
    }
    else {
      return null
    }
  }


  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  function CurrentDate(today) {

    return today.toLocaleDateString("en-US", options)
  }



  return (<div className="weather">

    <input className="input" type="search"
      placeholder="Enter City..."
      onChange={(e) => { setSearch(e.target.value) }}
      value={search}
      onKeyPress={getWeather}
    />




    {typeof city.main === "undefined" ? (
      <div className="WeatherContainer">
        <p
          style={{
            color: "red",
            fontSize: "2rem"

          }}>Welcome to weather app! Enter in a city to get the weather report.</p>
        <div className="time">
          <DigitalClock />
          <p>{timeOfDay(new Date().getHours())}</p>
        </div>
        <p>{timeMachine(new Date().getHours(), <img src={Morning} alt="Morning" />, <img src={Noon} alt="Noon" />, <img src={Evening} alt="Evening" />, <img src={Night} alt="Night" />)}</p>
      </div>

    ) : (
        <div  className ="weatherReport">
   

          <p>{location} {city.name}, {(city.sys.country)}</p>



          <div className="temp">
            <strong style={{
              fontSize: "5rem",
              padding: "0 20px"

            }}>{temperature} {Math.round(city.main.temp)}°C</strong>
            {city.weather[0].main}
          </div>

          <section>
          <span>{forecast(city.weather[0].main)}</span>
          <div>
          <h4>{(city.weather[0].description.charAt(0).toUpperCase() + city.weather[0].description.slice(1))}</h4>

          <p>{CurrentDate(new Date())}</p>
          <p>Real Feel: {Math.round(city.main.feels_like)}°C</p>
          <p>Min: {Math.round(city.main.temp_min)}°C | Max: {Math.round(city.main.temp_max)}°C </p>
          </div>
          </section>







          {/* <p> {(city.sys.country)} {sunriseUK((city.sys.sunrise))} </p> */}


          <table className="table">

            <tr className="sunLight">
              <td>Sunrise: {onlyEurope((city.sys.country), sunrise((city.sys.sunrise)), sunriseUK((city.sys.sunrise)), sunriseUS((city.sys.sunrise)), sunriseIN((city.sys.sunrise)))}</td>
              <td>Sunset: {onlyEurope((city.sys.country), sunrise((city.sys.sunset)), sunriseUK((city.sys.sunset)), sunriseUS((city.sys.sunset)), sunriseIN((city.sys.sunset)))}</td>
            </tr>
            <tr className="extraInfo">
              <td>Pressure: {city.main.pressure} hPa</td>
              <td>Humidity: {city.main.humidity} %</td>
            </tr>
            <tr>
              <td>Wind speed: {Math.round((city.wind.speed * 18) / 5)} Km/hr</td>
              <td>Wind Direction: {city.wind.deg}°deg / {convertWindDir(city.wind.deg)}</td>
            </tr>


          </table>

        </div>
      )
    }


    <div className="background">{<img src={Bg} alt="Bg" />}</div>

  </div>
  )
}

export default Weather;
