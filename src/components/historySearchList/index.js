import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

// Seteo de informacion proveniente del localstorage
const HistorySearchList = (props) => {
  const [historyList, setHistoryList] = useState([]);

  //Mando a traer la informacion almacenada
  useEffect(() => {
    const valueLocalStorage = JSON.parse(
      localStorage.getItem("searchCountryHisotry")
    );
    setHistoryList(valueLocalStorage);
  }, [props]);

  //Funcion para repertir busqueda almancenada
  const showItemtTable = (data) => {
    props.setWeather(data);
  };

  //Funcion para eliminar busqueda de la lista
  const trashItemtTable = (data) => {
    historyList.splice(historyList.indexOf(data), 1);
    props.setWeather(historyList);
    localStorage.setItem("searchCountryHisotry", JSON.stringify(historyList));
  };

  return (
    <Card className="bg-white">
      <Card.Body>
        <Card.Title>Historial de búsqueda</Card.Title>
        <ul className="list-unstyled">
          {historyList &&
            historyList.map((data, index) => {
              return (
                <li key={index} className="border-bottom p-3">
                  <Row>
                    <Col md="6" xs="6">
                      <span className="h5">{data.country} </span>
                    </Col>
                    <Col md="2" xs="3">
                      <Button
                        variant="success"
                        className="btn-sm"
                        onClick={() => showItemtTable(data)}
                      >
                        Ver
                      </Button>
                    </Col>
                    <Col md="2" xs="3">
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => trashItemtTable(data)}
                      >
                        Eliminar
                      </Button>
                    </Col>
                  </Row>
                </li>
              );
            })}
        </ul>
      </Card.Body>
    </Card>
  );
};
export default HistorySearchList;
