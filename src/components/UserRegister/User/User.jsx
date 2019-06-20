import React, { Component } from 'react';

// Components
import UpdateRegister from '../UpdateRegister/UpdateRegister';
import { deleteData } from '../../utils/api'


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      editing: false,
    }

    this.increaseClick = this.increaseClick.bind(this);
    this.editUser = this.editUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  increaseClick() {
    this.setState({clicked: this.state.clicked + 1});
    this.props.changeLastClicked(this.props.id);
  }

  editUser() {
    this.setState({editing: true});
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateUserRegister();
  }

  removeUser(){
      deleteData('users',this.props.id).then(this.props.updateUserRegister).catch(console.log);
  }

  render() {
    const {id, name, lastname, email,username, password} = this.props;
    return (
      <tr onClick={this.increaseClick}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{email}</td>
        <td>{username}</td>
        <td>{password}</td>
        <td>{this.state.clicked}</td>
        <td>{this.props.id === this.props.lastClicked && 'Last Clicked'}</td>
        <td onClick={this.editUser}>Edit</td>
        <td onClick={this.removeUser}>Remove</td>
        <UpdateRegister show={this.state.editing} hide={this.closeModal} {...this.props} />
      </tr>
    );
  }
}

export default User;