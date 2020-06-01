import React, { Component } from 'react'
import './index.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profileImg from "../../assets/profile.svg";
import manIdeaImg from "../../assets/man_idea.svg";
import exchangeImg from "../../assets/exchange.svg"


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

    }

    componentDidMount() {
        let user = localStorage.user;
        if (user) {
            this.setState({ user: JSON.parse(user) })
        } else {
            window.location = "/"
        }
    }


    render() {
        return (
            <div>
                <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: "10px" }}>
                    Bienvenue sur votre dashboard {this.state.user && this.state.user.prenom}!
                </Typography>
                <Grid container spacing={3}>
                    <Grid item md={3}>
                        <Card style={{ margin: "20px" }} onClick={() => this.props.history.push('/profile')}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "140px" }}
                                    image={profileImg}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mon profil
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Consulter mon profil, modifier mes informations, mot de passe et bien plus.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card style={{ margin: "20px" }} onClick={() => this.props.history.push('/conseils')}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "140px" }}
                                    image={manIdeaImg}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Conseils
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Consulter les conseils, demandez des conseils et bien plus

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={3}>

                        <Card style={{ margin: "20px" }} onClick={() => this.props.history.push('/product')}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "140px" }}
                                    image={profileImg}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Produits
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Consulter les produits, ajouter des produits et échanger des produits
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card style={{ margin: "20px" }} onClick={() => this.props.history.push('/troc')}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "140px" }}
                                    image={exchangeImg}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Troc
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Consulter les trocs, créer un troc et bien plus

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
