import React, { useState, useEffect } from 'react';
import Name from './components/Name/Name.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ubicacion from './components/Ubicacion/Ubicacion.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import ResponseNegative from './components/ResponseNegative/ResponseNegative.jsx';

const App = () => {
  let nameSave = localStorage.getItem('name');
  if (!nameSave) {
    nameSave = '';
  }

  let ubicacionSave = JSON.parse(localStorage.getItem('ubicacion'));
  if (!ubicacionSave) {
    ubicacionSave = '';
  }

  const [nombre, guardarNombre] = useState(nameSave);
  const [ubicacion, guardarUbicacion] = useState(ubicacionSave);
  const [data, getData] = useState('');
  const [err, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('ubicacion', JSON.stringify(ubicacion));
    const obtenerDatosApi = async (url) => {
      const response = await fetch(url);
      const datos = await response.json();
      await getData(datos);
      console.log(`datos obtenido`);
      console.log(datos);
    };
    if (ubicacion !== '') {
      let lat = ubicacion.lat;
      let lon = ubicacion.lon;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b743d14e7fe01e0633a128d4bc2d2c90&units=metric`;
      obtenerDatosApi(url);
    }else{
      console.log(err)
    }
  }, [ubicacion,err]);

  useEffect(() => {
    localStorage.setItem('name', nombre);
  }, [nombre]);

  const obtenerNombre = (variableNombre) => {
    guardarNombre(variableNombre);
    console.log(`nombre obtenido`);
  };

  const obtenerUbicacion = async (variableUbicacion) => {
    await guardarUbicacion(variableUbicacion);
    // await console.log(ca);
  };

  const changeError = () => {
    setError(true);
  };

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Name obtenerNombre={obtenerNombre} />
        </Route>
        <Route path='/ubicacion'>
          <Ubicacion obtenerUbicacion={obtenerUbicacion} changeError={changeError} />
        </Route>
        <Route path='/inicio'>
          <Inicio nombre={nombre} data={data} />
        </Route>
        <Router path='/finish'>
          <ResponseNegative />
        </Router>
      </Switch>
    </Router>
  );
};

export default App;
