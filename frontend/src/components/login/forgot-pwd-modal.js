import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {MdClose} from 'react-icons/md'
import {IoIosSend} from 'react-icons/io'

export class ForgotPwd extends Component{
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
                Mot de passe oublié
              </Modal.Title>
            </Modal.Header>
            <div class="container">
            <Modal.Body >
                <h5>Réinitialisation du mot de passe</h5>
                <i  style={{ margin: '15px' }}>Reçois un lien sur ta boite mail pour modifier ton mot de passe</i>
                <form id="forgotpwd" className="form">
                <Table responsive>
                <tbody>
                    <tr>
                    <td><label htmlFor="email">Adresse e-mail</label></td>
                    <td><input type="email" name="email" placeholder="prenom.nom@isep.fr" /></td>
                    </tr>                
                </tbody>
                </Table>
                <Button className="btn-purple" variant='primary' type="submit"><IoIosSend/> Envoyer </Button>
                </form>
            </Modal.Body>
            </div>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}><MdClose/> Fermer</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}