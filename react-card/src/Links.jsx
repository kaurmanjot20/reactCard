import React from 'react'
import xlogo from "./assets/twitterlogo.png"
import githublogo from "./assets/githublogo.png"
import linkedinlogo from "./assets/linkedinlogo.png"
export default function Links() {
    return (
        <div className='link'>
            <div>
                <a href="https://twitter.com/kaurmanjot20" target='_blank'>
                    <img src={xlogo} alt="Twitter logo" className='logo'/>
                </a>
                
            </div>
            <div>
                <a href="https://github.com/kaurmanjot20" target='_blank'>
                    <img src={githublogo} alt="GitHub Logo" className='logo github'/>
                </a>
                
            </div>
            <div>
                <a href="http://www.linkedin.com/in/manjot-kaur-6595a0281" target='_blank'>
                   <img src={linkedinlogo} alt="LinkedIn logo" className='logo'/>
                </a>
            </div>
        </div>
    )
}
