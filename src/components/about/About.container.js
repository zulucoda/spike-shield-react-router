import { connect } from 'react-redux';

import AboutView from './About.view';

const mapStateToAppProps = (state) => {
    return {
    };
};

const AboutContainer = connect(
    mapStateToAppProps,
)(AboutView);

export default AboutContainer;