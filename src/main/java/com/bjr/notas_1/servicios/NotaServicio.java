package com.bjr.notas_1.servicios;

import com.bjr.notas_1.modelos.Nota;
import com.bjr.notas_1.repositorios.NotaRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaServicio {

    @Autowired
    private NotaRepositorio notaRepositorio;


    public List<Nota> obtenerNotas() {
        return notaRepositorio.findAll();
    }

    public Nota guardarNota(Nota nota) {
        if (nota.getActividades() > 35 || nota.getPrimerParcial() > 15 ||
            nota.getSegundoParcial() > 15 || nota.getExamenFinal() > 35) {
            throw new IllegalArgumentException("Las notas no pueden exceder los puntajes máximos");
        }
        nota.setPuntajeTotal(nota.getActividades() + nota.getPrimerParcial() +
                             nota.getSegundoParcial() + nota.getExamenFinal());
        return notaRepositorio.save(nota);
    }

    public Nota obtenerNotaPorId(Long id) {
        return notaRepositorio.findById(id)
                .orElseThrow(() -> new RuntimeException("Nota no encontrada"));
    }

    public Nota actualizarNota(Long id, Nota notaActualizada) {
        Nota notaExistente = obtenerNotaPorId(id);
        notaExistente.setEstudiante(notaActualizada.getEstudiante());
        notaExistente.setActividades(notaActualizada.getActividades());
        notaExistente.setPrimerParcial(notaActualizada.getPrimerParcial());
        notaExistente.setSegundoParcial(notaActualizada.getSegundoParcial());
        notaExistente.setExamenFinal(notaActualizada.getExamenFinal());
        notaExistente.setPuntajeTotal(notaActualizada.getActividades() + notaActualizada.getPrimerParcial() +
                                      notaActualizada.getSegundoParcial() + notaActualizada.getExamenFinal());
        return notaRepositorio.save(notaExistente);
    }

    public void eliminarNota(Long id) {
        notaRepositorio.deleteById(id);
    }
}

