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
            description:'',
            costo: 0,
            imagen: '',
            error: false,
        };
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateCosto = this.updateCosto.bind(this);
    this.updateImagen = this.updateImagen.bind(this);
    this.create = this.create.bind(this);
    }
    updateName({target}) {
        this.setState({name: target.value});
    }
   
    updateDescription({target}) {
        this.setState({description: Number(target.value)});
    }
   
    updateCosto({target}) {
        this.setState({costo: target.value});
    }

    updateImagen({target}) {
        this.setState({imagen: target.value});
    }

    

    showError() {
        this.setState({error:true});
    }

    create(data) {
        postData('carrito', data).then(this.props.hide).catch(this.showError);
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