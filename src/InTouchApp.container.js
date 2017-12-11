import { connect } from 'react-redux';

import AppView from './in-touch-app.view';

function mapStateToAppProps() {
    return {};
}

const InTouchAppContainer = connect(
    mapStateToAppProps,
)(AppView);

export default InTouchAppContainer;