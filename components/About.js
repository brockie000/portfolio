import React from 'react'
import Image from 'next/image'

export default function About() {
    return (
        <div className='about-container'>
            <div className='img'>
                <div className='img-cont'>
                <img className='img-cont' src='grad.jpg'/>
                </div>
            </div>

            <div className='about-cont'>

                <div className='about'>
                About Me
                </div>

                <div className='about-title'>
                    Graduate Software Developer
                </div>

                <div className='about-main'>
                    I'm Kai Brockie, i am 21 and have recently graduated with a first in Computer Science.
                </div>

                <ul className='icons-cont'>
                    <li>
                        <img className='awsicon' src='react.svg'/>
                        <div className='hovertext'>
                            React.js
                        </div>
                    </li>
                    
                    <li>
                        <img className='awsicon' src='next.svg'/>
                        <div className='hovertext'>
                            Next.js
                        </div>
                    </li>
                        
                    <li>
                        <img className='awsicon' src='html.svg'/>
                        <div className='hovertext'>
                            HTML
                        </div>
                    </li>
                        
                    <li>
                        <img className='awsicon' src='aws.svg'/>
                        <div className='hovertext'>
                            AWS
                        </div>
                    </li>
                        
              
                   
                </ul>


                
                
            </div>
        </div>
    )
}
