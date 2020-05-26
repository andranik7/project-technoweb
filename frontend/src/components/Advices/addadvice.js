import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import "./advices.scss";

export class AddAdvice extends Component{
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
                Ajoute un conseil 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form id="addadvice" className="form">
              <textarea rows="4" cols="80" name="advice" form="addadvice"/>
            <div className=""><input className="submit" type="submit" value="Envoyer" /></div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button font-size="16px" variant="danger" onClick={this.props.onHide}> <i class="fas fa-times"></i> Fermer</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}