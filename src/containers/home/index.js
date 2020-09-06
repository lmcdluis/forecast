import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import InfoCardWeatherHome from "../../components/infoCardWeatherHome";
import FormSearchHome from "../../components/formSearchHome";

function Home() {
  return (
    <section className="wrapper-home">
      <Container>
        <Row className="pt-5">
          <Col md="6" sm="12" className="mx-auto mt-5">
            <span className="display-4">Aplicación de Clima</span>
            <div className="mt-5">
              <FormSearchHome />
            </div>
            <div className="mt-4">
              <InfoCardWeatherHome />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
