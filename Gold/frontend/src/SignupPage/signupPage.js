import React, { Component } from 'react';
import SignupForm from '../SignupForm/SignupForm'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { indigo700, blueGrey800 } from 'material-ui/styles/colors';

import Header from '../template/header'

// Redux

import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

import { addFlashMessage } from '../actions/flashMessages.js'

import PropTypes from 'prop-types'


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo700,
        accent1Color: blueGrey800,
    }
})


const styles = {

    flatButtonStyle: {
        background: 'red',
    }
};


class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpened: false };
    }

    render() {

        const { userSignupRequest, addFlashMessage } = this.props;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />

                    <div style={styles.ImgStyle}>
                        <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
                    </div>
                </div>

            </MuiThemeProvider>
        )
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);