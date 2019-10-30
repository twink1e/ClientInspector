import * as React from 'react';
import * as model from '../model';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

export default function Filter() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
          id="name"
          label="Name"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Status</FormLabel>
          <FormGroup>
          {Object.keys(model.CustomerStatus).map (key =>
            <FormControlLabel
              control={<Checkbox/>}
              label={ capitalize(model.CustomerStatus[key]) }
              key = {key}
            />
          )}
          </FormGroup>
        </FormControl>
    </form>
  );
}

// helpers
function capitalize(str: String) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
