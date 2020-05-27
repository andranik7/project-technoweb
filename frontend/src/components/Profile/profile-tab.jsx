import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon, MDBCard, MDBCardGroup, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText} from "mdbreact";
import Grid from '@material-ui/core/Grid';
import {Button} from 'react-bootstrap'
import {BsHeartFill} from 'react-icons/bs';
import {ProductCard} from '../Troc/product-card';
import AdviceCard from '../Advices/advice-card';
import {ModifyPwd} from './modify-password-modal';
import pwdImg from "../../assets/password.svg";
import {BsArrowRepeat,BsShieldLock} from 'react-icons/bs';
import {GoLightBulb} from 'react-icons/go';
import {RiLockPasswordLine} from 'react-icons/ri';

class ProfileTab extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    constructor(props) {
        super(props);
  
        this.state = {addModalShow : false}
  
      }

    render() {

      let addModalClose=() => this.setState({addModalShow:false});

      return (
        <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                <BsArrowRepeat/>  Annonces publiées
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              <GoLightBulb/>  Conseils publiés 
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
              <BsShieldLock/>  Sécurité
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2"></p>
            <div class="product-grid product-grid--flexbox">
			    <div class="product-grid__wrapper">
                   <ProductCard></ProductCard> 
                </div>
            </div>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
                <MDBCardGroup>
                    <AdviceCard></AdviceCard>
                    <AdviceCard></AdviceCard>
                </MDBCardGroup>
            </p>
            <p>
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ minHeight: '100px' }}> 
            	<Grid item md={6} >
                    <div className="image">
                		<img src={pwdImg} alt="Img" style={{ width: '400px' }}/>
              		</div>
            	</Grid>
            	<Grid item md={6} >
                    <p className="mt-2">
                        La sécurité de ton compte est importante ! Choisi un mot de passe fort et complexe.
                    </p>
                </Grid>
            </Grid>
            <Button className="btn-purple" variant='primary' onClick={()=> this.setState({addModalShow: true})}> <RiLockPasswordLine/>  Modifier mot de passe </Button>
            <ModifyPwd show={this.state.addModalShow} onHide={addModalClose}></ModifyPwd>   
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default ProfileTab;