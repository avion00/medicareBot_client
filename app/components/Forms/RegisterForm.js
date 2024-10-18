import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Icon from '@mui/material/Icon';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { injectIntl, FormattedMessage } from 'react-intl';
import { closeMsgAction } from 'enl-redux/actions/authActions';
import { CheckboxRedux, TextFieldRedux } from './ReduxFormMUI';
import MessagesForm from './MessagesForm';
import messages from './messages';
import useStyles from './user-jss';
import './RegisterForm.css';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Passwords dont match';
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterForm(props) {
  const { classes, cx } = useStyles();
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const [usage, setUsage] = React.useState('');

  const handleChange = (event) => {
    setUsage(event.target.value);
  };
  const [value, setValue] = useState();

  const {
    handleSubmit,
    pristine,
    submitting,
    intl,
    messagesAuth,
    closeMsg,
    loading,
  } = props;

  return (
    <Paper className={classes.sideWrap}>
      {!mdUp && (
        <div className={classes.headLogo}>
          <NavLink to="/" className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </NavLink>
        </div>
      )}
      <div className={classes.topBar}>
        <Typography variant="h4" className={classes.title}>
          <FormattedMessage {...messages.register} />
        </Typography>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/login">
          <Icon className={cx(classes.icon, classes.signArrow)}>arrow_forward</Icon>
          <FormattedMessage {...messages.toAccount} />
        </Button>
      </div>
      {
        messagesAuth !== null || ''
          ? (
            <MessagesForm
              variant="error"
              className={classes.msgUser}
              message={messagesAuth}
              onClose={closeMsg}
            />
          )
          : ''
      }
      <section>
        <form onSubmit={handleSubmit}>
          <div className='user_name' style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '.75em',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div className='first_name' style={{
              Width: '',
              flexGrow: '1'
            }}>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="first_name"
                  component={TextFieldRedux}
                  placeholder={intl.formatMessage(messages.loginFieldFirstName)}
                  label= {intl.formatMessage(messages.loginFieldFirstName)}
                  required
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div className='last_name' style={{
              Width: '',
              flexGrow: '1'
            }}>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="last_name"
                  component={TextFieldRedux}
                  placeholder={intl.formatMessage(messages.loginFieldLastName)}
                  label= {intl.formatMessage(messages.loginFieldLastName)}
                  required
                  className={classes.field}
                />
              </FormControl>
            </div>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <Field
                name="name"
                component={TextFieldRedux}
                placeholder={intl.formatMessage(messages.loginFieldName)}
                label={intl.formatMessage(messages.loginFieldName)}
                required
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <Field
                name="email"
                component={TextFieldRedux}
                placeholder={intl.formatMessage(messages.loginFieldEmail)}
                label={intl.formatMessage(messages.loginFieldEmail)}
                required
                validate={[required, email]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div style={{
            marginTop: '.85em',
          }}>
            <FormControl variant="standard" className={classes.formControl}>
              <PhoneInput
                placeholder="Enter phone number"
                Country="US"
                value={value}
                onChange={setValue}
                name="phone_number"
                component={TextFieldRedux}
                required
                validate={[required, email]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <Field
                name="Company_name"
                component={TextFieldRedux}
                placeholder={intl.formatMessage(messages.loginFieldCompanyName)}
                label= {intl.formatMessage(messages.loginFieldCompanyName)}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '.75em',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{
              minWidth: '',
              flexGrow: 1,
            }}>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="city"
                  component={TextFieldRedux}
                  placeholder= {intl.formatMessage(messages.loginFieldCity)}
                  label= {intl.formatMessage(messages.loginFieldCity)}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div style={{
              minWidth: '',
              flexGrow: 1,
            }}>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="state"
                  component={TextFieldRedux}
                  placeholder= {intl.formatMessage(messages.loginFieldState)}
                  label= {intl.formatMessage(messages.loginFieldState)}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div style={{
              minWidth: '',
              flexGrow: 1,
            }}>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="country"
                  component={TextFieldRedux}
                  placeholder= {intl.formatMessage(messages.loginFieldCountry)}
                  label= {intl.formatMessage(messages.loginFieldCountry)}
                  className={classes.field}
                />
              </FormControl>
            </div>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel id="medicarebot_usage">MedicareBot Usage</InputLabel>
              <Select
                labelId="medicarebot_usage"
                id="medicarebot_usage"
                // value={usage}    // this should be for backend set 1, 2, 3, as default
                label="usage"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Personal Use</MenuItem>
                <MenuItem value={2}>for client</MenuItem>
                <MenuItem value={3}>as an Agent</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type="password"
                  label={intl.formatMessage(messages.loginFieldPassword)}
                  required
                  validate={[required, passwordsMatch]}
                  className={classes.field}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="passwordConfirm"
                  component={TextFieldRedux}
                  type="password"
                  label={intl.formatMessage(messages.loginFieldRetypePassword)}
                  required
                  validate={[required, passwordsMatch]}
                  className={classes.field}
                />
              </FormControl>
            </Grid>
          </Grid>
          <div>
            <FormControlLabel control={<Field name="checkbox" required component={CheckboxRedux} className={classes.agree} />} label={intl.formatMessage(messages.aggree)} />
            <a href="/terms-conditions" target="_blank" className={classes.link}>
              <FormattedMessage {...messages.terms} />
            </a>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth disabled={loading} color="primary" type="submit">
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              <FormattedMessage {...messages.loginButtonContinue} />
              {!loading && <ArrowForward className={cx(classes.rightIcon, classes.iconSmall, classes.signArrow)} disabled={submitting || pristine} />}
            </Button>
          </div>
        </form>
      </section>
      <h5 className={classes.divider}>
        <span>
          <FormattedMessage {...messages.registerOr} />
        </span>
      </h5>
      <section className={classes.socmedSideLogin}>
        <Button
          variant="contained"
          className={classes.redBtn}
          type="button"
          size="large"
        >
          <i className="ion-logo-google" />
          Google
        </Button>
        <Button
          variant="contained"
          className={classes.cyanBtn}
          type="button"
          size="large"
        >
          <i className="ion-logo-twitter" />
          Twitter
        </Button>
        <Button
          variant="contained"
          className={classes.greyBtn}
          type="button"
          size="large"
        >
          <i className="ion-logo-github" />
          Github
        </Button>
      </section>
    </Paper>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

RegisterForm.defaultProps = {
  messagesAuth: null
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm',
  enableReinitialize: true,
})(RegisterForm);

const mapDispatchToProps = {
  closeMsg: closeMsgAction
};

const mapStateToProps = state => ({
  messagesAuth: state.authReducer.message,
  loading: state.authReducer.loading
});

const RegisterFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormReduxed);

export default injectIntl(RegisterFormMapped);
