exports.current_weather = function (req, res) {
  
  //Here is an array that holds the current weather values which will display in JSON format when the route is hit
  let weather = [
    {
      temp: 90.5,
      unit: "farenheit",
      cloudy: false,
      precipitationChance: 0
    }
  ];

  res.send(weather);
};