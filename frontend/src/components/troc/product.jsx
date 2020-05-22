import React from "react";
import loginImg from "../../assets/login.svg";
import './style.scss';
import SearchBar from 'material-ui-search-bar'


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
							<img src="" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>
				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>

				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">			
							<img src="https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg" alt="Img" class="product-grid__img" />
						</div>
						<span class="product-grid__title">Product title</span>
						<span class="product-grid__price">1.399€</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
								<span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
								<span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
							</div>
						</div>
					</div>
				</div>
			</div>		
		</div>
          </div>
      
        );
      }
    }
