import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Inventario() {
  return (
    <React.Fragment>
      <Navbar options={true} />
      <div className="principal-container">
        <p>Inventario</p>
      </div>
    </React.Fragment>
  );
}

export default Inventario;
