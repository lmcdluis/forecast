import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const InfoCardWeatherHome = (props) => {
  return (
    <Card className="bg-white">
      <Card.Body>
        <Card.Title>
          Estado del tiempo:{" "}
          <span className="text-success h5">{props.weatherInfo.country}</span>
        </Card.Title>
        <Row>
          <Col md="4" xs="12" className="p-3 border-right">
            <Row>
              <Col md="6">
                <span className="h5">Temperatura:</span>
              </Col>
              <Col md="6">
                <span className="h6 text-primary">
                  {props.weatherInfo.temperature}&nbsp;c°
                </span>
              </Col>
            </Row>
          </Col>
          <Col md="4" xs="12" className="p-3 border-right">
            <Row>
              <Col md="6">
                <span className="h5">Presión:</span>
              </Col>
              <Col md="6">
                <span className="h6 text-primary">
                  {props.weatherInfo.pressure}
                </span>
              </Col>
            </Row>
          </Col>
          <Col md="4" xs="12" className="p-3">
            <Row>
              <Col md="6">
                <span className="h5">Humedad:</span>
              </Col>
              <Col md="6">
                <span className="h6 text-primary">
                  {props.weatherInfo.humidity}&nbsp;%
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md="6" xs="12" className="p-3 border-right">
            <Row>
              <Col md="6">
                <span className="h5">Temp. Máxima:</span>
              </Col>
              <Col md="6">
                <span className="h6 text-primary">
                  {props.weatherInfo.maxtemperature}&nbsp;c°
                </span>
              </Col>
            </Row>
          </Col>
          <Col md="6" xs="12" className="p-3">
            <Row>
              <Col md="6">
                <span className="h5">Temp. Mínima:</span>
              </Col>
              <Col md="6">
                <span className="h6 text-primary">
                  {props.weatherInfo.mintemperature}&nbsp;c°
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <div className="wrapper-icon">
            <img
              className="img-fluid icon-weather"
              src={`http://openweathermap.org/img/wn/${props.weatherInfo.icon}@2x.png`}
              alt="wthr img"
            ></img>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default InfoCardWeatherHome;
