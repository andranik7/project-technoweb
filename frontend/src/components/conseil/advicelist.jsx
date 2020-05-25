import React from "react";
import "./styleadviceslist.scss";
import SearchBar from 'material-ui-search-bar';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from './carousel';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddAdvice} from './addadvice'

export class Advices extends React.Component {
    constructor(props) {
      super(props);

    this.state = {addModalShow : false}

    }
    
    
    render() {
        let addModalClose=() => this.setState({addModalShow:false});

        return (
            <div class="container" ref={this.props.containerRef}>
                <div class="top-container">
	            	<h3>Bienvenue sur la page de conseils ! </h3>
		            <p>Consultez les conseils :</p>
	            </div>
                <div class="main-content">
                    <div><CarouselPage></CarouselPage></div>
                    <div class="add">
                        <ButtonToolbar>
                            <Button className="btn" variant='primary' onClick={()=> this.setState({addModalShow: true})}> <i class="fas fa-plus"> </i> Ajouter un conseil </Button>
                            <AddAdvice show={this.state.addModalShow} onHide={addModalClose}></AddAdvice>           
                        </ButtonToolbar></div>
                </div>
                <div class="footer">    
                </div>
            </div>

        );
    }
}
