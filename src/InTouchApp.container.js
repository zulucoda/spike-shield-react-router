import { connect } from 'react-redux';

import AppView from './InTouchApp.view';

function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    };
}

export default connect(mapStateToProps)(AppView);
