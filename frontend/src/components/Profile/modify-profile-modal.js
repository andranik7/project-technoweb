import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { MdClose } from 'react-icons/md';
import { IoIosSave } from 'react-icons/io';
import APIService from '../../services/APIService';

export class ModifyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      password: "",
      newPassword: "",
      prenom: "",
      nom: "",
      email: ""
    }

    this.apiService = new APIService()

  }

  componentDidMount() {
    let user = localStorage.user;
    if (user) {
      this.setState({ user: JSON.parse(user) }, () => {
        this.setState({ prenom: this.state.user.prenom, nom: this.state.user.nom, email: this.state.user.email })
      })
    } else {
      window.location = "/"
    }
  }

  resetPassword = () => {
    this.apiService.resetPassword(this.state.password, this.state.newPassword, this.state.user.email).then(res => {
      if (res.data.success) {
        alert("Le mot de passe a bien été mis à jour")
      } else {
        alert(res.data.message)
      }
    })
  }


  updateProfile = () => {
    this.apiService.updateProfile(this.state.prenom, this.state.nom, this.state.email, this.state.user._id).then(res => {
      if (res.data.success) {
        console.log(res.data)
        localStorage.user = JSON.stringify(res.data.user)
        this.setState({
          user: res.data.user
        })
      } else {
        alert(res.data.message)
      }
    })
  }



  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
            Modifier ton profile
              </Modal.Title>
        </Modal.Header>
        <div class="container">
          <Modal.Body >
            <form id="updateprofile" className="form">
              <Table responsive>
                <thead>
                  <tr><h5 >{this.state.user && (this.state.user.prenom + " " + this.state.user.nom)}</h5>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><label htmlFor="firstname">Prénom</label></td>
                    <td><input type="text" name="prenom" placeholder={this.state.user && this.state.user.prenom} value={this.state.prenom} onChange={this.handleInputChange} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="lastname">Nom</label></td>
                    <td><input type="text" name="nom" placeholder={this.state.user && this.state.user.nom} value={this.state.nom} onChange={this.handleInputChange} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="email">Adresse e-mail</label></td>
                    <td><input type="email" name="email" placeholder={this.state.user && this.state.user.email} value={this.state.email} onChange={this.handleInputChange} /></td>
                  </tr>
                </tbody>
              </Table>
              <Button className="btn-purple" variant='primary' type="button" onClick={this.updateProfile}><IoIosSave /> Enregistrer </Button>
            </form>


            <Table responsive>
              <thead>
                <tr><h5 >Modifier le mot de passe</h5>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><label htmlFor="firstname">Mot de passe actuel</label></td>
                  <td><input type="password" name="password" onChange={this.handleInputChange} /></td>
                </tr>
                <tr>
                  <td><label htmlFor="lastname">Nouveau mot de passe</label></td>
                  <td><input type="password" name="newPassword" onChange={this.handleInputChange} /></td>
                </tr>

              </tbody>
            </Table>
            <Button className="btn-purple" variant='primary' type="button" onClick={this.resetPassword}><IoIosSave /> Modifier le mot de passe </Button>

          </Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}><MdClose />  Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}