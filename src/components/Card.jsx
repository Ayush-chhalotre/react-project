 import React, { useContext } from 'react'
import Moviecard from './Moviecard'
import notecontext from '../context/nodecontext'
 import './Card.css'
 export default function Card() {
  let {cardarr}=useContext(notecontext)
  if(cardarr==[]){return(<h1 className='emptyalert'>Card is empty</h1>)}
   return (
     <div className='cardsdiv'>
       {cardarr.map((e)=>( <Moviecard element={e}/>))}

      

     </div>
   )
 }
 