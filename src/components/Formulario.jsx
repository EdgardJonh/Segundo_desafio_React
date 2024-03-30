import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState(''); // Estado para el nombre
  const [email, setEmail] = useState(''); // Estado para el email
  const [contrasena, setContrasena] = useState(''); // Estado para la contraseña
  const [confirmarContrasena, setConfirmarContrasena] = useState(''); // Estado para confirmar la contraseña

  const handleNombreChange = (e) => {
    setNombre(e.target.value); // Actualiza el estado del nombre al cambiar el valor del input
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Actualiza el estado del email al cambiar el valor del input
  }

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value); // Actualiza el estado de la contraseña al cambiar el valor del input
  }

  const handleConfirmarContrasenaChange = (e) => {
    setConfirmarContrasena(e.target.value); // Actualiza el estado de confirmar contraseña al cambiar el valor del input
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    // Aquí se agregaría la lógica para validar los campos y enviar el formulario
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input para el nombre */}
      <div className='d-flex flex-column '>
      <input type="text" className="form-control mb-2" value={nombre} onChange={handleNombreChange} placeholder="Nombre" />
      {/* Input para el email */}
      <input type="email" className="form-control mb-2" value={email} onChange={handleEmailChange} placeholder="Email" />
      {/* Input para la contraseña */}
      <input type="password" className="form-control mb-2" value={contrasena} onChange={handleContrasenaChange} placeholder="Contraseña" />
      {/* Input para confirmar la contraseña */}
      <input type="password" className="form-control mb-2" value={confirmarContrasena} onChange={handleConfirmarContrasenaChange} placeholder="Confirmar Contraseña" />
      {/* Botón para enviar el formulario */}
      <button type="submit" className='btn btn-success'>Registrarse</button>
      </div>
     
    </form>
  );
}

export default Formulario;
