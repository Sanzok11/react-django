import React from 'react';
import AppHeader from '../../components/header/AppHeader';
import AppFooter from '../../components/footer/AppFooter';
import { AppMain } from '../../components/main/AppMain';

const LandingPage = () => {
    return (
        <>
            <AppHeader />
            <AppMain />
            <AppFooter />
        </>
    );
}

export default LandingPage;