import React from 'react';

function Stats() {
    return (
        <div className='container mt-5'>
        <div className='row' >
            <div className='col-6 mt-5'>
                <h3>Trust with confidence</h3>
                <br/>
                <h5>Customer-first always</h5>
                <p className='col-9'>
                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                </p>
                <br/>
                <h5>No spam or gimmicks</h5>
                <p className='col-9'>
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                </p>
                <br/>
                <h5>Do better with money</h5>
                <p className='col-9'>
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                </p>
                <br/>
                <h5>The Zerodha universe</h5>
                <p className='col-9'>
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                </p>
            </div>
            <div className='col-6 text-center'>
                <img style={{width: "100%"}} src='media/images/ecosystem.png'/>
                <button className='btn' style={{color: "blue"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></button>
                <button className='btn' style={{color: "blue"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
    );
}

export default Stats;