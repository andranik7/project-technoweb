import React from "react";
import './troc.scss';
import SearchBar from 'material-ui-search-bar'
import macbookImg from "../../assets/macbook.png";
import vaisselleImg from "../../assets/vaisselle.png";
import {ContactInfo} from './contact-modal'
import {Button} from 'react-bootstrap';
import defaultImg from "../../assets/default-product-img.png";
import { FiInfo } from 'react-icons/fi';
import { IoMdContact } from 'react-icons/io';
import exchangeImg from "../../assets/exchange.svg"
import Grid from '@material-ui/core/Grid';
import {ProductCard} from './product-card';


export class ProductList extends React.Component {
    constructor(props) {
	  super(props);

	  this.state = {addModalShow : false}

    }

    render() {

		let addModalClose=() => this.setState({addModalShow:false});

        return (
          <div class="container" ref={this.props.containerRef}>
            <div class="header">
			<Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ minHeight: '100px' }}> 
            	<Grid item md={6} >
              		<div className="image">
                		<img src={exchangeImg} alt="Img"/>
              		</div>
            	</Grid>
            	<Grid item md={6} >	          	
					<h3>Bienvenue sur la page de troc ! </h3>
		        	<p>Consulte les annonces : </p>
				</Grid>
			</Grid>
	        </div>
			<SearchBar
    			onChange={() => console.log('onChange')}
				onRequestSearch={() => console.log('onRequestSearch')}
				style={{
				margin: '0 auto',
    			}}
    		/>
          	<div class="product-grid product-grid--flexbox">
			<div class="product-grid__wrapper">

				<ProductCard></ProductCard>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={vaisselleImg} alt="Img" class="product-grid__img" />	
						</div>
						<span class="product-grid__title">Lot vaisselle </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Vaisselle à troquer contre une chaise. L'une d'entre elle a un léger éclat sur le bord.</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={defaultImg} alt="Img" class="product-grid__img" />										
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description</p>
								<span className="product-grid__btn">
                                	<Button className="btn-purple" variant='primary'onClick={()=> this.setState({addModalShow: true})}><IoMdContact/>  Contacter </Button>
                                    <ContactInfo show={this.state.addModalShow} onHide={addModalClose}></ContactInfo></span>          
								<span className="product-grid__btn"><Button className="btn-white" variant="outline-secondary"><FiInfo/>  Plus d'infos </Button></span>
							</div>
						</div>
					</div>
				</div>
				
			</div>		
			</div>
			<div className="footer">

        	</div>
          </div>
      
        );
      }
    }
