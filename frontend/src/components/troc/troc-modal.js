import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { IoMdContact } from 'react-icons/io';
import { FiMessageCircle } from 'react-icons/fi'
import { IoIosSend } from 'react-icons/io'
import { MdClose } from 'react-icons/md'

export class Msg extends Component {
  constructor(props) {
    super(props);
    console.log("///////////////////", this.props)
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
        <Modal.Body>
          <h5><div class="username"><IoMdContact /> </div></h5>
          <Table responsive>
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
                <td>0666666666</td>
              </tr>
            </tbody>
          </Table>
          <h5><FiMessageCircle />   Laisser un message à {this.props.proprietaire && this.props.proprietaire.prenom}</h5>
          <form id="msg" className="form">
            <div className="form-group"><label htmlFor="cphone">Ton numéro de téléphone : </label>
              <input className="cphone" type="text" name="cphone" />
            </div>
            <div className="form-group"><label htmlFor="comment">Message : </label>
              <textarea rows="4" cols="50" name="comment" form="msg" /> </div>
            <Button className="btn-purple" variant='primary' type="submit" ><IoIosSend /> Envoyer </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}> <MdClose />  Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}