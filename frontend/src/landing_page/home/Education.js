import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/images/varsity2.svg'/>
            </div>
            <div className='col-6'>
                <h3>Free and open market education</h3>
                <div className='mt-5'>
                    <p>
                       Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <button className='btn' style={{color: "blue"}}>Varsity <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='mt-5'>
                    <p>
                       TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <button className='btn' style={{color: "blue"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Education;