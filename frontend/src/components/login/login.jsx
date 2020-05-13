import React from "react";
import loginImg from "../../assets/login.svg";

export class Login extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
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
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn">
                Se connecter
              </button>
              <div className="msg">
                <text>Pas encore de compte ? </text>
              </div>
              <button type="button" className="btn">
                S'inscrire
              </button>  
            </div>
         
          </div>
        );
      }
    }
