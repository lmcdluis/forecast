import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Service } from "../../services";

const arraySearchHistory = [];

const FormSearchHome = (props) => {
  const service = new Service();
  const [countryValue, setCountryValue] = useState("Managua");

  useEffect(() => {
    const getCountryData = async () => {
      let res;
      if (countryValue) {
        res = await service.getWeatherBySearch(countryValue);
        if (res.status === 200) {
          const data = res.data;
          const newRecord = {
            country: data.name,
            temperature: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            maxtemperature: data.main.temp_max,
            mintemperature: data.main.temp_min,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
            coordenadas: data.coord,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
          };
          props.setWeatherInfo(newRecord);
          arraySearchHistory.push(newRecord);
          if (arraySearchHistory.length > 5) {
            arraySearchHistory.shift();
          }
          localStorage.setItem(
            "searchCountryHisotry",
            JSON.stringify(arraySearchHistory)
          );
        }
      }
    };
    getCountryData();
  }, [countryValue]);

  const getWeatherInfo = async (e) => {
    e.preventDefault();
    const { country } = e.target.elements;
    const resultValue = country.value;

    if (resultValue) {
      setCountryValue(resultValue);
    }
  };

  return (
    <Form onSubmit={getWeatherInfo}>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="País o ciudad a buscar"
          name="country"
          id="searchBox"
        />
        <InputGroup.Append>
          <Button variant="warning" type="input" className="btnSearch">
            Hacer búsqueda
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default FormSearchHome;
