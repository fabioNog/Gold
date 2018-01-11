import React, { Component } from 'react';
import axios from 'axios'

import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButtom from '../template/iconButton';


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
            name: '',
            password: ''

        }

      
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
        


    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => console.log(resp.data))
    }


    handleChangeUsername(e) {
        this.setState({ ...this.state, name: e.target.value })
    }

    handleChangePassword(e) {
        this.setState({ ...this.state, password: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        // console.log(this.state);
        axios.post('/api/users',{user:this.state});
        
    }

    handleAdd() {
        // console.log(this.state.description)
        const email = this.state.email;
        const password = this.state.password;

        axios.post(URL, { email, password })
            .then(resp => console.log('Funcionou'))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div >
                {/* <PageHeader name={'Tarefas'} small='Login'/> */}
                <form style={styles.formStyle} >


                    <Grid fluid style={styles.gridStyle}>
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <h2>Entrar</h2>
                            </Col>
                        </Row>
                        {/* Email */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField style={styles.paper2}
                                    floatingLabelText={'Username'}
                                    id="name"
                                    type="text"
                                // description={this.description}
                                value={this.state.name}
                                onChange={this.handleChangeUsername}
                                //  
                                />
                            </Col>
                        </Row>

                        {/*Password  */}
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}>
                                <TextField
                                    style={styles.paper2}
                                    floatingLabelText={'Password'}
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChangePassword}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={8} md={12} lg={6} xsOffset={4} lgOffset={3}>
                                <IconButtom
                                    className='Button'
                                    onClick={this.onSubmit}
                                // style={styles.botoonStyle}
                                />
                            </Col>
                        </Row>
                    </Grid>

                    {/* <TodoList /> */}
                </form>


            </div>

        )
    }
}
