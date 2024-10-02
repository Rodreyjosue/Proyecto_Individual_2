import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotaForm from './components/NotaForm';
import NotasList from './components/NotasList';
import NotaDetalles from './components/NotaDetalles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

function App() {
  const [notas, setNotas] = useState([]);
  const [notaActual, setNotaActual] = useState(null);
  const [notaDetalle, setNotaDetalle] = useState(null);
  const [alerta, setAlerta] = useState(''); 

  useEffect(() => {
    axios.get('http://localhost:8080/api/notas')
      .then((response) => {
        setNotas(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las notas:', error);
      });
  }, []);

  const agregarNota = (nuevaNota) => {
    axios.post('http://localhost:8080/api/notas', nuevaNota)
      .then((response) => {
        setNotas([...notas, response.data]);
        setAlerta('¡Nota agregada correctamente!'); 

        // Ocultar alerta después de 3 segundos
        setTimeout(() => {
          setAlerta('');
        }, 3000);
      })
      .catch((error) => {
        console.error('Error al agregar la nota:', error);
      });
  };

  const actualizarNota = (notaActualizada) => {
    axios.put(`http://localhost:8080/api/notas/${notaActualizada.id}`, notaActualizada)
      .then((response) => {
        const notasActualizadas = notas.map(nota => {
          return nota.id === response.data.id ? response.data : nota;
        });
        setNotas(notasActualizadas);
        setNotaActual(null);
      })
      .catch((error) => {
        console.error('Error al actualizar la nota:', error);
      });
  };

  const eliminarNota = (id) => {
    Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/api/notas/${id}`)
          .then(() => {
            const nuevasNotas = notas.filter(nota => nota.id !== id);
            setNotas(nuevasNotas);
  
            Swal.fire(
              'Eliminado',
              'La nota ha sido eliminada correctamente.',
              'success'
            );
          })
          .catch((error) => {
            console.error('Error al eliminar la nota:', error);
          });
      }
    });
  };
  
  

  const mostrarDetalles = (nota) => {
    setNotaDetalle(nota);
  };

  const cancelarEdicion = () => {
    setNotaActual(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sistema de Ingreso de Notas</h1>
  

      {alerta && (
        <div className="alert alert-success" role="alert">
          {alerta}
        </div>
      )}
  
      <div className="card mb-4">
        <div className="card-body">
          <NotaForm
            agregarNota={agregarNota}
            actualizarNota={actualizarNota}
            notaActual={notaActual}
            cancelarEdicion={cancelarEdicion}
          />
        </div>
      </div>
      <NotasList
        notas={notas}
        setNotaActual={setNotaActual}
        eliminarNota={eliminarNota}
        mostrarDetalles={mostrarDetalles}
      />
      {notaDetalle && (
        <NotaDetalles
          nota={notaDetalle}
          setNotaDetalle={setNotaDetalle}
        />
      )}
    </div>
  );
}

export default App;
