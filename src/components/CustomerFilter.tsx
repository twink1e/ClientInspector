import * as React from 'react';
import { connect } from 'react-redux';
import * as model from '../model';

import { setNameFilter, setEmailFilter, setStatusFilter } from '../redux/actions';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
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
});

const dispatchProps = {
  setName: setNameFilter,
  setEmail: setEmailFilter,
  setStatus: setStatusFilter
};

type Props = {
  setName: (name: string) => void,
  setEmail: (email: string) => void,
  setStatus: (status: model.CustomerStatus, checked: boolean) => void
} & WithStyles<typeof styles>;

class CustomerFilter extends React.Component<Props> {

  render() {
    const { classes, setName, setEmail, setStatus } = this.props;

    return(
    <form className={classes.container} noValidate autoComplete='off'>
      <TextField
          id='name'
          label='Name'
          type='search'
          onChange={e => setName(e.target.value)}
          className={classes.textField}
          margin='normal'
        />
        <TextField
          id='email'
          label='Email'
          type='search'
          onChange={e => setEmail(e.target.value)}
          className={classes.textField}
          margin='normal'
        />
        <FormControl component='fieldset' className={classes.formControl}>
          <FormLabel component='legend'>Status</FormLabel>
          <FormGroup>
          {Object.keys(model.CustomerStatus).map (key =>
            <FormControlLabel
              control={<Checkbox defaultChecked={true} onChange={ e => setStatus(model.CustomerStatus[key], e.target.checked)}/>}
              label={ capitalize(model.CustomerStatus[key]) }
              key = {key}
            />
          )}
          </FormGroup>
        </FormControl>
    </form>
  );}
}

export default connect(
  null,
  dispatchProps
)(withStyles(styles)(CustomerFilter));

// helpers
const capitalize = (str: String) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
