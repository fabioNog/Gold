import React from 'react'
import Header from '../template/header'
import { Grid, Row, Col } from 'react-flexbox-grid';

const styles = {

    texto: {
        color: 'red'
    },

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


    formStyle: {
        backgroundImage: `url(${'../assets/img/img1'})`,

    }
};


export default props => (
    <div>
        <Header />

        <form style={styles.formStyle}>
            <Grid fluid style={styles.gridStyle}>


                {/*Password  */}
                <Row>
                    <Col xs={12} md={12} lg={4} lgOffset={4} >

                        <h1 style={styles.texto}>Seja bem-vindo ao Vencis</h1>
                    </Col>
                </Row>


            </Grid>

        </form>

    </div>
)