import React from 'react';

function Brokerage() {
    return (
        <div className='container text-muted mt-5'>
            <hr></hr>
            <div className='row m-5'>
                <div className='col-8'>
                    <div className='text-center fs-4'><a href='' style={{textDecoration: "none"}}>Brokerage calculator</a></div>
                    <div className='mt-5' style={{fontSize: "0.8rem"}}>
                    <ul>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                    </div>
                </div>
                <div className='col-4'>
                   <div className='text-center fs-4'><a href='' style={{textDecoration: "none"}}>List of charges</a></div>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;