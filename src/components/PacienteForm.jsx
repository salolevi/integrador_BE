
import axios from 'axios';
import {useEffect, useState} from 'react';
export const PacienteForm = () => {

  const validateObject = (obj) => {
    console.log(Object.values(obj));
    return Object.values(obj).every(currValue => currValue !== "");
  }
  
  const [pacienteObj, setPacienteObj] = useState({
    "nombre": "",
    "apellido": "",
    "domicilio": "",
    "dni": "",
    "fechaAlta": ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const URL = 'http://127.0.0.1:8080/pacientes';

    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pacienteObj)
    }

    if (validateObject(pacienteObj)) {
      fetch(URL, config)
      .then(res => res.json())
      .then(data => console.log(data));
    }

    else
    console.log("faltan datos");


    // axios.post(URL, pacienteObj)
    // .then(res => {
    //   console.log(res);
    // }).catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setPacienteObj(prev => {
      let newObj = {...prev}
      newObj[e.target.id] = e.target.value;
      return newObj;
    });
  }


  return <form onSubmit={handleSubmit}>
    <div className="form-input">
      <label htmlFor="nombre">Nombre: </label>
      <input onChange={handleChange} type="text" id="nombre"/>
    </div>
    <div className="form-input">
      <label htmlFor="apellido">Apellido: </label>
      <input onChange={handleChange} type="text" id="apellido"/>
    </div>
    <div className="form-input">
      <label htmlFor="domicilio">Domicilio: </label>
      <input onChange={handleChange} type="text" id="domicilio"/>
    </div>
    <div className="form-input">
      <label htmlFor="dni">DNI: </label>
      <input onChange={handleChange} type="text" id="dni"/>
    </div>
    <div className="form-input">
      <label htmlFor="fechaAlta">Fecha de alta: </label>
      <input onChange={handleChange} type="date" id="fechaAlta"/>
    </div>
    <button type="submit">Enviar</button>
  </form >
}