import React from 'react'
import Playtrailer from './Playtrailer'
import './Moviecard.css'
export default function Moviecard(props) {
  return (
    <div className='moviecard'>
        <img className='cardimg' src={props.element.Poster} alt="image" />
        <h4>Title : {props.element.Title}</h4>
        
    </div>
  )
}
