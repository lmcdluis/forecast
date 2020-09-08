import axios from "axios";

export class Service {
  async getWeatherBySearch(country) {
    let result = null;
    try {
      result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=455120a1902a66896189ef9b77d55012&units=metric&lang=es`
      );
    } catch (error) {
      result = error.response;
    }

    return result;
  }
}
