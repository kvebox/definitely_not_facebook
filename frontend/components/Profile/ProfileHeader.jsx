import React from 'react';
import { withRouter } from 'react-router';


class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='profile-header'>
            {/* <img src={props.currentUser.profilePic} /> */}
                <div>
                    <img className="placeholder" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png"/>
                </div>

                <ul className="profile-nav">
                    <li className="profile-nav-target"><a href="#">Timeline</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Photos</a></li>
                    <li className="last"><a href="#">More</a></li>
                </ul>
            </div>
        )
    }

}

export default withRouter(ProfileHeader);