import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
// import {HashRouter, Route} from 'react-router-dom';


import {signup, login, logout} from './util/session_api_util';



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id] : window.currentUser}
                },
                session: {id: window.currentUser.id}
            };
                
            store = configureStore(preloadedState);
            delete window.currentUser;
        } else {
            store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    ReactDOM.render(<Root store={store}/>, root);
});


// testing ajax calls on the window before store is created

// import { signup, login, logout } from './util/session_api_util';

// user = {
//     email: 'ab@gmail.com',
//     first_name: 'a',
//     last_name: 'b',
//     password: 'asdfghjk'
// }

// window.signup(user).then(res => console.log(res))