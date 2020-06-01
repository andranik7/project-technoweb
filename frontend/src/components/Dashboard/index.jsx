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
                    <Grid item xs={3}>
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
                    <Grid item xs={3}>
                        <Card style={{ margin: "20px" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>

                        <Card style={{ margin: "20px" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{ margin: "20px" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
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
