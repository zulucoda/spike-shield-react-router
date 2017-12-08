import { connect } from 'react-redux';

import HomeView from './Home.view';

const mapStateToAppProps = (state) => {
    return {
    };
};

const HomeContainer = connect(
    mapStateToAppProps,
)(HomeView);

export default HomeContainer;