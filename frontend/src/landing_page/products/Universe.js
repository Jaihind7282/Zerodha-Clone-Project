import React from 'react';

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center p-5'>
                <div className='col-4'>
                    <a href=''><img src='media/images/zerodhaFundHouse.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Our asset management venture
                       that is creating simple and transparent index
                       funds to help you save for your goals.</div>
                </div>
                <div className='col-4'>
                    <a href=''><img src='media/images/sensibullLogo.svg' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                    </div>
                </div>
                <div className='col-4'>
                    <a href=''><img src='media/images/tijori.svg' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Investment research platform
                     that offers detailed insights on stocks,
                      sectors, supply chains, and more.
                    </div>
                </div>
            </div>
            <div className='row text-center p-5'>
                <div className='col-4'>
                    <a href=''><img src='media/images/streakLogo.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Systematic trading platform
                      that allows you to create and backtest
                      strategies without coding.</div>
                </div>
                <div className='col-4'>
                    <a href=''><img src='media/images/smallcaseLogo.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Thematic investing platform
                     that helps you invest in diversified
                     baskets of stocks on ETFs.
                    </div>
                </div>
                <div className='col-4'>
                    <a href=''><img src='media/images/dittoLogo.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Personalized advice on life
                     and health insurance. No spam
                     and no mis-selling.
                     Sign up now
                    </div>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-3' style={{width: "15%", margin: "0 auto"}}>Sign up now</button>
            </div>
        </div>
    );
}

export default Universe;