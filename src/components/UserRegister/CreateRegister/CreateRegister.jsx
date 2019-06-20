import React, {Component} from 'react';

//Action
import { postData } from '../../utils/api'
import RegisterForm from '../RegisterForm/RegisterForm'

//Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';



class CreateRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            lastname:'',
            email:'',
            username:'',
            password:'',
            error: false,
        };
    this.updateName = this.updateName.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.create = this.create.bind(this);
    this.showError = this.showError.bind(this);
    
    }
    updateName({target}) {
        this.setState({name: target.value});
    }
    updateLastname({target}) {
        this.setState({lastname: target.value});
    }

    updateEmail({target}) {
        this.setState({email: target.value});
    }

    updateUsername({target}) {
        this.setState({username: target.value});
    }
    updatePassword({target}) {
        this.setState({password: target.value});
    }

    showError() {
        this.setState({error:true});
   
    }

    create(data) {
        postData('users', data).then(this.props.hide).catch(this.showError);
    }

    render() {
  
        
        const alert = this.state.error && (<Alert variant="danger">Something went wrong</Alert>);
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
                    <RegisterForm submit={this.create} data={{}}/>
                </Modal.Body>
                {alert}
            </Modal>
        );
    }
}
export default CreateRegister;