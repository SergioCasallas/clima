import React, { Fragment } from 'react';
import './Inicio.css';
import Loader from '../Loader/Loader';

const Inicio = ({ data, nombre }) => {
  if (data !== '') {
    console.log(data.coord);
  }
  return (
    <div className='home'>
      {data.coord ? (
        <Fragment key='1'>
          <span className='home__info'>{`Hola ${nombre}`}</span>
          <span className='home__info'>
            {`Temperatura: ${data.main.temp}°C`}
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              className='home__icon'
              alt='icon clima'
            />
          </span>
          <span className='home__info'>{`Pais: ${data.sys.country}`}</span>
          <span className='home__info'>{`Humedad: ${data.main.humidity}`}</span>
        </Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Inicio;
