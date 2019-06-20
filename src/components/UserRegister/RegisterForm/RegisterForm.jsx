import React, {Component} from 'react';

//Action


//Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:props.data.name || '',
            lastname:props.data.lastname || '',
            email: props.data.email || '',
            username: props.data.username || '',
            password: props.data.password || '',
        };

    this.updateName = this.updateName.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    

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

    render() {
        const alert = this.state.error && (<Alert variant="danger">Something went wrong</Alert>);
        return (
            
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Item Name"
                            value={this.state.name}
                            onChange={this.updateName}
                        />
                        <Form.Label>Lastname</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Item Lastname"
                            value={this.state.lastname}
                            onChange={this.updateLastname}
                        />
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Item Email"
                            value={this.state.email}
                            onChange={this.updateEmail}
                        />
                        <Form.Label>Username</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Item Username"
                            value={this.state.username}
                            onChange={this.updateUsername}
                        />
                        <Form.Label>password</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Item Password"
                            value={this.state.password}
                            onChange={this.updatePassword}
                        />

                <Button variant="primary" onClick={()=>this.props.submit({...this.state})}>Save</Button>
                </Form.Group>
                {alert}
                </Form>
               
                       
        );
    }

}
export default RegisterForm;