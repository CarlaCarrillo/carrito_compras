import React, { Component } from 'react';

// Actions
import { patchData } from '../../utils/api';

// Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import RegisterForm from '../RegisterForm/RegisterForm';

class UpdateRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };

    this.showError = this.showError.bind(this);
    this.update = this.update.bind(this);
  }

  showError() {
    this.setState({error: true});
  }

  update(data) {
    patchData('users', this.props.id, data).then(this.props.hide).catch(this.showError);
  }

  render() {
    const {name, lastname, email, username, password} = this.props;
    const alert = this.state.error && (<Alert variant="danger">Something went wrong</Alert>);
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <RegisterForm submit={this.update} data={{name, lastname, email, username, password}} />
        </Modal.Body>
        {alert}
      </Modal>
    );
  }
}

export default UpdateRegister;