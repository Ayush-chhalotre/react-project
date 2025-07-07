import React, { useState } from 'react'
import Search from './icons/Search.png'
import Searchbutton from './icons/Searchbutton.png'
import './Searchbar.css'
export default function Searchbar() {
  let [inpdata,setinpdata]=useState('')
  return (
    <div className='searchbar'>
        <img className='searchimg' src={Search} alt="logo" />
        <input type="text" placeholder='Search' onChange={e=>setinpdata(e.target.value)} />
        <button className='searchbutton'><img className='searchimg' src={Searchbutton} alt="Search" /></button>
    </div>
  )
}
