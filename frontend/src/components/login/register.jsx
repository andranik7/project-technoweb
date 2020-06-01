import React from "react";
import loginImg from "../../assets/login.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import './connexion.scss'
import { Button } from 'react-bootstrap'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      email: "",
      password: "",
      kind: "Isepien"
    }
  }


  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
          <Grid item md={6} className="scrollable">
            <div className="base-container" ref={this.props.containerRef}>
              <div className="header">Inscription</div>
              <div className="content scrollable">
                <form>
                  <div className="form-group">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="prenom" placeholder="prénom" onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="nom" placeholder="nom " />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input type="email" name="email" placeholder="prenom.nom@isep.fr" onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" placeholder="mot de passe" onChange={this.handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="usertype">Type d'utilisateur</label>
                  </div>
                  <div className="form-group">
                    <div className="form-group2">


                      <FormControl component="fieldset">
                        <RadioGroup aria-label="kind" name="kind" value={this.state.kind} onChange={this.handleInputChange}>
                          <FormControlLabel value="Isepien" control={<Radio />} label="Isepien" />
                          <FormControlLabel value="Alumni" control={<Radio />} label="Alumni" />
                          <FormControlLabel value="Professeur" control={<Radio />} label="Professeur" />
                        </RadioGroup>
                      </FormControl>
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