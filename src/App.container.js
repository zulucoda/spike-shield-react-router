import { connect } from 'react-redux';

import AppView from './App.view';

const mapStateToAppProps = () => {
    return {
    };
};

const AppContainer = connect(
    mapStateToAppProps,
)(AppView);

export default AppContainer;