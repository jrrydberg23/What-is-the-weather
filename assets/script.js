let weather = {
    apiKey: "4c9e04ef1c39325d53b147b835d15edd" ,
    fetchWeather: function () {
        fetch(
            "api.openweathermap.org/data/2.5/weather?q={city name}&appid={4c9e04ef1c39325d53b147b835d15edd}"
            + city 
            + "&units=metric&appid"
            + this.apiKey
        )
        .then((response) => response.json());
        .then((data) => console.log(data));
    };
    displayWeather: function(data) {
        const { name } = data;
        const {}
    }
};
