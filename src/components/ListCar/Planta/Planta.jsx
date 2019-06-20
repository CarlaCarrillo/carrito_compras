import React, { Component } from 'react';

// Components
import UpdateItemCar from '../UpdateItemCar/UpdateItemCar';
import { deleteData } from '../../utils/api'

class Planta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      editing: false,
    }

    this.increaseClick = this.increaseClick.bind(this);
    this.editPlanta = this.editPlanta.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removePlanta = this.removePlanta.bind(this);
  }

  increaseClick() {
    this.setState({clicked: this.state.clicked + 1});
    this.props.changeLastClicked(this.props.id);
  }

  editPlanta() {
    this.setState({editing: true});
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateListCar();
  }

  removePlanta(){
      deleteData('plantas',this.props.id).then(this.props.updateListCar).catch(console.log);
  }

  render() {
    const {id, name, description, costo, imagen} = this.props;
    return (
      <tr onClick={this.increaseClick}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{costo}</td>
        <td>{imagen}</td>
        <td>{this.state.clicked}</td>
        <td>{this.props.id === this.props.lastClicked && 'Last Clicked'}</td>
        <td onClick={this.editPlanta}>Edit</td>
        <td onClick={this.removePlanta}>Remove</td>
        <UpdateItemCar show={this.state.editing} hide={this.closeModal} {...this.props} />
      </tr>
    );
  }
}

export default Planta;