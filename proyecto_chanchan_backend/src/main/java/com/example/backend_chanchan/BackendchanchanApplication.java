package com.example.backend_chanchan;

import com.example.backend_chanchan.domain.entities.Rol;
import com.example.backend_chanchan.domain.entities.Usuario;
import com.example.backend_chanchan.domain.entities.UsuarioRol;
import com.example.backend_chanchan.domain.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BackendchanchanApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(BackendchanchanApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {

		Usuario usuario = new Usuario();

		usuario.setNombre("edward");
		usuario.setApellido("edward");
		usuario.setUsername("edward");
		usuario.setPassword(bCryptPasswordEncoder.encode ("1234"));
		usuario.setEmail("c@gmail.com");
		usuario.setTelefono("123456789");
		usuario.setPerfil("foto.png");

		Rol rol = new Rol();
		rol.setRolId(1L);
		rol.setRolNombre("ADMIN");

		Set<UsuarioRol> usuariosRoles = new HashSet<>();
		UsuarioRol usuarioRol = new UsuarioRol();
		usuarioRol.setRol(rol);
		usuarioRol.setUsuario(usuario);
		usuariosRoles.add(usuarioRol);

		Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuariosRoles);
		System.out.println(usuarioGuardado.getUsername());
	}
}



