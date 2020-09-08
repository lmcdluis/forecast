import axios from "axios";
import { REACT_APP_APPI_KEY } from "../keys";

// Servicio para realizar la peticion al api
export class Service {
  async getWeatherBySearch(country) {
    let result = null;
    try {
      result = await axios.post(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${REACT_APP_APPI_KEY}&units=metric&lang=es`
      );
    } catch (error) {
      result = error.response;
    }

    return result;
  }
}
