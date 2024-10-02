package com.bjr.notas_1.controladores;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bjr.notas_1.modelos.Nota;
import com.bjr.notas_1.servicios.NotaServicio;

import java.util.List;

@RestController
@RequestMapping("/api/notas")
@CrossOrigin(origins = "http://localhost:3000")
public class NotaControlador {

    @Autowired
    private NotaServicio notaServicio;


    @GetMapping
    public ResponseEntity<List<Nota>> obtenerNotas() {
        List<Nota> notas = notaServicio.obtenerNotas();
        return ResponseEntity.ok(notas);
    }

    @PostMapping
    public ResponseEntity<Nota> crearNota(@RequestBody Nota nota) {
        try {
            Nota nuevaNota = notaServicio.guardarNota(nota);
            return new ResponseEntity<>(nuevaNota, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nota> obtenerNota(@PathVariable Long id) {
        try {
            Nota nota = notaServicio.obtenerNotaPorId(id);
            return ResponseEntity.ok(nota);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Nota> actualizarNota(@PathVariable Long id, @RequestBody Nota notaActualizada) {
        try {
            Nota nota = notaServicio.actualizarNota(id, notaActualizada);
            return ResponseEntity.ok(nota);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarNota(@PathVariable Long id) {
        try {
            notaServicio.eliminarNota(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
