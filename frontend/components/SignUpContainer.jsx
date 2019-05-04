import {connect} from 'react-redux';
import {signup, login, logout} from '../actions/session_actions';
import SignupForm from './SignupForm';

const mapStateToProps = state => {
    let users = state.entities.users;
    let formType = 'signup';
    return {
        currentUser : users[state.session.id],
        formType: formType
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);