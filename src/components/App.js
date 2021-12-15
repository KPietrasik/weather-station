import React from 'react';

import earth from './earth.png';
import './App.css';

import StationList from './StationList'
import Form from './Form';
import Result from './Result';



const API = 'https://jsonplaceholder.typicode.com/users'
const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5'
class App extends React.Component {

  state = {
    stations: [],
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleDislpaysWeatherStations = () => {
    fetch(API)
    .then(response => {

      if(response.ok) {
        return response;
      }
      throw Error(response.status)
    })
    .then(response => response.json())

    .then(data => {
      const station = data;

      this.setState(prevState => {
        return { stations: prevState.stations.concat(station) }}

     )

    })
      .catch(error => alert(error + "  coś nie poszło po Twojej myśli"))

  };


  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState(state => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: state.value,
          }));
        })
        .catch(err => {
          console.log(err);
          this.setState(prevState => ({
            err: true,
            city: prevState.value
          }))
        });

    };

  };

  render () {
    const stations = this.state.stations;

    return (
      <div className="App">
        <header className="App-header">
          <img src={earth} className="App-logo" alt="logo" />
          <h1>App Weather</h1>
        </header>
        <div className="container">
          <div className="sidebar">
          <button className="button"onClick = {this.handleDislpaysWeatherStations}>Wyświetl dostępne stacje pogodowe</button>
          <ul>
            {stations.length > 0 ? <StationList stations={stations}/> : null}
          </ul>
          </div>
          <div className="rightbar">
          <Form
          value={this.state.value}
          change={this.handleInputChange}
        />
        <Result weather={this.state} />
          </div>

        </div>
      </div>
    );

  }

}

export default App;
