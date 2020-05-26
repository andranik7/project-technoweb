import React from "react";
import './product.scss';
import SearchBar from 'material-ui-search-bar';
import vaisselleImg from "../../assets/vaisselle.png";
import vaisselle2Img from "../../assets/vaisselle2.jpg";
import vaisselle3Img from "../../assets/vaisselle3.PNG";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import {BsArrowRepeat} from 'react-icons/bs'
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Msg} from './troc-modal'
import womanSearchImg from "../../assets/woman_search.svg"


export class Product extends React.Component {
    constructor(props) {
      super(props);

      this.state = {addModalShow : false}
        }

    
    render() {

        let addModalClose=() => this.setState({addModalShow:false});

        return (
            <div class="container" ref={this.props.containerRef}>
            <div class="top-container">
	        </div>
          	<div class="section section-gray">
                <div class="section-content">
                    <div class="product-details">
                        <ul class="product-images">
                            <MDBContainer>
                                <MDBCarousel
                                activeItem={1}
                                length={3}
                                showControls={true}
                                showIndicators={true}
                                className="z-depth-1">
                                    <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView>
                                                <img src={vaisselleImg} alt="Img"/>
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView>
                                                <img src={vaisselle2Img} alt="Img"/>
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="3">
                                            <MDBView>
                                                <img src={vaisselle3Img} alt="Img"/>
                                            </MDBView>
                                        </MDBCarouselItem>
                                    </MDBCarouselInner>
                                </MDBCarousel>
                            </MDBContainer>
                        </ul>
                        <ul class="product-info">
                            <li class="product-name">Lot de vaisselle</li>
                            <li class="product-owner"><span>par </span><span class="owner">Alex Martin</span></li>
                            <li class="product-date"><span>le </span><span class="owner">25/02/2020</span></li>
                            <li class="product-attributes">
                                <ul class="fields">
                                    {/* <li>
                                        <div class="field-name">Etat :</div>
                                        <label>
                                            <input type="radio" name="condition"/> Neuf
                                        </label>
                                        <label>
                                            <input type="radio" name="condition"/> Presque neuf
                                        </label>
                                        <label>
                                            <input type="radio" name="size"/> Bon état
                                        </label>
                                        <label>
                                            <input type="radio" name="size"/> Etat moyen
                                        </label>
                                        <label>
                                            <input type="radio" name="size"/> Usé 
                                        </label>
                                    </li> */}
                                </ul>
                            </li>
                            <li class="product-description">
                                <p>J'échange un set de vaisselle blanc, presque neuf. Je l'ai acheté il y a  mois mais depuis j'ai refait ma déco : je ne l'aime plus.</p>
                                <p></p>
                            </li>
                            <li class="product-condition">
                                <div class="condition">Etat :</div>
                                <div class="condition">Bon </div>
                            </li>
                            <li class="product-addtocart">
                            {/*<div class="buttons">
                                <button class="btn">Echanger</button></div>*/}
                            <div class="buttons">
                                    <Button className="btn-purple" variant='primary' onClick={()=> this.setState({addModalShow: true})}><BsArrowRepeat/> Troquer </Button>
                                    <Msg show={this.state.addModalShow} onHide={addModalClose}></Msg>           
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer">
            <img  src={womanSearchImg} />
            <i>Vous ne trouvez pas votre bonheur ? Consultez les autres annonces :</i>
			<SearchBar
    			onChange={() => console.log('onChange')}
				onRequestSearch={() => console.log('onRequestSearch')}
				style={{
				margin: '0 auto',
				maxWidth: 800
    			}}
    		/>
            <div ></div>
            </div>
			</div>      
        );
      }
    }


    