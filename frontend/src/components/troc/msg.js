import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './modalwindow.scss';


export class Msg extends Component{
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
            <h5>Laisser un message à Alex</h5>
            <form id="msg" className="form">
              <div className="form-group"><label htmlFor="cphone">Ton numéro de téléphone : </label>
              <input className="cphone" type="text" name="cphone" />
              </div>
              <div className="form-group"><label htmlFor="comment">Message : </label>
              <textarea rows="4" cols="50" name="comment" form="msg"/> </div>
              <div className=""><input className="submit" type="submit" value="Envoyer" /></div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}> <i class="fas fa-times"></i>  Fermer</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}