import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id="support-hero">
            <div className='mb-5' id="supportWrapper" >
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row' id="support-Wrapper">
                <div className='col-7' >
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder="Eg: how do i activate F&O,why is my order getting rejected..."/><br></br>
                    <a href='' >Track account opening</a>
                    <a href='' >Track segment activation</a>
                    <a href='' >Intraday margins</a>
                </div>
                <div className='col-5' >
                    <h4>Featured</h4>
                    <ol>
                        <li><a href='' >Current Buybacks - August 2024</a></li>
                        <br></br>
                        <li><a href='' >Offer for sale (OFS) - August 2024</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;