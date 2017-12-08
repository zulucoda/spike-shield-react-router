import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import { store } from './src/store/store';
import AppContainer from './src/App.container';


const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
    bottomNavigation: {
        container: {
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignContent: 'stretch',
            alignItems: 'stretch'
        }
    }
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider uiTheme={uiTheme}>
                    <AppContainer/>
                </ThemeProvider>
            </Provider>
        )
    }
}

export default App;