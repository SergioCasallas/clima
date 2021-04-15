import React from 'react';
import { Link } from 'react-router-dom';
import './Name.css';

const Name = ({ obtenerNombre }) => {
  const saveName =  (e) => {
    const nombre = e.target.value;
    obtenerNombre(nombre)
  };

  return (
    <div className='name-content'>
      <h1 className='name-title'>¿Cual es tu nombre?</h1>
      <input
        name='nombrePersona'
        className='name-input'
        placeholder='Escribe tu nombre'
        type='text'
        onChange={saveName}
      />
      <Link to='/ubicacion' className='name-link'>
        Siguiente
      </Link>
    </div>
  );
};

export default Name;
