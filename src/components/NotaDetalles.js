import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function NotaDetalles({ nota, setNotaDetalle }) {
  const cerrarModal = () => {
    setNotaDetalle(null);
  };

  return (
    <Modal show={true} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles de la Nota</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Estudiante:</strong> {nota.estudiante}</p>
        <p><strong>Actividades:</strong> {nota.actividades}</p>
        <p><strong>Primer Parcial:</strong> {nota.primerParcial}</p>
        <p><strong>Segundo Parcial:</strong> {nota.segundoParcial}</p>
        <p><strong>Examen Final:</strong> {nota.examenFinal}</p>
        <p><strong>Puntaje Total:</strong> {nota.puntajeTotal}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cerrarModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotaDetalles;
