import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginView from './Login.view';

import { setLoginState } from './Login.reducer';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setLoginState}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
