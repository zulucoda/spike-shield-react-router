import { connect } from 'react-redux';

import AppView from './InTouchApp.view';

const mapStateToAppProps = () => {
    return {
    };
};

const InTouchAppContainer = connect(
    mapStateToAppProps,
)(AppView);

export default InTouchAppContainer;