import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';
import { Link } from 'react-router-native';


class BottomNavigationView extends Component {

    render() {
        console.log('active:', this.props.active);
        return (
            <BottomNavigation active={this.props.active} hidden={this.props.isHidden}>
                <BottomNavigation.Action
                    key="today"
                    icon="today"
                    label="Today"
                    onPress={() => {
                        this.props.setNavigation({ active: 'today' });
                    }}
                />
                <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="People"
                    onPress={() => this.props.setNavigation({ active: 'people' })}

                />
                <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="Bookmark"
                    onPress={() => this.props.setNavigation({ active: 'bookmark-border' })}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    onPress={() => this.props.setNavigation({ active: 'settings' })}
                />
            </BottomNavigation>
        );
    }
}

export default BottomNavigationView;