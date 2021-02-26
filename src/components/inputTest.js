import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
   
    <form className={classes.root} noValidate autoComplete="off">
		 <Typography component="h1" variant="h6" color="inherit" gutterBottom noWrap>
            Required
         </Typography>
      <div>
        <TextField
          disabled
          id="spec-version"
          label="Spec Version"
          defaultValue="2.1"
          variant="outlined"	  
        />
        <TextField
          required
          id="id"
          label="ID"
          defaultValue=""
          variant="outlined"
		  InputLabelProps={{
            shrink: true,
          }}
        
        />
        <TextField
          required
          id="name"
          label="Name"
          defaultValue=""
          variant="outlined"
		   InputLabelProps={{
            shrink: true,
          }}
        />
        
      </div>
	     <Typography component="h1" variant="h6" color="inherit" gutterBottom noWrap>
            Optional
         </Typography>
		 
	
		  <TextField
          id="external-references"
          label="External References"
          multiline
          rows={5}
          defaultValue=""
          variant="outlined"
		   helperText="Seperate each reference with a comma. "
		   InputLabelProps={{
            shrink: true,
          }}
        />
		
		<TextField
          id="description"
          label="Description"
          multiline
          rows={5}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    </form>
  );
}