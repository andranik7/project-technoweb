import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {MdClose} from 'react-icons/md'
import './modalwindow.scss'
import {IoIosSave} from 'react-icons/io'

export class ModifyPwd extends Component{
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
                Modifier ton mot de passe
              </Modal.Title>
            </Modal.Header>
            <div class="container">
            <Modal.Body >
                <form id="modifypassword" className="form">
                <Table responsive>
                <thead>
                    <tr><h5 >Mot de passe</h5>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><label htmlFor="password">Ancien mot de passe</label></td>
                    <td><input type="password" name="password" placeholder="mot de passe" /></td>
                    </tr>
                    <tr>
                    <td><label htmlFor="password">Nouveau mot de passe</label></td>
                    <td><input type="password" name="password" placeholder="mot de passe" /></td>
                    </tr>
                    <tr>
                    <td><label htmlFor="password">Confirmer mot de passe</label></td>
                    <td><input type="password" name="password" placeholder="mot de passe" /></td>
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