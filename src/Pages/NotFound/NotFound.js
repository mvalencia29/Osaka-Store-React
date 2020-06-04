import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function NotFound() {
  return (
    <React.Fragment>
      <Navbar options={false} boton="no" />
      <div className="principal-container">
        <p>Upss! Pagina no encontrada</p>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
