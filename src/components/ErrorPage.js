import React from 'react';
import {Link} from 'react-router-dom'

import HeadBackground from './reusableHbackgroundBanner/HeadBackground'
import Banner from './reusableHbackgroundBanner/Banner'

const ErrorPage = () => {
    return (
        <HeadBackground>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">go back to home</Link>
            </Banner>
        </HeadBackground>
    );
};

export default ErrorPage;
