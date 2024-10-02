package com.bjr.notas_1.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bjr.notas_1.modelos.Nota;

@Repository
public interface NotaRepositorio extends JpaRepository<Nota, Long> {
}
