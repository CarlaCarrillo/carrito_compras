import React, {Component} from 'react';

//Action
import { postData } from '../../../components/utils/api'
import ItemForm from '../ItemForm/ItemForm'

//Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';



class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            Description:'',
            value: 0,
            error: false,
        };
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.create = this.create.bind(this);
    }
    updateName({target}) {
        this.setState({name: target.value});
    }
    updateValue({target}) {
        this.setState({value: target.value});
    }

    updateDescription({target}) {
        this.setState({value: Number(target.value)});
    }

    showError() {
        this.setState({error:true});
    }

    create(data) {
        postData('items', data).then(this.props.hide).catch(this.showError);
    }
    render() {
        const alert = this.state.error && (<Alert variant="danger">SOmething went wrong</Alert>);
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>New Item</Modal.Title>
                </Modal.Header>
               

                <Modal.Body>
                    <ItemForm submit={this.create} data={{}}/>
                </Modal.Body>
                {alert}
            </Modal>         
        );
    }

}
export default CreateItem;