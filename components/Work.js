import React, {useState} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

export default function Work() {
    const [item, setItem] = useState(0)

    const plus = () => {
        setItem(item + 1)
    }

    const minus = () => {
        setItem(item - 1)
    }

    return (
        <div className='work-container'>
            <h1 className='project-title'>
                Recent Projects
            </h1>
            

            <div className='projects-cont'>
                <div className='project-left' >
                    <IoIosArrowBack size={80} className='left-arrow' onClick={minus}/>
                </div>

                <div className='project-img'>
                    <img className='phone' src='iphone.png'/>
                    <div>{item}</div>
                </div>

                <div className='project-right'>
                    <IoIosArrowForward size={80} className='right-arrow' onClick={plus}/>
                </div>
                
            </div>
        </div>
    )
}
