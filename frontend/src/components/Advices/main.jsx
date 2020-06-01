import React from "react";
import "./advices.scss";
import SearchBar from 'material-ui-search-bar';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from './carousel';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddAdvice } from './add-advice'
import manIdeaImg from "../../assets/man_idea.svg";
import Grid from '@material-ui/core/Grid';
import APIService from '../../services/APIService'


export class AdviceList extends React.Component {
    constructor(props) {
        super(props);
        this.apiService = new APIService();
        this.state = { addModalShow: false, user: null, advices: [] }

    }


    componentDidMount() {
        let user = localStorage.user;
        if (user) {
            this.setState({ user: JSON.parse(user) }, () => {
                this.apiService.getAdvices().then(res => {
                    if (res.data.success) {
                        this.setState({ advices: res.data.advices })
                    }
                })
            })
        } else {
            window.location = "/"
        }
    }


    render() {
        let addModalClose = () => this.setState({ addModalShow: false });

        return (
            <div class="container" ref={this.props.containerRef}>
                <div class="header">
                    <Grid container spacing={10} direction="rows" alignItems="center" justify="center" style={{ minHeight: '100px' }}>
                        <Grid item md={6} >
                            <div className="image">
                                <img src={manIdeaImg} alt="Img" />
                            </div>
                        </Grid>
                        <Grid item md={6} >
                            <h3>Bienvenue sur la page de conseil ! </h3>
                            <p>Consulte les conseils <text className="sky">;-)</text></p>
                            <div class="add">
                                et ... <Button className="btn-purple" variant='primary' onClick={() => this.setState({ addModalShow: true })}> <i class="fas fa-plus"> </i> Ajouter un conseil </Button>
                                <AddAdvice show={this.state.addModalShow} onHide={addModalClose} user={this.state.user}></AddAdvice>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div class="main-content">
                    <div><CarouselPage advices={this.state.advices}></CarouselPage></div>
                </div>
            </div>

        );
    }
}
