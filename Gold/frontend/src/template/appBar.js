import React, { Component } from 'react';

import Header from './header'

import Divider from 'material-ui/Divider';

import { Grid, Row, Col } from 'react-flexbox-grid';

import ImgApp from './ImgApp'

const styles = {

    flatButtonStyle: {
        background: 'red',
    },

    gridStyle: {
        width: '70%',
        padding: 0,
        paddingTop: '1px',

        borderRadius: '40px',
        marginTop: 40
    },

    titulo: {
        color: 'red',

        fontFamily: 'Arial',
        fontSize: 40,
    }

};



export default class AppB extends Component {

    render() {
        return (
            <div>
                <Header />

                <form style={styles.formStyle}>
                    <Grid fluid style={styles.gridStyle}>
                        <Row>
                            <Col xs={12} md={12} lg={6} lgOffset={3}  >
                                <h1 style={styles.titulo}>Programa de Saúde</h1>
                            </Col>

                        </Row>

                        <Divider />

                        <ImgApp />


                    </Grid>

                </form>

            </div>
        )
    }
}
