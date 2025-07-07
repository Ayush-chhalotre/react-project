import React from 'react'
import Play from './icons/Play.png'
import './Playtrailer.css'
export default function Playtrailer() {
  return (
    
    <div>
        <button className='playtrailer'><img src={Play} alt="play" /> Play trailer</button>
    </div>
  )
}
