import React from "react";
import loginImg from "../../assets/login.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import './connexion.scss';
import {Button} from 'react-bootstrap'

export class Login extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {

        return (
        <div className="container">
          <Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ minHeight: '100px' }}> 
            <Grid item md={6} >
              <div className="image">
                <img src={loginImg}/>
              </div>
              </Grid>
            <Grid item md={6}>
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Connexion</div>
            <div className="content">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Adresse e-mail</label>
                  <input type="email" name="email" placeholder="prenom.nom@isep.fr" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" name="password" placeholder="mot de passe" />
                </div>
                <div className="remember" text-align="left">
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Se souvenir de moi"
                    text-align="left" />
                </div>
                <Button className="btn-purple" variant="primary" type="submit">S'inscrire</Button>
              </form>
            </div>            
            <div className="links">
              <Link href="#" >
                {"Mot de passe oublié ? "}
              </Link> 
              <text>  |  </text>
              <Link href="#" > 
                {"Inscrivez-vous !"}
              </Link>               
            </div>
          </div></Grid></Grid>
          </div>
        );
      }
    }

    export default Login;