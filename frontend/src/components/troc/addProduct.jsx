import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import APIService from '../../services/APIService'



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function UploadButtons() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [titre, setTitre] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState(null)
    const apiService = new APIService();

    useEffect(() => {
        let u = localStorage.user;
        if (u) {
            setUser(JSON.parse(u))
        } else {
            window.location = "/"
        }
    }, [])

    const onAddProduct = () => {
        apiService.addProduct(titre, prix, description, user._id).then(res => {
            if (res.data.success) {
                alert("Votre produit a bien été ajouté")
            } else {
                alert(res.data.message)
            }
        })
    }
    return (
        <div className={classes.root}>


            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="h4" gutterBottom>
                    Ajouter un produit
                </Typography>
                <br></br>
                <TextField id="standard-basic" label="Titre de l'annonce" onChange={(e) => setTitre(e.target.value)} />
                <br></br>
                <TextField id="standard-basic" label="Prix" onChange={(e) => setPrix(e.target.value)} />
                <br></br>
                <TextField
                    id="standard-multiline-static"
                    label="Description de l'annonce"
                    multiline
                    rows={4}
                    defaultValue=""
                    onChange={(e) => setDescription(e.target.value)}
                />





                <br></br>

                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />

                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <div>Une photo du produit ?</div>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <br></br>

                <Button variant="contained" color="primary" type="button" onClick={onAddProduct}>
                    Ajouter le produit
                </Button>

            </form>
        </div>

    );
}
