import React from "react";
import loginImg from "../../assets/login.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class Login extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          //
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Connexion</div>
            <div className="content">
              <div className="image">
                <img src={loginImg} />
              </div>
              <div className="form">
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
                    text-align="left" /></div>
              </div>
            </div>            
            <div className="footer">
              <button type="button" className="btn">
                Se connecter
              </button>
              <div className="links">
              <Link href="#" >
                {"Mot de passe oublié ? "}
              </Link> 
              <text>  |  </text>
              <Link href="#" > 
                {"Inscrivez-vous !"}
              </Link>               
              </div>
 
            </div>
         
          </div>
        );
      }
    }
