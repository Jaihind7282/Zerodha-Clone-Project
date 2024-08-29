import React from 'react';

function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{padding: "0 20%"}}/>
                <h1 className='mt-5'>
                    Invest in everything
                </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mt-3' style={{width: "15%", margin: "0 auto"}}>Sign up now</button>
            </div>    
        </div>
    );
}

export default Hero;