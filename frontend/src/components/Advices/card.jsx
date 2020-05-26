import React from "react";
import {MDBContainer, MDBCard, MDBCardGroup, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn ,MDBIcon} from "mdbreact";
{/*import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';*/}

const Card = () => {
  return (
        <MDBCard >
                <MDBCardBody>
                            <MDBCardTitle>MDBCard title</MDBCardTitle>
                            <MDBCardText> Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                            <MDBBtn color="primary">MDBBtn</MDBBtn>
                </MDBCardBody>
                <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 05/10/2015
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 12
                                </a>
                                </li>
                                    <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-down" /> 3
                                </a>
                                 </li>
                            </ul>
                            <ul>
                                <p color="white"> _____ </p>
                            </ul>
                </div>
        </MDBCard>
  );
}

export default Card;