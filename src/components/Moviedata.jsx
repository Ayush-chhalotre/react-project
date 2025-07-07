 import React, { useContext, useState } from 'react'
import Playtrailer from './Playtrailer'
 import Star from './icons/Star.png'
 import Bookmark from './icons/Bookmark.png'
 import Time from './icons/Time.png'
 import './Moviedata.css'
import Card from './Card'
import notecontext from '../context/nodecontext'
 export default function Moviedata({data}) {
  let {cardarr}=useContext(notecontext)
  let {myname}=useContext(notecontext)
  let [show,setshow]=useState(false)
  console.log(myname)
  // style={{backgroundImage:`url('${data.Poster}')`}}
  if(show){return(<> <button className='cardbutton' onClick={()=>setshow(!show)}>card </button><Card/></>)}

   return (
    
     <div className='mainmoviedata'>
     
      <div className='poster' ><img src={data.Poster} alt="" /></div>
       <div className='moviedata'> <h1>{data.Title}</h1>
       <p>Genre : {data.Genre}</p>
       <p>Year : {data.Year}</p>
        <div className='detail'>
            <img src={Star} alt="Rating" /><p>IMDB {data.imdbRating}</p>
            
            <img src={Time} alt="" /><p>{data.Runtime}</p>
        </div>
        <p className='moviedetail'>{data.Plot}</p>
        <p>Actor : {data.Actors}</p>
        <p>Country : {data.Country}</p>

       <section className='btns'>
         <Playtrailer/>
        <button className='bookmark' onClick={()=>{cardarr.push(data);console.log(cardarr)}}><img src={Bookmark} alt="" />save for later</button>
       </section>
       

       </div>
       <button className='cardbutton' onClick={()=>setshow(!show)}>card </button>
       {/* {show && <Card/>} */}
     </div>
   )
 }
 