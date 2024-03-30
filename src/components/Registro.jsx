import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
const Registro = () => {
  const iconos = {
    facebook: 'bi bi-facebook',
    git: 'bi bi-github',
    linkdin: 'bi bi-linkedin'
  }
  return (
    <>
          
      <div className="registro">
        <h1>Crea una cuenta</h1>
        <div style={{display:'flex', justifyContent:'space-evenly' }}>
        <SocialButton icono={iconos.facebook} /> {/* Aquí se pasaría el icono como prop */}
        <SocialButton icono={iconos.git} />
        <SocialButton icono={iconos.linkdin} />
        </div>
        <p>O usa tu email para regitrarte</p>
        <Formulario />
        <Alert mensaje="..." tipo="..." />{" "}
        {/* Aquí se pasaría el mensaje y tipo como prop */}
      </div>
      
  
    </>
  );
};

export default Registro;
