import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Subheader } from 'react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        margin: 50
    }
});

export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Subheader text={'Welcome to InTouch!'}/>
                <Button
                    raised
                    primary
                text={'Login'}
                onPress={() => this.props.setLoginState(true)}/>
            </View>
        );
    }
}