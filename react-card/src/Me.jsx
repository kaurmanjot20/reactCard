import React from 'react'
import mkpic from './assets/mkpic.png'
export default function Me() {
  return (
    <div className='details'>
      <img src={mkpic} alt="my pic" className='mkpic'/>
      <h1>Manjot Kaur</h1>
      <p>I am diving into Full-Stack Web Development and exploring UI/UX design and AI/ML. Sharing my insights on Twitter (@kaurmanjot20), I aim to contribute to the tech community.</p>
    </div>
  )
}
