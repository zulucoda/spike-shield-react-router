import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link, NativeRouter, Route } from 'react-router-native';
import { BottomNavigation } from 'react-native-material-ui';

import HomeContainer from './components/home/Home.container'
import AboutContainer from './components/about/About.container'
import TopicContainer from './components/topic/Topic.container'

import BottomNavigationContainer from './components/navigation/bottom/BottomNavigation.container';


class AppView extends Component {
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route exact path="/today" component={HomeContainer}/>
                    <Route path="/people" component={AboutContainer}/>
                    <Route path="/topics" component={TopicContainer}/>

                    <BottomNavigationContainer />
                </View>
            </NativeRouter>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    header: {
        fontSize: 20,
    },
    nav: {
        flexDirection: 'row',
        alignContent: 'flex-end'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subNavItem: {
        padding: 5,
    },
    topic: {
        textAlign: 'center',
        fontSize: 15,
    }
});

export default AppView;