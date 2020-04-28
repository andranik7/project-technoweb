import React from "react";
import forumImage from "../../static/images/forum.png"
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
export default class Presentation extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Grid container spacing={3} style={{ marginTop: "100px" }}>
                    <Grid item md={6}>
                        <img src={forumImage} style={{ width: "100%" }} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h5" gutterBottom style={{ textAlign: "left", margin: "20px" }}>
                            BlueSky est un projet de plateforme collaborative proposant plusieurs services pour mieux s’inscrire dans la transition écologique.
                        </Typography>
                    </Grid>

                </Grid>

            </div>
        )
    }
}