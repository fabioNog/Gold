import React, { Component } from 'react';
import axios from 'axios'

import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButtom from '../template/iconButton'


// import PageHeader from './pageHeader'
const URL = 'http://localhost:3003/api/vencis'



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


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            username: '',
            password: '',
            
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangePasswordComp = this.handleChangePasswordComp.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh = this.refresh.bind(this)


    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
        .then(resp => console.log(resp.data))
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


    handleAdd() {
        // console.log(this.state.description)

        const email = this.state.email;
        const username = this.state.username;
        const password = this.state.password;
        const passwordComp = this.state.passwordComp;

        if (password === passwordComp) {
            axios.post(URL, { email, username, password, passwordComp })
                .then(resp => console.log('Funcionou'))
                .catch(err => console.log(err))
        } else {
            alert('Sua senha esta incorreta por favor digite-a novamente')
        }

    }



    render() {
        return (
            <div >
                {/* <PageHeader name={'Tarefas'} small='Login'/> */}
                <form style={styles.formStyle}>
                    <Grid fluid style={styles.gridStyle}>

                        {/* Email */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField style={styles.paper2}
                                    floatingLabelText={'Email'}
                                    id="email"
                                    // description={this.description}
                                    onChange={this.handleChangeEmail} />
                            </Col>
                        </Row>

                        {/* Username */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField
                                    style={styles.paper2}
                                    floatingLabelText={'username'}
                                    id="username"
                                    onChange={this.handleChangeUsername}
                                />
                            </Col>
                        </Row>

                        {/*Password  */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField
                                    style={styles.paper2}
                                    floatingLabelText={'password'}
                                    id="password"
                                    onChange={this.handleChangePassword}
                                />
                            </Col>
                        </Row>

                        {/* PasswordConf */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField
                                    style={styles.paper2}
                                    floatingLabelText={'passwordConf'}
                                    id="passwordConf"
                                    onChange={this.handleChangePasswordComp}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={8} md={12} lg={6} xsOffset={4} lgOffset={3}>
                                <IconButtom
                                    className='Button'
                                    // style={styles.botoonStyle}
                                    onClick={this.handleAdd} />
                            </Col>
                        </Row>
                    </Grid>

                    {/* <TodoList /> */}
                </form>

                
            </div>

        )
    }
}
