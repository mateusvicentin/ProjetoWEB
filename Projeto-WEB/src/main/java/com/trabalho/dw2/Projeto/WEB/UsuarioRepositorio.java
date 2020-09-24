package com.trabalho.dw2.Projeto.WEB;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.trabalho.dw2.Projeto.WEB.Usuario;



public interface UsuarioRepositorio extends CrudRepository <Usuario, Long> {


	
	 
	 Usuario findById(long id);
}