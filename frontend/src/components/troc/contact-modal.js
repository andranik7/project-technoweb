import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { MdClose } from 'react-icons/md'
import './modalwindow.scss';

export class ContactInfo extends Component {
  constructor(props) {
    super(props);
    console.log("//////////")
    console.log(this.props)
  }

  render() {
    return (
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
                <tr><h5 ></h5>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><label htmlFor="firstname">Prénom</label></td>
                  <td>{this.props.proprietaire && this.props.proprietaire.prenom}</td>
                </tr>
                <tr>
                  <td><label htmlFor="lastname">Nom</label></td>
                  <td>{this.props.proprietaire && this.props.proprietaire.nom}</td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Adresse e-mail</label></td>
                  <td>{this.props.proprietaire && this.props.proprietaire.email}</td>
                </tr>
                <tr>
                  <td><label htmlFor="cphone">N° de téléphone</label></td>
                  <td>0677277723</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}><MdClose />  Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}