import React, { useState } from "react";
const RandomPassword=()=>{
   const[length,setLength]=useState(0);
    let str="abc346*&^";
  
     let generatedPassword="";
     for(let i=1; i<length; i++){
     let random=Math.floor(Math.random()*str.length);
       generatedPassword+=str[random];
     }
    //  console.log(generatedPassword);
     

     return(
        <>
        <input type="text" name="" id=""
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        
        />
       <h1>Password:{generatedPassword}</h1>
        </>
     )
}
export default RandomPassword;