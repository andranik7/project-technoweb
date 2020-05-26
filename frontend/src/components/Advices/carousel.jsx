import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer,  MDBCard, MDBCardGroup, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn ,MDBIcon} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
                            <MDBCardText><h5>Fermer le robinet</h5></MDBCardText>
                            <MDBBtn class="btn" name="btn" color="primary" onclick="setColor('btn','#101010')"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
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
                            </ul>
                            <ul>
                                <p color="white"> . </p>
                            </ul>
                        </div>
                    </MDBCard>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><h5>Prendre le vélo pour aller en cours</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Julie Latour
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 02/03/2020
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 24
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
                            </ul>
                        </div>
                    </MDBCard>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><h5>Ne pas se doucher LOL</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 06/01/2020
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 68
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
                            </ul>
                        </div>
                    </MDBCard>
            </MDBCardGroup>
            <MDBCardGroup>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><h5>Faire du compost à l'ISEP</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 23/12/2019
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 3
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
                            </ul>
                        </div>
                    </MDBCard>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><h5>Faire pousser ses plantes aromates</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 05/12/2019
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 32
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
                            </ul>
                        </div>
                    </MDBCard>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><h5>Covoiturage !</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 05/12/2019
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 12
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
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
                            <MDBCardText><h5>Faire du compost à l'ISEP</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 23/12/2019
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 3
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
                            </ul>
                        </div>
                    </MDBCard>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><h5>Faire pousser ses plantes aromates</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 05/12/2019
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 32
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
                            </ul>
                        </div>
                    </MDBCard>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText><h5>Covoiturage !</h5></MDBCardText>
                            <MDBBtn  class="btn" color="primary"> <MDBIcon icon="thumbs-up" /> Aimer</MDBBtn>
                        </MDBCardBody>
                        <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
                            <ul className='list-unstyled list-inline font-small'>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="user" className='mr-1' /> Alex Martin
                                </li>
                                <li className='list-inline-item white-text'>
                                    <MDBIcon icon="clock" /> 05/12/2019
                                </li>
                                <li className='list-inline-item '>
                                <a href='#!' className='white-text'>
                                    <MDBIcon icon="thumbs-up" /> 12
                                </a>
                                </li>
                            </ul>
                            <ul>
                                <p color="white"> . </p>
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