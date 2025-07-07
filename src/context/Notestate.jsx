 import React, { useState } from 'react'
 import notecontext from './nodecontext'
 export default function Notestate(props) {
    let [myname,setmyname]=useState("ayush")
     let cardarr=[]
   return (
     <notecontext.Provider value={{myname,setmyname,cardarr}}>
        {props.children}
     </notecontext.Provider>
   )
 }
 