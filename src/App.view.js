import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link, NativeRouter, Route } from 'react-router-native';

import HomeContainer from './components/home/Home.container'
import AboutContainer from './components/about/About.container'
import TopicContainer from './components/topic/Topic.container'


class AppView extends Component {
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path="/about" component={AboutContainer}/>
                    <Route path="/topics" component={TopicContainer}/>

                    <View style={styles.nav}>
                        <Link
                            to="/"
                            underlayColor='#f0f4f7'
                            style={styles.navItem}>
                            <Text>Home</Text>
                        </Link>
                        <Link
                            to="/about"
                            underlayColor='#f0f4f7'
                            style={styles.navItem}>
                            <Text>About</Text>
                        </Link>
                        <Link
                            to="/topics"
                            underlayColor='#f0f4f7'
                            style={styles.navItem} >
                            <Text>Topics</Text>
                        </Link>
                    </View>
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
        justifyContent: 'space-around'
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