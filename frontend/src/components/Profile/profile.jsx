import React from "react";
import profileImg from "../../assets/profile.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TiPencil } from 'react-icons/ti';
import Grid from '@material-ui/core/Grid';
import { Button, Table } from 'react-bootstrap';
import { ModifyProfile } from './modify-profile-modal';
import ProfileTab from './profile-tab';
import './profile.scss'

export class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = { addModalShow: false, user: null }

    }


    componentDidMount() {
        let user = localStorage.user;
        if (user) {
            this.setState({ user: JSON.parse(user) })
        } else {
            window.location = "/"
        }
    }

    render() {

        let addModalClose = () => this.setState({ addModalShow: false });

        return (
            <div className="container">
                <div className="header">
                    <h3>Profil </h3>
                    <p>Bienvenue sur ton profil ! <text className="sky">;-)</text></p>
                </div>
                <div className="top-container">
                    <Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ minHeight: '100px' }}>
                        <Grid item md={6} >
                            <div className="image">
                                <img src={profileImg} alt="Img" />
                            </div>
                        </Grid>
                        <Grid item md={6} >
                            <div className="userinfo">
                                <Table responsive>
                                    <thead>
                                        <tr><h5 >{this.state.user && (this.state.user.prenom + " " + this.state.user.nom)}</h5></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="firstname">Prénom</label></td>
                                            <td>{this.state.user && this.state.user.prenom}</td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="lastname">Nom</label></td>
                                            <td>{this.state.user && this.state.user.nom}</td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="email">Adresse e-mail</label></td>
                                            <td>{this.state.user && this.state.user.email}</td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="email">Type de compte</label></td>
                                            <td>{this.state.user && this.state.user.kind}</td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="cphone">N° de téléphone</label></td>
                                            <td>0767767777</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div class="modify">
                                    <Button className="btn-purple" variant='primary' onClick={() => this.setState({ addModalShow: true })}> <TiPencil />  Modifier </Button>

                                    <ModifyProfile show={this.state.addModalShow} onHide={addModalClose}></ModifyProfile>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="base-container">
                    <ProfileTab></ProfileTab>
                </div>
            </div>
        );
    }
}

export default Profile;