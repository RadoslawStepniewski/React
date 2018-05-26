import React, { Component } from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather'
import './App.css';

const apiKey = "2a10cceaea19bd78e8e1b555b27e4758";


class App extends Component {
  
  getWeather = async () => {

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
    const data = await apiCall.json();
    console.log(data);

  }

  render() {
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;
