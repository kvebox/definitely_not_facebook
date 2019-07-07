import React from 'react';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignUpContainer';
import HomeFooter from './HomeFooter';

class Home extends React.Component {
    render () { 
        return (
        <div className="home_global">
            <LoginContainer /> 
            <div className='homeContentContainer'>
                <div className='introContainer'>
                    <h1 className='introHeader'>Connect with friends and the world around you on Facebook.</h1>
                    <ul className='welcomeList'>
                        <li><img src='/images/welcome_news.png' />
                            <p><span className='welcome_bold'>See photos and updates </span>from friends in News Feed.</p></li>
                        <li><img src='/images/welcome_share.png' />
                            <p><span className='welcome_bold'>Share what's new </span>in your life on your Timeline.</p></li>
                        <li><img src='/images/welcome_more.png' />
                            <p><span className='welcome_bold'>Find more </span>of what you're looking for with Facebook Search.</p></li>
                    </ul>
                </div>
                <SignupContainer />
            </div>
            <HomeFooter />
        </div>
        )
    };
};

export default Home;