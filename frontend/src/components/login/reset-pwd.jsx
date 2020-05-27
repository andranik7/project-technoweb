import React from "react";
import resetpwdImg from "../../assets/resetpwd.svg";
import Grid from '@material-ui/core/Grid';
import './connexion.scss';
import {Button} from 'react-bootstrap'
import {IoIosSave} from 'react-icons/io';

export class ResetPwd extends React.Component {
    constructor(props) {
      super(props);

      this.state = {addModalShow : false}

    }

    render() {

      let addModalClose=() => this.setState({addModalShow:false});

        return (
        <div className="container">
          <Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ minHeight: '100px' }}> 
            <Grid item md={6} >
              <div className="image">
                <img src={resetpwdImg}/>
              </div>
              </Grid>
            <Grid item md={6}>
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Réinitialisation mot de passe</div>
            <div className="content">
              <form>
                <div className="form-group">
                    <label htmlFor="password">Nouveau mot de passe</label>
                    <input type="password" name="password" placeholder="mot de passe" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirmer mot de passe</label>
                    <input type="password" name="password" placeholder="mot de passe" />
                </div>
                <Button className="btn-purple" variant="primary" type="submit" onClick=""><IoIosSave/>  Enregistrer</Button>
              </form>
            </div>            
          </div></Grid></Grid>
          </div>
        );
      }
    }

    export default ResetPwd;