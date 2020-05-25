import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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

  return (
    <div className={classes.root}>


        <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h4" gutterBottom>
        Publier une annonce ?
      </Typography>
      <br></br>
    <TextField id="standard-basic" label="Titre de l'annonce" />
    <br></br>
    <TextField id="standard-basic" label="Prix" />
    <br></br>
    <TextField
          id="standard-multiline-static"
          label="Description de l'annonce"
          multiline
          rows={4}
          defaultValue=""
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
      <div>Une photo de l'annonce?</div>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <br></br>

      <Button variant="contained" color="primary" type="submit">
        publier l'annonce
      </Button>

      </form>
    </div>
    
  );
}
