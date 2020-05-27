import React from "react";
import {MDBContainer, MDBCard, MDBCardGroup, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn ,MDBIcon} from "mdbreact";
import {Button} from 'react-bootstrap'
import {BsHeartFill} from 'react-icons/bs';import './advices.scss';

const AdviceCard = () => {
  return (
    <MDBCard class="card">
    <MDBCardBody>
        <MDBCardTitle></MDBCardTitle>
        <MDBCardText><p>Fermer le robinet</p></MDBCardText>
        <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
    </MDBCardBody>
    <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
        <ul className='list-unstyled list-inline font-medium'>
            <li className='list-inline-item white-text'>
                <MDBIcon icon="user" className='mr-1' /> par <span class="username"> Alex Martin</span> 
            </li>
        </ul>
        <ul className ='list-unstyled list-inline font-small'>
            <li className='list-inline-item white-text'>
                <MDBIcon icon="clock" /> 05/10/2015
            </li>
            <li className='list-inline-item red' >
                <BsHeartFill/> 12
            </li>
        </ul>
    </div>
    </MDBCard>
  );
}

export default AdviceCard;