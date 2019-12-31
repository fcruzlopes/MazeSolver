import React, { useState, useEffect } from 'react';
import '/home/flops/Documents/temp/my-app/src/App.css';
import desktopImage from '../images/white.jpg';
import mobileImage from '../images/white.jpg';
import Router from '../controller/router';
import Footer from '../components/footer';

const Bk = () => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <Router />
            <Footer />
        </div>
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};

export default Bk;