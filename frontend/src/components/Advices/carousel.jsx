import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBCard, MDBCardGroup, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";
import { Button } from 'react-bootstrap'
import { BsHeartFill } from 'react-icons/bs';
import AdviceCard from './advice-card';


const CarouselPage = (props) => {

    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={2}
                showControls={true}
                showIndicators={true}
                className="">
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBCardGroup>


                            {props.advices.map((advice, index) => (
                                <MDBCard key={index}>
                                    <MDBCardBody>
                                        <MDBCardTitle></MDBCardTitle>
                                        <MDBCardText><p>{advice.text}</p></MDBCardText>
                                        <Button className="btn-purple" variant="primary" onClick={() => { }} type="button"> <BsHeartFill />  Aimer </Button>
                                    </MDBCardBody>
                                    <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                                        <ul className='list-unstyled list-inline font-medium'>
                                            <li className='list-inline-item white-text'>
                                                <MDBIcon icon="user" className='mr-1' /> {advice.proprietaire.prenom} {advice.proprietaire.nom}
                                            </li>
                                        </ul>
                                        <ul className='list-unstyled list-inline font-small'>
                                            <li className='list-inline-item white-text'>
                                                <MDBIcon icon="clock" /> 05/10/2015
                                        </li>
                                            <li className='list-inline-item red' >
                                                <BsHeartFill /> 12
                                        </li>
                                        </ul>
                                    </div>
                                </MDBCard>
                            ))}




                        </MDBCardGroup>

                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;