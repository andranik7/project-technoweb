import React from "react";
import loginImg from "../../assets/login.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Inscription</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
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
            <div className="radio">
              <div className="abc">
              <label htmlFor="usertype">Type d'utilisateur </label>
              </div>
              <div className="abc">
              <input type="radio" name="usertype" value="isepien"/>
               Isépien
              <input type="radio" name="usertype" value="alumni" />
               Alumni
              <input type="radio" name="usertype" value="autre" />
               Autre
              </div>
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
            S'inscrire
          </button>
          <div className="links">
              <Link href="#">
                {"Déjà incrit ?"}
              </Link>  
          </div>
        </div>
      </div>
    );
  }
}
