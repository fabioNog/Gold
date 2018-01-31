import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButtom from '../template/iconButton';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import validateInput from '../shared/validations/signup.js'
// import { addFlashMessage } from '../actions/flashMessages';


const styles = {


    paper2: {
        width: '100%',
        padding: 3,
        paddingTop: 10,
        minHeight: 30,
        marginBottom: 10,
        // border: '1px solid #3F51B5',
        // border: '1px solid teal',
        borderRadius: '10px',
        // opacity: 0.7,

    },

    botoonStyle: {
        // paddingRigth: 10,
        paddingLefth: 30,
        width: 100,


    },

    gridStyle: {
        width: '70%',
        padding: 0,
        paddingTop: '1px',

        borderRadius: '40px',
        marginTop: 40
    },

    flatButtonStyle: {
        background: 'red',
    },

    titulo: {
        color: 'red',

        fontFamily: 'Arial',
        fontSize: 40,
    },

    ImgStyle: {
        width: "100%",
        height: "400px",

    },

    formStyle: {
        backgroundImage: `url(${'../assets/img/img1'})`,

    }
};


class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            errors: {},
            isLoading: false
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangePasswordComp = this.handleChangePasswordComp.bind(this)

        this.onSubmit = this.onSubmit.bind(this)


    }



    handleChangeEmail(e) {
        this.setState({ ...this.state, email: e.target.value })
    }

    handleChangeUsername(e) {
        this.setState({ ...this.state, username: e.target.value })
    }

    handleChangePassword(e) {
        this.setState({ ...this.state, password: e.target.value })
    }

    handleChangePasswordComp(e) {
        this.setState({ ...this.state, passwordComp: e.target.value })
    }


    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {

        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true })
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'sucess',
                        text: 'Seu cadadstro foi realizado com sucesso'
                    });
                    this.context.router.history.push('/teste')  
                },
                ({ data }) => this.setState({ errors: data, isLoading: false })
            );
        }
    }

    render() {

        const { errors } = this.state;

        return (
            <div >
                <form style={styles.formStyle}>
                    <Grid fluid style={styles.gridStyle}>

                        {/* Email */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField style={styles.paper2}
                                    floatingLabelText={'Email'}
                                    id="email"
                                    onChange={this.handleChangeEmail}
                                    type="text"

                                />
                                {errors.email && <span>{errors.email}</span>}
                            </Col>

                        </Row>

                        {/* Username */}
                        <Row >
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField
                                    style={styles.paper2}
                                    floatingLabelText={'Username'}
                                    id="username"
                                    onChange={this.handleChangeUsername}
                                    className={classnames("form-group", { 'has-error': errors.username })}
                                />
                                {errors.username && <span>{errors.username}</span>}
                            </Col>


                        </Row>

                        {/*Password  */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField
                                    style={styles.paper2}
                                    floatingLabelText={'Password'}
                                    id="password"
                                    onChange={this.handleChangePassword}
                                    className={classnames("form-group", { 'has-error': errors.password })}
                                />
                                {errors.password && <span>{errors.password}</span>}
                            </Col>
                        </Row>

                        {/* PasswordConf */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField
                                    style={styles.paper2}
                                    floatingLabelText={'PasswordConf'}
                                    id="passwordConf"
                                    onChange={this.handleChangePasswordComp}
                                    className={classnames("form-group", { 'has-error': errors.passwordComp })}
                                />
                                {errors.passwordComp && <span>{errors.passwordComp}</span>}
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={8} md={12} lg={6} xsOffset={4} lgOffset={3}>
                                <IconButtom
                                    className='Button'
                                    onClick={this.onSubmit}
                                    disabled={this.state.isLoading} />
                            </Col>
                        </Row>
                    </Grid>

                </form>


            </div>

        ); 
    }
}


SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;