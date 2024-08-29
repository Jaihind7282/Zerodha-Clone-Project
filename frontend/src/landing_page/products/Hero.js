import React from 'react';

function Hero() {
    return (
        <div className="container mt-5">
            <div className="row text-center mb-5">
                <h1 className='mt-5'>Technology</h1>
                <h4 className="text-muted mt-2">Sleek, modern, and intuitive trading platforms</h4>
                <div className="mt-3" style={{fontSize: "1.1rem"}}>
                Check out our&nbsp;<a href='' style={{textDecoration: "none", color: "blue"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Hero;