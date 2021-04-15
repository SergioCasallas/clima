import React from 'react';
import { Link } from 'react-router-dom';
import './Ubicacion.css';

const Ubicacion = ({ obtenerUbicacion }) => {
  function success() {
    console.log(`buscando datos`);
    // navigator.geolocation.getCurrentPosition(resolve);
    navigator.geolocation.watchPosition(resolve, error);

    async function resolve(position) {
      const lon = await position.coords.longitude;
      const lat = await position.coords.latitude;

      await obtenerUbicacion({ lon, lat });
    }

    async function error(err) {
      console.log(err);
      window.location.href = '/finish';
    }
  }

  return (
    <div className='ubicacion-content'>
      <h1 className='ubicacion-title'>Deseamos acceder a tu ubicacion</h1>
      <div className='ubicacion-options'>
        <Link className='ubicacion-link' to='/inicio' onClick={success}>
          Si
        </Link>
        <Link className='ubicacion-link' to='/finish'>
          No
        </Link>
      </div>
    </div>
  );
};

export default Ubicacion;
