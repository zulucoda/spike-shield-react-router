import { connect } from 'react-redux';

import TopicView from './Topic.view';

const mapStateToAppProps = (state) => {
    return {
    };
};

const TopicContainer = connect(
    mapStateToAppProps,
)(TopicView);

export default TopicContainer;