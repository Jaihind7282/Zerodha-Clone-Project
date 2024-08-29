import React from "react";

const Apps = () => {
  return (
    <div className="container">
            <div className="row text-center">
            </div>
            <div className='row text-center p-5'>
                <div className='col-2'>
                    <a href=''><img src='zerodhaFundHouse.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Our asset management venture
                       that is creating simple and transparent index
                       funds to help you save for your goals.</div>
                </div>
                <div className='col-2'>
                    <a href=''><img src='sensibullLogo.svg' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                    </div>
                </div>
                <div className='col-2'>
                    <a href=''><img src='tijori.svg' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Investment research platform
                     that offers detailed insights on stocks,
                      sectors, supply chains, and more.
                    </div>
                </div>
            </div>
            <div className='row text-center p-5'>
                <div className='col-2'>
                    <a href=''><img src='streakLogo.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Systematic trading platform
                      that allows you to create and backtest
                      strategies without coding.</div>
                </div>
                <div className='col-4'>
                    <a href=''><img src='smallcaseLogo.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Thematic investing platform
                     that helps you invest in diversified
                     baskets of stocks on ETFs.
                    </div>
                </div>
                <div className='col-4'>
                    <a href=''><img src='dittoLogo.png' style={{width: "10rem"}}/></a>
                    <div className='p-5' style={{fontSize: "0.8rem"}}>Personalized advice on life
                     and health insurance. No spam
                     and no mis-selling.
                     Sign up now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apps;
