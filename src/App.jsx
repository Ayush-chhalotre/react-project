import React, { useEffect, useState } from 'react'
import './App.css'
// import Searchbar from './components/Searchbar'
import Moviedata from './components/Moviedata.jsx'
import axios from 'axios'
// import Moviecards from './components/Moviecards.jsx'
import Search from './components/icons/Search.png'
import Searchbutton from './components/icons/Searchbutton.png'
import './components/Searchbar.css'
export default function App() {
  let [movie,setmovie]=useState("")
  let [moviedata,setmoviedata]=useState(null)
  function getdata(moviename){
    let api=`http://www.omdbapi.com/?i=tt3896198&apikey=248228d3&t=${moviename}`
    axios.get(api).then(res=> 
        setmoviedata(res.data))
    // let result= await fetch(api)
    // let res = await result.json()
    // setmoviedata(res.data)
    // console.log("hi from get dta")
  }
  useEffect(()=>getdata("iron man 3"),[])
  console.log(moviedata)
  //  let [inpdata,setinpdata]=useState('')
  return (
<div className='main' >

{/* <Searchbar/> */}
<div className='searchbar'>
        <img className='searchimg' src={Search} alt="logo" />
        <input type="text" placeholder='Search' onChange={e=>setmovie(e.target.value)} />
        <button className='searchbutton' onClick={()=>getdata(movie)}><img className='searchimg' src={Searchbutton} alt="Search" /></button>
    </div>
<section className='mainsection'>
   {moviedata
   ?<Moviedata data={moviedata}/>
  :<h1>loding</h1>}
  
</section>
</div>
  )
}
