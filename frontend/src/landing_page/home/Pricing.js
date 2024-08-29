import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <h1>Unbeatable pricing</h1>
                <div className='col-6 mt-3'>
                    <p className='col-9'>
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <button className='btn' style={{color: "blue"}}>See pricing <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='col-2 text-center'>
                    <img src='media/images/pricing0.svg' style={{width: "60%"}}/>
                    <p style={{fontSize: "10px"}}>Free account
                    opening</p>
                </div>
                <div className='col-2 text-center'>
                    <img src='media/images/pricingEquity.svg' style={{width: "60%"}}/>
                    <p style={{fontSize: "10px"}}>Free equity delivery
                    and direct mutual funds</p>
                </div>
                <div className='col-2 text-center'>
                      <img src='media/images/other-trades.svg' style={{width: "60%"}}/>
                      <p style={{fontSize: "10px"}}>Intraday and F&O</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;