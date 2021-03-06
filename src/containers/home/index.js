import React, { useState } from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import InfoCardWeatherHome from "../../components/infoCardWeatherHome";
import FormSearchHome from "../../components/formSearchHome";
import MapOfCountry from "../../components/mapOfCountry";
import HistorySearchList from "../../components/historySearchList";
import MapOfSearch from "../../components/mapOfCountry";

function Home(getCountryData) {
  const [weatherInfo, setWeatherInfo] = useState({});

  return (
    <section className="wrapper-home">
      <Container fluid={true}>
        <Row className="pt-2">
          <Col md="12" className="text-center">
            <span className="display-4">Aplicación de Clima</span>
          </Col>
          <Col md="4" sm="12" className="mx-auto mt-5">
            <FormSearchHome setWeatherInfo={(value) => setWeatherInfo(value)} />
          </Col>
        </Row>
        <Row>
          <Col md="8" xs="12">
            <div className="mt-4">
              <InfoCardWeatherHome
                weatherInfo={weatherInfo}
              ></InfoCardWeatherHome>
            </div>
            <Row>
              <Col md="12" className="mt-3">
                <MapOfSearch
                  weatherInfo={weatherInfo}
                  isMarkerShown={true}
                ></MapOfSearch>
              </Col>
            </Row>
          </Col>
          <Col md="4" xs="12" className="mt-4">
            <HistorySearchList
              weatherInfo={weatherInfo}
              setWeather={(value) => setWeatherInfo(value)}
            ></HistorySearchList>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
