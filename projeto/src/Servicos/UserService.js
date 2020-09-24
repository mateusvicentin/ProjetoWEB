import axios from 'axios';

const urlbase =  "http://localhost:8080/usuario";
const url_usuario = "http://localhost:8080/usuario/all";

class UserService {
    getUsuario(){
        return axios.get(urlbase+"/all"); 
    }

    createUsuario(usuario){
        return axios.post(urlbase+"/adduser",usuario);
    }

    getUsuarioById(id){
        return axios.get(urlbase+"/locate_user/"+id); 
    }

    editUsuario(usuario){
        return axios.put(urlbase+"/update_user/"+usuario.id_usuario,usuario);
    }

    deleteUsuario(id){
        return axios.delete(urlbase+"/delete_user/"+id);
    }
}

export default new UserService();
