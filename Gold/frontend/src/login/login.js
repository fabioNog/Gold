import React, { Component } from 'react';
import Login from '../login/loginPage'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { indigo700, blueGrey800 } from 'material-ui/styles/colors';

import Header from '../template/header'

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



export default class AppB extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpened: false };
    }

    _toogleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }

    handleAdd() {
        console.log('veio do appbar');
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header/>
                    <Login/>

                    <div style={styles.ImgStyle}>
                        
                    </div>
                </div>

            </MuiThemeProvider>
        )
    }
}
