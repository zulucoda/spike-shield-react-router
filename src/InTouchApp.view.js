import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import BottomNavigationContainer from './components/bottom-navigation/bottom-navigation.container';

const styles = StyleSheet.create({
    container: {
        flex: 1
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

            <View style={styles.container}>
                <Text>MEMES</Text>
            </View>

            <BottomNavigationContainer/>
        </View>;
    }
}

export default AppView;