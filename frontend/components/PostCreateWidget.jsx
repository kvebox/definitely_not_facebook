import React from 'react';
import { withRouter } from 'react-router';


class PostCreateWidget extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="post-widget">
                <h1> Make a post! </h1>

            </div>

        )
    }

}

export default withRouter(PostCreateWidget);