import React from 'react';

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <h2>Por favor llene los campos</h2>
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Repetir Contraseña:</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
