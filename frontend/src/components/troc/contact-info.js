import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './stylemsg.scss';


export class ContactInfo extends Component{
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
                Fiche de contact du troqueur
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table responsive>
                <thead>
                    <tr><h5>Alex Martin</h5>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><label htmlFor="firstname">Prénom</label></td>
                    <td>Alex</td>
                    </tr>
                    <tr>
                    <td><label htmlFor="lastname">Nom</label></td>
                    <td>Martin</td>
                    </tr>
                    <tr>
                    <td><label htmlFor="email">Adresse e-mail</label></td>
                    <td>alex.martin@isep.fr</td>
                    </tr>                    
                    <tr>
                    <td><label htmlFor="cphone">N° de téléphone</label></td>
                    <td>0666666666</td>
                    </tr>
                </tbody>
            </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}>Fermer</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}