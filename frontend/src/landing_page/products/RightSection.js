import React from 'react';

function RightSection({imageURL, proName, proDes, learnMore}) {
    return (
        <div className="container">
            <div className="row p-5">
                <hr></hr>
                <div className="col-4 p-5" style={{margin: "auto 0"}}>
                    <h1>{ proName }</h1>
                    <br/>
                    <p>{ proDes }</p>
                    <a style={{textDecoration: "none", color: "blue"}}>{ learnMore } &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-8 p-5">
                    <img src={ imageURL } style={{width: "80%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;