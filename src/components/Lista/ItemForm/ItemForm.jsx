import React, {Component} from 'react';

//Action


//Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



class ItemForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:props.data.name || '',
            description:props.data.description || '',
            costo:props.data.costo || '',
            imagen: props.data.imagen|| 0,
            
        };

    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateCosto = this.updateCosto.bind(this);
    this.updateImagen = this.updateImagen.bind(this);
    
    }
    updateName({target}) {
        this.setState({name: target.value});
    }
    updateDescription({target}) {
        this.setState({description: target.value});
    } 
    updateCosto({target}) {
        this.setState({costo: target.value});
    }
    updateImgen({target}) {
        this.setState({imagen: target.value});
    }
    

    render() {
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
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows ="3"
                    value={this.state.description}
                    onChange={this.updateDescription}
                    />
                    <Form.Label>Costo</Form.Label>
                    <Form.Control
                    type="number"
                    min="0"
                    placeholder="Value"
                    Value={this.state.costo}
                    onChange={this.updateCosto}
                    />
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                    type="number"
                    min="0"
                    placeholder="Value"
                    Value={this.state.imagen}
                    onChange={this.updateImagen}
                    />
                <Button variant="primary" onClick={()=>this.props.submit({...this.state})}>Save</Button>
                </Form.Group>
                </Form>
                       
        );
    }

}
export default ItemForm;