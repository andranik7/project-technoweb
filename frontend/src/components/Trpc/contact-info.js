import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import './node_modules/@fortawesome/fontawesome-free/css/all.min.css'; 
import './node_modules/bootstrap-css-only/css/bootstrap.min.css'; 
import './node_modules/mdbreact/dist/css/mdb.css';
import Table from 'react-bootstrap/Table';
import './modalwindow.scss';


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
            <div class="container">
            <Modal.Body >
              <Table responsive>
                <thead>
                    <tr><h5 >Alex Martin</h5>
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
            </div>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}><i class="fas fa-times"></i>  Fermer</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}