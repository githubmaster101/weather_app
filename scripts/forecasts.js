class Forecast {
    constructor() {
        this.key = '1WlWBFnxJsJzfASxIUXGqkITlPTEMCgF';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    // update city location 
    async updateCity(city) {
        const cityInfo = await this.getCity(city);
        const weather = await this.getWeather(cityInfo.Key);

        return {
            cityInfo: cityInfo,
            weather: weather
        };
    }
    // get city location 
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    // get weather info 
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}


