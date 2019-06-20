import React, { Component } from 'react';

// Actions
import { patchData } from '../../utils/api';

// Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import CarForm from '../CarForm/CarForm';

class UpdateItemCar extends Component {
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
    patchData('plantas', this.props.id, data).then(this.props.hide).catch(this.showError);
  }

  render() {
    const {name, description, costo, imagen} = this.props;
    const alert = this.state.error && (<Alert variant="danger">Something went wrong</Alert>);
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Plant</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CarForm submit={this.update} data={{name, description, costo, imagen}} />
        </Modal.Body>
        {alert}
      </Modal>
    );
  }
}

export default UpdateItemCar;