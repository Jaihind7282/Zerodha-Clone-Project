import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-muted text-center mt-5'>
                <h1>Pricing</h1>
                &nbsp;
                <h5>Free equity investments and flat ₹20 intraday and F&O trades</h5>
            </div>
            <div className="row text-muted  text-center p-5 mt-5">
                <hr></hr>
                <div className='col-4 mt-5'>
                    <img src='media/images/pricing0.svg' style={{width: "60%"}}/>   
                    <h3>Free equity delivery</h3>
                    &nbsp;
                    <p>
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/images/other-trades.svg' style={{width: "60%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    &nbsp;
                    <p>
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='media/images/pricingMF.svg' style={{width: "60%"}}/>
                    <h3>Free equity delivery</h3>
                    &nbsp;
                    <p>
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;