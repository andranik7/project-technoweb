import React from "react";
import loginImg from "../../assets/login.svg";
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import './connexion.scss';
import { Button } from 'react-bootstrap'
import { ForgotPwd } from './forgot-pwd-modal';
import { IconContext } from "react-icons";
import { RiLockPasswordLine } from 'react-icons/ri';
import APIService from '../../services/APIService'


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.apiService = new APIService();
    this.state = { addModalShow: false, email: "", password: "" }

  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = () => {
    if (this.state.email.length > 4 && this.state.password.length > 5) {
      this.apiService.login(this.state.email, this.state.password).then(res => {
        console.log(res.data)
      })
    } else {
      alert("Merci de fournir un email valide et un mot de passe supérieur à 5 caractères")
    }
  }

  render() {

    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <div className="container">
        <Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ minHeight: '100px' }}>
          <Grid item md={6} >
            <div className="image">
              <img src={loginImg} />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="base-container" ref={this.props.containerRef}>
              <div className="header">
                <div class="icon">
                  <IconContext.Provider value={{ color: "white" }}>
                    <div> <RiLockPasswordLine style={{ backgroundColor: '#3f51b5', padding: "20px", borderRadius: "20px" }} /></div>
                  </IconContext.Provider>
                </div>
              Connexion
            </div>
              <div className="content">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input type="email" name="email" placeholder="prenom.nom@isep.fr" onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" placeholder="mot de passe" onChange={this.handleInputChange} />
                  </div>
                  <div className="remember" text-align="left">
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Se souvenir de moi"
                      text-align="left" />
                  </div>
                  <Button className="btn-purple" variant="primary" type="button" onClick={this.login}>Se connecter</Button>
                </form>
              </div>
              <div className="links">
                <Link href="#" onClick={() => this.setState({ addModalShow: true })}>
                  {"Mot de passe oublié ? "}
                  <ForgotPwd show={this.state.addModalShow} onHide={addModalClose}></ForgotPwd>
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