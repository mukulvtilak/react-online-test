/**
 * Sign Up page (Register)
 */
import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DatePicker } from 'material-ui-pickers';
import moment from 'moment';
import FullScreenDialog from '../../components/FullScreenDialogue/FullScreenDialog';

// components
import { SessionSlider } from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
  signupUserInFirebase,
  signinUserWithFacebook,
  signinUserWithGoogle,
  signinUserWithGithub,
  signinUserWithTwitter
} from 'Actions';

class StudentDetails extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    selectedDate: moment(),
  }

  /**
   * On User Signup
   */
  onUserSignUp() {
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      this.props.signupUserInFirebase({ email, password }, this.props.history);
    }
  }

  handleDateChange = (date) => {
    console.log(date);
    this.setState({ selectedDate: date });
  };

  render() {
    const { name, email, password } = this.state;
    const { loading } = this.props;
    return (
      // <QueueAnim type="bottom" duration={1000}>
      <div className="rct-session-wrapper">
        {loading &&
          <LinearProgress />
        }
        <AppBar position="static" className="session-header">
          <Toolbar>
            <div className="container">
              <div className="d-flex justify-content-between">
                <div className="session-logo">
                  <Link to="/">
                    <img src={AppConfig.appLogo} alt="session-logo" width="110" height="35" />
                  </Link>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <div className="session-inner-wrapper">
          <div className="container">
            <div className="row row-eq-height">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="session-body text-center">
                  <div className="session-head mb-15">
                    <h2>Get started with {AppConfig.brandName}</h2>
                  </div>
                  <Form>
                    <div className="row">
                      <div className="col-md-4">
                        <FormGroup className="has-wrapper">
                          <Input type="text" value={name} name="user-name" id="user-name" className="has-input input-lg" placeholder="First Name" onChange={(e) => this.setState({ name: e.target.value })} />
                          <span className="has-icon"><i className="ti-user"></i></span>
                        </FormGroup>
                      </div>
                      <div className="col-md-4">
                        <FormGroup className="has-wrapper">
                          <Input type="text" value={name} name="user-name" id="user-name" className="has-input input-lg" placeholder="Middle Name" onChange={(e) => this.setState({ name: e.target.value })} />
                          <span className="has-icon"><i className="ti-user"></i></span>
                        </FormGroup>
                      </div>
                      <div className="col-md-4">
                        <FormGroup className="has-wrapper">
                          <Input type="text" value={name} name="user-name" id="user-name" className="has-input input-lg" placeholder="Last Name" onChange={(e) => this.setState({ name: e.target.value })} />
                          <span className="has-icon"><i className="ti-user"></i></span>
                        </FormGroup>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-md-4">
                        <FormControl fullWidth>
                          <InputLabel htmlFor="age-simple">Gender</InputLabel>
                          {/* <Select value={this.state.age} onChange={this.handleChange} */}
                          <Select value={"Transgender"}
                            inputProps={{ name: 'Gender' }}>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Transgender"}>Transgender</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-md-4">
                        <FormControl fullWidth>
                          <InputLabel htmlFor="age-simple">Marital Status</InputLabel>
                          {/* <Select value={this.state.age} onChange={this.handleChange} */}
                          <Select value={"Single"}
                            inputProps={{ name: 'MaritalStatus'}}>
                            <MenuItem value={"Single"}>Single</MenuItem>
                            <MenuItem value={"Married"}>Married</MenuItem>
                            <MenuItem value={"Divorced"}>Divorced</MenuItem>
                            <MenuItem value={"Widowed"}>Widowed</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-md-4">
                        <FormControl fullWidth>
                          <div className="rct-picker">
                            <DatePicker
                              label="Choose a date"
                              value={this.state.selectedDate}
                              onChange={this.handleDateChange}
                              animateYearScrolling={false}
                              leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                              rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                              fullWidth
                            />
                          </div>
                        </FormControl>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                      <FormGroup className="has-wrapper">
                          <Input type="text" value={name} name="user-name" id="contact" className="has-input input-lg" placeholder="Contact Number" onChange={(e) => this.setState({ name: e.target.value })} />
                          <span className="has-icon"><i className="ti-mobile"></i></span>
                        </FormGroup>
                      </div>
                      <div className="col-md-6">
                        <FormGroup className="has-wrapper">
                          <Input type="mail" value={email} name="user-mail" id="user-mail" className="has-input input-lg" placeholder="Enter Email Address" onChange={(e) => this.setState({ email: e.target.value })} />
                          <span className="has-icon"><i className="ti-email"></i></span>
                        </FormGroup>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                      <FormGroup className="has-wrapper">
                          <Input type="text" value={name} name="user-address1" id="addressLine1" className="has-input input-lg" placeholder="Address Line 1" onChange={(e) => this.setState({ name: e.target.value })} />
                          <span className="has-icon"><i className="ti-home"></i></span>
                        </FormGroup>
                      </div>
                      <div className="col-md-6">
                        <FormGroup className="has-wrapper">
                          <Input type="text" value={email} name="user-address2" id="addressLine1" className="has-input input-lg" placeholder="Address Line 2" onChange={(e) => this.setState({ email: e.target.value })} />
                          <span className="has-icon"><i className="ti-home"></i></span>
                        </FormGroup>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                      <FormGroup className="has-wrapper">
                          <Input type="text" value={name} name="user-city" id="city" className="has-input input-lg" placeholder="City" onChange={(e) => this.setState({ name: e.target.value })} />
                          <span className="has-icon"><i className="ti-world"></i></span>
                        </FormGroup>
                      </div>
                      <div className="col-md-6">
                        <FormGroup className="has-wrapper">
                          <Input type="text" value={email} name="user-pincode" id="pincode" className="has-input input-lg" placeholder="Pin Code" onChange={(e) => this.setState({ email: e.target.value })} />
                          <span className="has-icon"><i className="ti-home"></i></span>
                        </FormGroup>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                      <FormControl fullWidth>
                          <InputLabel htmlFor="age-simple">State</InputLabel>
                          {/* <Select value={this.state.age} onChange={this.handleChange} */}
                          <Select value={"Maharashtra"}
                            inputProps={{ name: 'State'}}>
                            <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                            <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                        <FormControl fullWidth>
                          <InputLabel htmlFor="age-simple">College</InputLabel>
                          {/* <Select value={this.state.age} onChange={this.handleChange} */}
                          <Select value={"KKW"}
                            inputProps={{ name: 'College'}}>
                            <MenuItem value={"KKW"}>KKW</MenuItem>
                            <MenuItem value={"MET"}>MET</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                        <div className="col-md-6">
                        <FormControl fullWidth>
                          <InputLabel htmlFor="age-simple">Stream</InputLabel>
                          {/* <Select value={this.state.age} onChange={this.handleChange} */}
                          <Select value={"Computer"}
                            inputProps={{ name: 'Stream'}}>
                            <MenuItem value={"Computer"}>Computer</MenuItem>
                            <MenuItem value={"IT"}>IT</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-md-6">
                      <FormGroup className="has-wrapper">
                          <Input type="text" value={name} name="user-tponame" id="tpoName" className="has-input input-lg" placeholder="Referred By/TPO Details" onChange={(e) => this.setState({ name: e.target.value })} />
                          <span className="has-icon"><i className="ti-user"></i></span>
                        </FormGroup>
                      </div>
                      <div className="col-md-6">
                        <FormGroup className="has-wrapper">
                          <Input type="text" value={email} name="user-tpocontact" id="user-mail" className="has-input input-lg" placeholder="Referred By/TPO - Contact" onChange={(e) => this.setState({ email: e.target.value })} />
                          <span className="has-icon"><i className="ti-user"></i></span>
                        </FormGroup>
                      </div>
                    </div>
                    <FormGroup className="mb-15">
                      <Button
                        className="btn-info text-white btn-block w-100"
                        variant="raised"
                        size="large"
                        onClick={() => this.onUserSignUp()}>
                        Sign Up
                            </Button>
                    </FormGroup>
                  </Form>
                </div>
              </div>
              {/* <div className="col-sm-5 col-md-5 col-lg-4">
                  <SessionSlider />
                </div> */}
            </div>
          </div>
        </div>
      </div>
      // </QueueAnim>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { loading } = authUser;
  return { loading };
};

export default connect(mapStateToProps, {
  signupUserInFirebase,
  signinUserWithFacebook,
  signinUserWithGoogle,
  signinUserWithGithub,
  signinUserWithTwitter
})(StudentDetails);
