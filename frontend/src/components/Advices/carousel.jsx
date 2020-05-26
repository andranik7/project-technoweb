import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer,  MDBCard, MDBCardGroup, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText ,MDBIcon} from "mdbreact";
import {Button} from 'react-bootstrap'
import {BsHeartFill} from 'react-icons/bs';

const CarouselPage = () => {

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={true}
        className="">
        <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
                <MDBCardGroup>

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

                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Prendre le vélo pour aller en cours </p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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

                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Ne pas se doucher LOL</p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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

            </MDBCardGroup>
            <MDBCardGroup>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Faire du compost à l'ISEP</p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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
                    
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Faire pousser ses plantes aromates</p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Covoiturage !</p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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
            </MDBCardGroup>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBCardGroup>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Faire du compost à l'ISEP</p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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

                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Faire pousser ses plantes aromates</p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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

                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><p>Covoiturage !</p></MDBCardText>
                            <Button className="btn-purple" variant="primary"> <BsHeartFill/>  Aimer </Button>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-medium'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
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

            </MDBCardGroup>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;