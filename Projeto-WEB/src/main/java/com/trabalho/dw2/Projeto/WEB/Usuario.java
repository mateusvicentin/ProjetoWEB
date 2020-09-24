package com.trabalho.dw2.Projeto.WEB;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Usuario {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)	
	private long Id_usuario;
	
	private String nome;
	
	private String sobrenome;
	
	private String email;
	
	private String nome_user;
	
	private String linked_in;
	
	private String telefone;

	public long getId_usuario() {
		return Id_usuario;
	}

	public void setId_usuario(long id_usuario) {
		Id_usuario = id_usuario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome_user() {
		return nome_user;
	}

	public void setNome_user(String nome_user) {
		this.nome_user = nome_user;
	}

	public String getLinked_in() {
		return linked_in;
	}

	public void setLinked_in(String linked_in) {
		this.linked_in = linked_in;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	@Override
	public String toString() {
		return "Usuario [Id_usuario=" + Id_usuario + ", nome=" + nome + ", sobrenome=" + sobrenome + ", email=" + email
				+ ", nome_user=" + nome_user + ", linked_in=" + linked_in + ", telefone=" + telefone + "]";
	}
	
	

}