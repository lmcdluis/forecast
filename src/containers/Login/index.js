import React from "react";
import "./styles.css";
import { Section, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <section id="login-wrapper">
      <Container fluid>
        <Row>
          <Col md="4" xs="12" className="text-center mx-auto pt-5 mt-5">
            <Button variant="info" size="lg" className="btn-block">
              Iniciar Sesión
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Login;
