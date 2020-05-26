import React from "react";
import forumImage from "../../static/images/forum.png"
import Typography from '@material-ui/core/Typography';
import './home.scss';
import Grid from '@material-ui/core/Grid';

export default class Presentation extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div class="container">
                <Grid container spacing={3} style={{ marginTop: "100px" }}>
                    <Grid item md={6}>
                        <img class="img" src={forumImage} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography class="home_msg" gutterBottom style={{ textAlign: "left", margin: "20px" }}>
                            <text class="blu">Blue</text><text class="sky">Sky</text> est un projet de plateforme collaborative proposant plusieurs services pour mieux s’inscrire dans la transition écologique.
                        </Typography>
                    </Grid>

                </Grid>
            </div>
        )
    }
}