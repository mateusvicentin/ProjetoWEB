import React, { Component } from 'react';
import {Row, Table, Container, Button} from 'react-bootstrap';
import UserService from '../Servicos/UserService';


class Usuario extends Component {
   constructor (props) {
       super(props);
       this.state = {
           usuarios: []
       }

       this.voltar = this.voltar.bind(this);
       this.excluir = this.excluir.bind(this);
       this.editar = this.editar.bind(this);
       this.novoUsuario = this.novoUsuario.bind(this);
   }

    componentDidMount(){
        this.getUsuarios();
    }

    getUsuarios(){
        UserService.getUsuario().then(
            (resposta) =>
         this.setState({usuarios:resposta.data})
            
        );
    }

    voltar(){
        this.props.history.push("/");
    }

    novoUsuario(){
        this.props.history.push("/usuario/_add");
    }

    excluir(id){
           UserService.deleteUsuario(id).then(
               res => {
                   alert(res.data)
                    this.getUsuarios();
               }); 
    }

    editar(id){
        this.props.history.push("/usuario/"+id);
    }
    
   

    




    render() {
        return (
            <Container>
                <Row>
                <h1>Users</h1>
                </Row>
            

            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>
                                Nome
                            </th>
                            <th>
                                Sobrenome
                            </th>

                            <th>
                                Usuario
                            </th>

                            <th>
                                Email
                            </th>

                            <th>
                                Telefone
                            </th>

                            <th>
                                Linkedin
                            </th>


                            <th>
                                Ação
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.usuarios.map(
                               usuario =>
                               <tr key = {usuario.id_usuario}>
                                   <td>
                                       {usuario.nome}
                                   </td>
                                   <td>
                                       {usuario.sobrenome}
                                   </td>
                                   <td>
                                       {usuario.nome_user}
                                   </td>
                                   <td>
                                       {usuario.email}
                                   </td>
                                   <td>
                                       {usuario.telefone}
                                   </td>
                                   <td>
                                       {usuario.linked_in}
                                   </td>
                                   
                                   <td>
                                   <Button variant="info" onClick= {() => this.editar(usuario.id_usuario)}>Editar</Button>
                                   <Button variant="danger" onClick={() => this.excluir(usuario.id_usuario)}>Excluir</Button> 
                                   
                                   </td>
                                   </tr>
                           ) 
                        }
                    </tbody>
                </Table>
            </Row>
            <Row className="float-right">
            <Button variant="success" onClick={this.novoUsuario}>Adicionar</Button>{' '}
            </Row>
            <Row className="float-left">
            <Button variant="primary" onClick={this.voltar}>Voltar</Button>{' '}
            </Row>

            </Container>
        );
    }
}

export default Usuario;