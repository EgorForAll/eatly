// @flow
import * as React from 'react';
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {

    return (
        <div className='main' style={{padding: '40px'}}>
            <h1>Page not found. 404.</h1>
            <div>
                <Link to={"/"}>Back to the main page</Link>
            </div>
        </div>
    );
};

export default NotFound;