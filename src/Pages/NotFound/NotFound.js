import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function NotFound() {
  return (
    <React.Fragment>
      <Navbar options={false} boton="no" />
      <div className="principal-container">
        <h4>Upss! Pagina no encontrada</h4>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
