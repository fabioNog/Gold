import React, { Component } from 'react'
import Image from 'material-ui-image'
import { Grid, Row, Col } from 'react-flexbox-grid';

import Img1 from '../images/empresa2.jpg'
import Img2 from '../images/instituicao1.jpg'
import Img3 from '../images/PessoFisica1.jpg'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {



    gridStyle: {
        width: '70',
        padding: 0,
        paddingTop: '1px',

        borderRadius: '40px',
        marginTop: 40
    },

    imgStyle: {

        border: '2px solid white',
        borderRadius: '160px'
    },

    p: {
        marginBottom: 0,
        color: 'red',
        fontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif',
        fontSize: 20,
    }


};

export default class ImgApp extends Component {
    render() {
        return (
            <div>

                <Grid fluid style={styles.gridStyle}>
                    <Row>
                        <Col xs={12} md={12} lg={3} lgOffset={1} >

                            <h1> Empresas </h1>
                            <Image
                                src={Img1}
                                style={styles.imgStyle}
                            />

                            <p style={styles.p}>Empresas lideres de mercado estão utilizando nossos planos de saúde </p>
                        </Col>

                        <Col xs={12} md={12} lg={3} lgOffset={1} >
                            <h1> Instituições </h1>
                            <Image
                                src={Img2}
                                style={styles.imgStyle}
                            />
                        </Col>


                        <Col xs={12} md={12} lg={3} lgOffset={1} >
                            <h1>Pessoa Fisíca</h1>
                            <Image
                                src={Img3}
                                style={styles.imgStyle}
                            />
                        </Col>
                    </Row>
                    <br />
                    {/* <Row>
                        <Col xs={12} md={12} lg={4} lgOffset={1} >
                            <Image
                                src="../assets/img/coracao.jpg"
                                style={styles.imgStyle} 
                            />
                        </Col>
                        <br />
                        <Col xs={12} md={12} lg={4} lgOffset={1} >
                            <Image
                                src="http://loremflickr.com/300/200"
                                style={styles.imgStyle} 
                            />
                        </Col>
                    </Row> */}
                </Grid>
            </div>
        )
    }
}

    