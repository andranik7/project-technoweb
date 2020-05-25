import React from "react";
import './styleproduct.scss';
import SearchBar from 'material-ui-search-bar'
import macbookImg from "../../assets/macbook.png";
import vaisselleImg from "../../assets/vaisselle.png";
import vaisselle2Img from "../../assets/vaisselle2.jpg";
import vaisselle3Img from "../../assets/vaisselle3.PNG";


export class Product extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {

        return (
          <div class="container" ref={this.props.containerRef}>
            <div class="desc">
	          	<h1>Bienvenue sur la page de troc ! </h1>
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
          	<div class="product-grid product-grid--flexbox">
			<div class="product-grid__wrapper">
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
								<span class="product-grid__btn product-grid__contact"><i class="fa fa-cart-arrow-down"></i> Contacter</span>				
								<span class="product-grid__btn product-grid__info"><i class="fa fa-eye"></i> Plus d'infos </span>
							</div>
						</div>
					</div>
				</div>
				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src={vaisselleImg} alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Lot de vaisselle </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Vaisselle à troquer contre chaise.</p>
								<span class="product-grid__btn product-grid__contact"><i class="fa fa-cart-arrow-down"></i> Contacter</span>				
								<span class="product-grid__btn product-grid__info"><i class="fa fa-eye"></i> Plus d'infos </span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description.</p>
								<span class="product-grid__btn product-grid__contact"><i class="fa fa-cart-arrow-down"></i> Contacter</span>				
								<span class="product-grid__btn product-grid__info"><i class="fa fa-eye"></i> Plus d'infos </span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description.</p>
								<span class="product-grid__btn product-grid__contact"><i class="fa fa-cart-arrow-down"></i> Contacter</span>				
								<span class="product-grid__btn product-grid__info"><i class="fa fa-eye"></i> Plus d'infos </span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description.</p>
								<span class="product-grid__btn product-grid__contact"><i class="fa fa-cart-arrow-down"></i> Contacter</span>				
								<span class="product-grid__btn product-grid__info"><i class="fa fa-eye"></i> Plus d'infos </span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Nom du produit </span>
						<span class="product-grid__price"></span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Description.</p>
								<span class="product-grid__btn product-grid__contact"><i class="fa fa-cart-arrow-down"></i> Contacter</span>				
								<span class="product-grid__btn product-grid__info"><i class="fa fa-eye"></i> Plus d'infos </span>
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
