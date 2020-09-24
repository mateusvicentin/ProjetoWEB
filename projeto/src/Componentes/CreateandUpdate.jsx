import React, { Component } from 'react';
import { Form, Button, Row, Container} from 'react-bootstrap';
import UserService from '../Servicos/UserService';


class CreateandUpdate extends Component {

        constructor(props){
            super(props);
            this.state = {
                id_usuario: this.props.match.params.id,
                nome: "",
                sobrenome: "",
                nome_user: "",
                email: "",
                telefone: "",
                linkedin: "" 
            }

            this.changeNomeHandler = this.changeNomeHandler.bind(this);
            this.changeSobrenomeHandler = this.changeSobrenomeHandler.bind(this);
            this.changeNome_UserHandler = this.changeNome_UserHandler.bind(this);
            this.changeEmailHandler = this.changeEmailHandler.bind(this);
            this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
            this.changeLinked_inHandler = this.changeLinked_inHandler.bind(this);

            this.cancelar = this.cancelar.bind(this);
            this.salvarUsuario = this.salvarUsuario.bind(this);
        }

            componentDidMount(){
                if(this.state.id_usuario ==="_add"){
                    return false
                } else {
                    return UserService.getUsuarioById(this.state.id_usuario).then(
                        (res) => {
                            let usuario = res.data;
                            this.setState({
                                nome: usuario.nome,
                                sobrenome: usuario.sobrenome,
                                nome_user: usuario.nome_user,
                                email: usuario.email,
                                telefone: usuario.telefone,
                                linked_in: usuario.linked_in});
                            })
                }
            }
            

            changeNomeHandler(event){
                 this.setState({nome: event.target.value})   
            }

            changeSobrenomeHandler(event){
                this.setState({sobrenome: event.target.value})
            }

            changeNome_UserHandler(event){
                this.setState({nome_user: event.target.value})
            }

            changeEmailHandler(event){
                this.setState({email: event.target.value})
            }

            changeTelefoneHandler(event){
                this.setState({telefone: event.target.value})
            }

            changeLinked_inHandler(event){
                this.setState({linked_in: event.target.value})
            }

            cancelar(){
                this.props.history.push("/usuarios");
            }

            salvarUsuario(){
                let usuario = {
                    nome : this.state.nome,
                    sobrenome : this.state.sobrenome,
                    nome_user : this.state.nome_user,
                    email: this.state.email,
                    telefone: this.state.telefone,
                    linked_in: this.state.linked_in
                }
                    if(this.state.id_usuario === "_add"){
                    UserService.createUsuario(usuario).then(
                        (res) => {
                           alert(res.data);
                           this.props.history.push("/usuarios"); 
                        }
                     )
                    } else {
                        usuario.id_usuario = this.state.id_usuario;
                        UserService.editUsuario(usuario).then(
                          (res) =>  {console.log (res.data)}
                        );
                    }
                        this.props.history.push("/usuarios");
            }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                <h1>Cadastrar Usuario</h1>
                </Row>

                <Form>
                    <Form.Group controlId="formNome">
                        <Form.Control type="text" placeholder="Nome" value={this.state.nome} onChange={this.changeNomeHandler}/>
                       <Form.Text className="text-muted">
                           Digite o primeiro nome.
                           </Form.Text> 
                    </Form.Group>

                    <Form.Group controlId="formSobrenome">
                        <Form.Control type="text" placeholder="Sobreome" value={this.state.sobrenome} onChange={this.changeSobrenomeHandler}/>
                       <Form.Text className="text-muted">
                           Digite o seu sobrenome.
                           </Form.Text> 
                    </Form.Group>

                    <Form.Group controlId="formNome_user">
                        <Form.Control type="text" placeholder="Nome de Usuario" value={this.state.nome_user} onChange={this.changeNome_UserHandler}/>
                       <Form.Text className="text-muted">
                           Digite o seu nome de usuario.
                           </Form.Text> 
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Control type="text" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandler}/>
                       <Form.Text className="text-muted">
                           Digite o seu e-mail.
                           </Form.Text> 
                    </Form.Group>

                    <Form.Group controlId="formTelefone">
                        <Form.Control type="text" placeholder="Telefone" value={this.state.telefone} onChange={this.changeTelefoneHandler}/>
                       <Form.Text className="text-muted">
                           Digite o seu telefone.
                           </Form.Text> 
                    </Form.Group>

                    <Form.Group controlId="formLinked_in">
                        <Form.Control type="text" placeholder="Usuario do Linkedin" value={this.state.linked_in} onChange={this.changeLinked_inHandler}/>
                       <Form.Text className="text-muted">
                           Informe o seu /in/usuariolinkedin
                           </Form.Text> 
                    </Form.Group>

                    <Row className="float-right">
                    <Button variant="secondary" className="btnSubmit" onClick={this.salvarUsuario}>
                        Adicionar</Button>
                    
                        <Button variant="danger" onClick={this.cancelar}>Voltar</Button>{''}
                    </Row>
                
                </Form>



            </Container>
        );
    }
}

export default CreateandUpdate;