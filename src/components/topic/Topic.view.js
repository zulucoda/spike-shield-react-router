import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    }
});

export default class TopicView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Topic </Text>
            </View>
        );
    }
}
