import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function FasesAnteriores() {
  return (
    <React.Fragment>
      <Navbar options={true} />
      <div className="principal-container">
        <p>Fases Anteriores</p>
      </div>
    </React.Fragment>
  );
}

export default FasesAnteriores;
