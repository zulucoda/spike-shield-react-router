import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setNavigation } from './BottomNavigation.reducer';
import BottomNavigationView from './BottomNavigation.view';

function mapStateToProps({ bottomNavigationReducer }) {
    return {
        active: bottomNavigationReducer.active,
        isHidden: bottomNavigationReducer.isHidden
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setNavigation
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigationView);