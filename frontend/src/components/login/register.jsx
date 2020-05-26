import React from "react";
import loginImg from "../../assets/login.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import './connexion.scss'
import {Button} from 'react-bootstrap'

export class Register extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
          //
        <div className="container">
          <Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ height: '100%' }}> 
            <Grid item md={6} >
              <div className="image">
                <img src={loginImg} />
              </div>
              </Grid>
            <Grid item md={6} className = "scrollable">
            <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Inscription</div>
        <div className="content scrollable">
          <form>
            <div className="form-group">
              <label htmlFor="firstname">Prénom</label>
              <input type="text" name="firstname" placeholder="prénom" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Nom</label>
              <input type="text" name="lastname" placeholder="nom " />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" name="email" placeholder="prenom.nom@isep.fr" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" name="password" placeholder="mot de passe" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirmer mot de passe</label>
              <input type="password" name="password" placeholder="mot de passe" />
            </div>
            <div className="form-group">
              <label htmlFor="usertype">Type d'utilisateur</label>
            </div>
            <div className="form-group">
            <div className="form-group2">
              <div><label class="radio-inline"><input type="radio" name="usertype" value="isepien"/>Isepien</label></div>
              <div><label class="radio-inline"><input type="radio" name="usertype" value="alumni" />Alumni </label></div>
              <div><label class="radio-inline"><input type="radio" name="usertype" value="alumni" />Autre</label></div>
            </div>
            </div>
            <div className="form-group" text-align="left">
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
              text-align="left" />
            </div>
            <Button className="btn-purple" variant="primary" type="submit">S'inscrire</Button>
            <div className="links">
              <Link href="#">
                {"Déjà inscrit ?"}
              </Link>  
          </div>
        </form>
        </div>

      </div></Grid></Grid>
          </div>
        );
      }
    }


    export default Register;