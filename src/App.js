import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";


const API_KEY="35bbd3b463f0fa0a740c3c1bcfd5c099";
const URL2="api.openweathermap.org/data/2.5/forecast?"

class App extends React.Component {

  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () =>{
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    console.log(`${URL2}q=London&appid=${API_KEY}`);

    const res = await api_call.json();
    console.log(res);

  };


  render(){
    return(
      <div className="App">
      <header className="App-header">
        <h1 className="title">Weather-App</h1>
        <form className="m-3">
          <input className="m-3 p-1 border-0 bg-transparent border-bottom text-light"  type="text" placeholder="city" name="country" autoComplete="off"></input>
          <input className="m-3 p-1 border-0 bg-transparent border-bottom text-light" type="text" placeholder="country" name="country" autoComplete="off"></input>
          <button className="btn btn-outline-success m-3">search</button>
        </form>
      </header>
      <body>
        <div className="containerCol">
          <div className="location">
            <h1> Location Name</h1>
          </div>
          <div className="date">
            <h3>Datum</h3>
          </div>
          <div className="currentTemp">
            <h2> 20°</h2>
          </div>
          <div className="containerRow">
          <h2> min temp</h2>
          <h2> max temp</h2>
          </div>
        </div>
      
      </body>
    </div>

    )
  }

}

export default App;
