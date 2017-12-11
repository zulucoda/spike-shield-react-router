import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import BottomNavigationContainer from './components/bottom-navigation/BottomNavigation.container';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    memes: {
        flex: 1,
        justifyContent: 'center',
    },
    memesText: {
        textAlign: 'center'
    }
});

class AppView extends Component {
    constructor(props) {
        super(props);
        this.renderInTouchApp = this.renderInTouchApp.bind(this);
    }

    render() {
        // TODO: Add login check
        return this.renderInTouchApp();
    }

    renderInTouchApp() {
        return <View style={styles.container}>

            <View style={styles.memes}>
                <Text style={styles.memesText}>MEMES</Text>
            </View>

            <BottomNavigationContainer/>
        </View>;
    }
}

export default AppView;