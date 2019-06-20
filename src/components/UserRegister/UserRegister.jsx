import React, {Component} from 'react';
import {getData} from '../utils/api';
import User from './User/User';
import CreateRegister from './CreateRegister/CreateRegister'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            lastClicked: null,
        }
        this.updateUserRegister = this.updateUserRegister.bind(this);
        this.changeLastClicked = this.changeLastClicked.bind(this);
        this.createRegister = this.createRegister.bind(this);
        this.closeModal = this.closeModal.bind(this);
        }

   componentDidMount() {
       this.updateUserRegister();
   }

   updateUserRegister   () {
       getData('users').then((users) => this.setState({users}));
   }
   changeLastClicked(id) {
       this.setState({lastClicked:id});
    }
    createRegister() {
        this.setState({creating:true});
    }

    closeModal() {
        this.setState({creating:false});
        this.updateUserRegister();
    }
    
    renderUsers(){
        return this.state.users.map((user,i) => (
          <User
          key={`user-${i}`}
          lastClicked={this.state.lastClicked}
          changeLastClicked={this.changeLastClicked}
          updateUserRegister={this.updateUserRegister}
          {...user} 
          /> 
    ));
}
    render() {
        return (
            
            <>
            <CreateRegister show={this.state.creating} hide={this.closeModal}/>
            <table className="UserRegister">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderUsers()}
                </tbody>
            </table>

            <Button variant="primary" onClick={this.createRegister}>Add new User</Button>
            </>
           
        );
    }
}


export default UserRegister;

    