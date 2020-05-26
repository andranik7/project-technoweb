import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "./modalwindow.scss";
import {IoIosSend} from 'react-icons/io'
import {MdClose} from 'react-icons/md'

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
            centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Publie un conseil 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form id="addadvice" className="form">
              <textarea rows="4" cols="80" name="advice" form="addadvice"/>
            <Button className="btn-purple" variant='primary' type="submit"><IoIosSend/> Envoyer </Button>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button font-size="16px" variant="danger" onClick={this.props.onHide}> <MdClose/> Fermer</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}