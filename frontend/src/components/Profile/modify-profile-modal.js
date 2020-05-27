import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {MdClose} from 'react-icons/md';
import {IoIosSave} from 'react-icons/io';


export class ModifyProfile extends Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modifier ton profile
              </Modal.Title>
            </Modal.Header>
            <div class="container">
            <Modal.Body >
                <form id="updateprofile" className="form">
                <Table responsive>
                <thead>
                    <tr><h5 >Alex Martin</h5>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><label htmlFor="firstname">Prénom</label></td>
                    <td><input type="text" name="firstname" placeholder="Alex" /></td>
                    </tr>
                    <tr>
                    <td><label htmlFor="lastname">Nom</label></td>
                    <td><input type="text" name="lastname" placeholder="Martin" /></td>
                    </tr>
                    <tr>
                    <td><label htmlFor="email">Adresse e-mail</label></td>
                    <td><input type="email" name="email" placeholder="alex.martin@isep.fr" /></td>
                    </tr>                    
                    <tr>
                    <td><label htmlFor="cphone">N° de téléphone</label></td>
                    <td><input type="cphone" name="cphone" placeholder="0666666666" /></td>
                    </tr>
                </tbody>
                </Table>
                <Button className="btn-purple" variant='primary' type="submit"><IoIosSave/> Enregistrer </Button>
                </form>
            </Modal.Body>
            </div>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}><MdClose/>  Fermer</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}