import React from 'react';

function CreateTicket() {
    return (
        <div className='container text-muted p-5'>
            <h3>To create a ticket, select a relevant topic</h3>
            <br/>
            &nbsp;
            <div className='row'>
               <div className='col-4'>
                   <h5><i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Account Opening</h5>
                   <div className='text-muted m-4'>
                   <a href='' style={{textDecoration: "none"}}>Getting started</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Online</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Offline</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Charges</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Company, Partnership and HUF</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Non Resident Indian (NRI)</a><br/>
                   </div>
               </div>
               <div className='col-4'>
                   <h5><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Your Zerodha Account</h5>
                   <div className='text-muted m-4'>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Login credentials</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Your Profile</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Account modification and segment addition</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>CMR & DP ID</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Nomination</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Transfer and conversion of shares</a><br/>
                   </div>
               </div>
               <div className='col-4'>
                   <h5><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;Trading and Markets</h5>
                   <div className='text-muted m-4'>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Trading FAQs</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Kite</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Margins</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Product and order types</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Corporate actions</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Kite features</a><br/>
                   </div>
               </div>
            </div>
            <div className='row'>
               <div className='col-4'>
                   <h5><i class="fa-solid fa-hippo"></i>&nbsp;&nbsp; Funds</h5>
                   <div className='text-muted m-4'>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Fund withdrawal</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Adding funds</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Adding bank accounts</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>eMandates</a><br/>
                   </div>
               </div>
               <div className='col-4'>
                   <h5><i class="fa-solid fa-bullseye"></i>&nbsp;&nbsp;Console</h5>
                   <div className='text-muted m-4'>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>IPO</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Portfolio</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Funds statement</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Profile</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Reports</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Referral program</a><br/>
                   </div>
               </div>
               <div className='col-4'>
                   <h5><i class="fa-solid fa-coins"></i>&nbsp;&nbsp; Coin</h5>
                   <div className='text-muted m-4'>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Understanding mutual funds and Coin</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Coin app</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Coin web</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Transactions and reports</a><br/>
                   <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>National Pension Scheme (NPS)</a><br/>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default CreateTicket;