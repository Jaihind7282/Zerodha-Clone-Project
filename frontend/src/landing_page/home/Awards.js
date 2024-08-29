import React from 'react';

function Awards() {
    return (
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media\images\largestBroker.svg'/>
            </div>
            <div className='col-6'>
                <h2>Largest stock broker in india</h2>
                <br></br>
                <p>2+ million Zerodha clints contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                <div className='row p-4'>
                    <div className='col-6'>
                    <ul>
                        <li><p>Future and Option</p></li>
                        <li><p>Commodity derivates</p></li>
                        <li><p>Currency derivatives</p></li>
                    </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                        <li><p>Stocks & IPO</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Govt. Securities</p></li>
                    </ul>
                    </div>
                </div>
                <div className='m-3'>
                  <img className='col-12' src='media/images/pressLogos.png'/>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Awards;