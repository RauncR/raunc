import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Chicago",
      currentCondition: {
        tempC: 0,
        windspeedKmph: 0,
        precipMM: 0,
      },
    };
  }
  componentDidMount() {
    const getWeatherData = async (city) => {
      const response = await fetch(`https>//wttr.in/${city}?format=j1`);
      const weatherData = await response.json();
      this.setState({ currentCondition: weatherData.currentCondition[0] });
    };
    getWeatherData(this.state.location);
  }
  render() {
    return (
      <div>
        <h1>Today's weather for {this.state.location}</h1>
        <ul>
          <li>temp: {this.state.currentCondition.tempC}C</li>
          <li>wind: {this.state.currentCondition.windspeedKmph}kmph</li>
          <li>precip amt: {this.state.currentCondition.precipMM}mm</li>
        </ul>
      </div>
    );
  }
}
export default App;
