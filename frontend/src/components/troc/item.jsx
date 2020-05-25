import React from "react";
import './styleitem.scss';
import SearchBar from 'material-ui-search-bar';
import vaisselleImg from "../../assets/vaisselle.png";
import vaisselle2Img from "../../assets/vaisselle2.jpg";
import vaisselle3Img from "../../assets/vaisselle3.PNG";

import {Button, ButtonToolbar} from 'react-bootstrap';
import {Msg} from './msg'


export class Item extends React.Component {
    constructor(props) {
      super(props);

      this.state = {addModalShow : false}
        }

    
    render() {

        let addModalClose=() => this.setState({addModalShow:false});

        return (
            <div class="container" ref={this.props.containerRef}>
            <div class="top-container">
		          <p>Consultez les annonces :</p>
	        </div>
			<SearchBar
    			onChange={() => console.log('onChange')}
				onRequestSearch={() => console.log('onRequestSearch')}
				style={{
				margin: '0 auto',
				maxWidth: 800
    			}}
    		/>

          	<div class="section section-gray">
                <div class="section-content">
                    <div class="product-details">
                        <ul class="product-images">
                            <li class="preview"><img src={vaisselleImg} alt=""/></li>
                            <li><img src={vaisselleImg} alt="Img"/></li>
                            <li><img src={vaisselle2Img} alt="Img"/></li>
                            <li><img src={vaisselle3Img} alt="Img"/></li>
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
                                <ButtonToolbar>
                                    <Button className="btn" variant='primary' onClick={()=> this.setState({addModalShow: true})}> Troquer </Button>
                                    <Msg show={this.state.addModalShow} onHide={addModalClose}></Msg>           
                                </ButtonToolbar></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer">
		
            </div>
			</div>      
        );
      }
    }


    