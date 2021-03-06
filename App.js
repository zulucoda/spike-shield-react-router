import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {COLOR, ThemeProvider} from 'react-native-material-ui';

import store from './src/store/store';
import InTouchAppContainer from './src/InTouchApp.container';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500
    },
    bottomNavigation: {
        container: {
            backgroundColor: COLOR.grey300
        }
    },
    button: {
        container: {
            margin: 50
        }
    },
    subHeader: {
        container: {
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row',
            textAlign: 'center'
        }
    }
};

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider uiTheme={uiTheme}>
                    <InTouchAppContainer/>
                </ThemeProvider>
            </Provider>
        )
    }
}