import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "./modalwindow.scss";
import { IoIosSend } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import APIService from '../../services/APIService'


export class AddAdvice extends Component {
  constructor(props) {
    super(props);
    this.apiService = new APIService();

    this.state = {
      text: "",
      user: null
    }

  }


  componentDidMount() {
    let user = localStorage.user;
    if (user) {
      this.setState({ user: JSON.parse(user) })
    } else {
      window.location = "/"
    }
  }


  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createAdvice = () => {
    this.apiService.createAdvice(this.state).then(res => {
      if (res.data.success) {
        this.props.onHide()
      } else {
        alert("Une erreur est survenue lors de la publication du conseil")
      }
    })
  }

  render() {
    return (
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
            <textarea rows="4" cols="80" name="text" form="addadvice" onChange={this.handleInputChange} />
            <Button className="btn-purple" variant='primary' type="button" onClick={this.createAdvice}><IoIosSend /> Envoyer </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button font-size="16px" variant="danger" onClick={this.props.onHide}> <MdClose /> Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}