import React, { useState, useEffect } from 'react';

function NotaForm({ agregarNota, actualizarNota, notaActual, cancelarEdicion }) {
  const [estudiante, setEstudiante] = useState('');
  const [actividades, setActividades] = useState('');
  const [primerParcial, setPrimerParcial] = useState('');
  const [segundoParcial, setSegundoParcial] = useState('');
  const [examenFinal, setExamenFinal] = useState('');
  const [errores, setErrores] = useState({}); 

  useEffect(() => {
    if (notaActual) {
      setEstudiante(notaActual.estudiante);
      setActividades(notaActual.actividades);
      setPrimerParcial(notaActual.primerParcial);
      setSegundoParcial(notaActual.segundoParcial);
      setExamenFinal(notaActual.examenFinal);
    }
  }, [notaActual]);


  const validarCampos = () => {
    let errores = {};
    
    if (!estudiante.trim()) {
      errores.estudiante = 'El nombre del estudiante es requerido';
    }
    if (actividades < 0 || actividades > 35) {
      errores.actividades = 'Las actividades deben tener un valor entre 0 y 35';
    }
    if (primerParcial < 0 || primerParcial > 15) {
      errores.primerParcial = 'El primer parcial debe tener un valor entre 0 y 15';
    }
    if (segundoParcial < 0 || segundoParcial > 15) {
      errores.segundoParcial = 'El segundo parcial debe tener un valor entre 0 y 15';
    }
    if (examenFinal < 0 || examenFinal > 35) {
      errores.examenFinal = 'El examen final debe tener un valor entre 0 y 35';
    }

    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      return;
    }

    const nuevaNota = {
      estudiante,
      actividades: Number(actividades),
      primerParcial: Number(primerParcial),
      segundoParcial: Number(segundoParcial),
      examenFinal: Number(examenFinal),
      puntajeTotal: Number(actividades) + Number(primerParcial) + Number(segundoParcial) + Number(examenFinal),
    };

    if (notaActual) {
      actualizarNota({ ...nuevaNota, id: notaActual.id });
    } else {
      agregarNota(nuevaNota);
    }

    // Limpiar campos
    setEstudiante('');
    setActividades('');
    setPrimerParcial('');
    setSegundoParcial('');
    setExamenFinal('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div className="form-group mb-3">
        <label>Estudiante</label>
        <input
          type="text"
          className={`form-control ${errores.estudiante ? 'is-invalid' : ''}`}
          value={estudiante}
          onChange={(e) => setEstudiante(e.target.value)}
        />
        {errores.estudiante && <div className="invalid-feedback">{errores.estudiante}</div>}
      </div>

      <div className="form-group mb-3">
        <label>Actividades (0-35)</label>
        <input
          type="number"
          className={`form-control ${errores.actividades ? 'is-invalid' : ''}`}
          value={actividades}
          onChange={(e) => setActividades(e.target.value)}
        />
        {errores.actividades && <div className="invalid-feedback">{errores.actividades}</div>}
      </div>

      <div className="form-group mb-3">
        <label>Primer Parcial (0-15)</label>
        <input
          type="number"
          className={`form-control ${errores.primerParcial ? 'is-invalid' : ''}`}
          value={primerParcial}
          onChange={(e) => setPrimerParcial(e.target.value)}
        />
        {errores.primerParcial && <div className="invalid-feedback">{errores.primerParcial}</div>}
      </div>

      <div className="form-group mb-3">
        <label>Segundo Parcial (0-15)</label>
        <input
          type="number"
          className={`form-control ${errores.segundoParcial ? 'is-invalid' : ''}`}
          value={segundoParcial}
          onChange={(e) => setSegundoParcial(e.target.value)}
        />
        {errores.segundoParcial && <div className="invalid-feedback">{errores.segundoParcial}</div>}
      </div>

      <div className="form-group mb-3">
        <label>Examen Final (0-35)</label>
        <input
          type="number"
          className={`form-control ${errores.examenFinal ? 'is-invalid' : ''}`}
          value={examenFinal}
          onChange={(e) => setExamenFinal(e.target.value)}
        />
        {errores.examenFinal && <div className="invalid-feedback">{errores.examenFinal}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        {notaActual ? 'Actualizar Nota' : 'Agregar Nota'}
      </button>
      {notaActual && (
        <button type="button" className="btn btn-secondary ms-2" onClick={cancelarEdicion}>
          Cancelar Edición
        </button>
      )}
    </form>
  );
}

export default NotaForm;
