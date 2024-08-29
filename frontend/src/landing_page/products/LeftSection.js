import React from 'react';

function LeftSection({imageURl, proName, proDes, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className="container">
            <div className="row p-5">
                <hr></hr>
                <div className="col-8 p-5">
                    <img src={imageURl} style={{width: "80%"}}/>
                </div>
                <div className="col-4 p-5" style={{margin: "auto 0"}}>
                    <h1>{ proName }</h1>
                    <br/>
                    <p>{ proDes }</p>
                    <a href='' style={{textDecoration: "none", color: "blue", marginRight: "4rem"}}>{ tryDemo } &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    <a href='' style={{textDecoration: "none", color: "blue"}}>{ learnMore } &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    <div className="row mt-5">
                        <img src={ googlePlay } style={{width: "10rem"}}/>
                        <img src={ appStore } style={{width: "10rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;