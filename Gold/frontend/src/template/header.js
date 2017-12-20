import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { indigo700, blueGrey800 } from 'material-ui/styles/colors';

const styles = {
    flatButtonStyle: {
        background: 'red',
    },
}


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo700,
        accent1Color: blueGrey800,
    }
})


export default class Header extends Component {
    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar
                    iconElementLeft={<Link to='/'><FlatButton label="Vencis" /></Link>}
                    iconElementRight=
                    {
                        <div>
                            <Link to='/blog'><FlatButton label="blog" /></Link>
                            <Link to='/register'><FlatButton label="Cadastrar" /></Link>
                            <Link to='/login'><FlatButton label="Entrar" style={styles.flatButtonStyle} /></Link>



                        </div>
                    }

                />
            </MuiThemeProvider>
        )
    }
}