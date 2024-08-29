import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2>People</h2>
                </div>
                <div className='row' style={{marginLeft: "17%"}}>
                    <div className='col-2 mt-5 mb-5 text-center '>
                        <img src="media/images/jaisingh.jpg" style={{width: "80%", borderRadius: "50%"}}/>
                        <div className='mt-2 fs-4'>
                            Jai Singh
                        </div>
                        <p>Web Developer</p>
                    </div>
                    <div className='col-6 mt-5 mb-5'>
                        <p>
                        i'm Jai, a skilled MERN stack web developer with experience in building web applications using MongoDB, Express.js, React, and Node.js. i worked on various projects, including a Zerodha clone and a Hotel Search web application, showcasing proficiency in both front-end and back-end development. Jai's expertise extends to technologies like Bootstrap, CSS, and JavaScript, making them a versatile developer capable of handling full-stack web development projects.
                        </p>
                        <p>
                        i have a strong foundation in Data Structure and Algorithms (DSA)
                        </p>
                        <p>
                        Playing on keyboard is my zen.
                        </p>
                        <p>
                        Connect on <a href='' style={{textDecoration: "none"}}>Homepage</a>/ <a href='' style={{textDecoration: "none"}}>TradingQnA</a> /  <a href='' style={{textDecoration: "none"}}>Twitter</a>
                        </p>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Team;