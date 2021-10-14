import earth from './earth.png';
import './App.css';
import StationList from './StationList'
import React from 'react';


const API = 'https://jsonplaceholder.typicode.com/users'

class App extends React.Component {

  state = {
    stations: []
  }


componentDidMount() {
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

}

  render () {
    const stations = this.state.stations;

    return (
      <div className="App">
        <header className="App-header">
          <img src={earth} className="App-logo" alt="logo" />
        </header>
  
        <div>
          <h1>Weather stations</h1>
  
          <ul>
            {stations.length > 0 ? <StationList stations={stations}/> : <p>Aktualnie brak stacji pogodowych</p>}
            {/* <StationList stations={stations}/> */}
          </ul>
          
        </div>
      </div>
    );

  }
 
}

export default App;
