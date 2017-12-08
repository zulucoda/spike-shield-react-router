import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setNavigation } from './BottomNavigation.reducer';
import BottomNavigationView from './BottomNavigation.view';

const mapStateToProps = ({ bottomNavigationReducer }) => {
    return {
        active: bottomNavigationReducer.active,
        isHidden: bottomNavigationReducer.isHidden
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setNavigation
        },
        dispatch
    );



const BottomNavigationContainer = connect(
    mapStateToProps, mapDispatchToProps
)(BottomNavigationView);

export default BottomNavigationContainer;