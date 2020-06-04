import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Administrador() {
  return (
    <React.Fragment>
      <Navbar options={true} />
      <div className="principal-container">
        <p>Administrador</p>
      </div>
    </React.Fragment>
  );
}

export default Administrador;
