import React from "react";
import './troc.scss';
import macbookImg from "../../assets/macbook.png";
import {ContactInfo} from './contact-modal'
import {Button} from 'react-bootstrap';
import { FiInfo } from 'react-icons/fi';
import { IoMdContact } from 'react-icons/io';
import Grid from '@material-ui/core/Grid';
import './troc.scss';

export class ProductCard extends React.Component {
    constructor(props) {
	  super(props);

	  this.state = {addModalShow : false}

    }

    render() {

		let addModalClose=() => this.setState({addModalShow:false});

        return (
				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={macbookImg} alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">MacBook </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Macbook à troquer contre autre PC.</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>      
        );
      }
    }
