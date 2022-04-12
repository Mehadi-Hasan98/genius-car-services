import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 border border-primary pt-4 pb-4 bg-primary'>
            <p><small className='fw-bold'>Copyright © {year}</small> By The Car Doctor.</p>
        </footer>
    );
};

export default Footer;