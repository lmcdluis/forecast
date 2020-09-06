import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Service } from "../../services";

const FormSearchHome = (props) => {
  const service = new Service();
  const [weatherInfo, setweatherInfo] = useState("");

  useEffect(() => {});

  const getWeatherInfo = async (e) => {
    e.preventDefault();
    const { country } = e.target.elements;
    const countryValue = country.value;

    if (countryValue) {
      let res = null;
      res = await service.getWeatherBySearch(countryValue);
      console.log(res.data);
    }
  };

  return (
    <Card className="rounded-lg shadow-lg">
      <Card.Body>
        <Form onSubmit={getWeatherInfo}>
          <Form.Group>
            <Form.Label>País</Form.Label>
            <Form.Control
              type="text"
              placeholder="País a buscar"
              name="country"
            />
          </Form.Group>
          <Row>
            <Col md="6" xs="12" className="mx-auto">
              <Button variant="primary" className="btn-block" type="input">
                Obtener información
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormSearchHome;
