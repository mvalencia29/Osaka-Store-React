import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";

function CalculadoraVentas() {
  const [action, setAction] = useState("formulario");
  const [formulario, setFormulario] = useState({
    valorCompra: 0,
    utilidad: 0,
    iva: 0,
  });
  const history = useHistory();

  const calcular = () => {
    
  };

  return (
    <React.Fragment>
      <Navbar options={true} active="u" />
      <div className="principal-container">
        <h4>Calculadora de Ventas</h4>
      </div>
      <div className="secondary-container">
        {}
        <Formulario />
      </div>
    </React.Fragment>
  );
}

export default CalculadoraVentas;
