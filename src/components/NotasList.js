import React from 'react';

function NotasList({ notas, setNotaActual, eliminarNota, mostrarDetalles }) {
  return (
    <div>
      <h2 className="my-4 text-center">Lista de Notas</h2>
      <ul className="list-group">
        {notas.map((nota) => (
          <li key={nota.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{nota.estudiante}</strong> - Puntaje Total: {nota.puntajeTotal}
            </div>
            <div>
              <button className="btn btn-info me-2" onClick={() => mostrarDetalles(nota)}>
                Ver Detalles
              </button>
              <button className="btn btn-warning me-2" onClick={() => setNotaActual(nota)}>
                Editar
              </button>
              <button className="btn btn-danger" onClick={() => eliminarNota(nota.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotasList;
