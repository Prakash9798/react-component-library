 import React, { useState } from "react";
 const PasswordGenerator=()=>{
    const [length,setLength]=useState(0);
    const [password,setPassword]=useState('');
    const[lowerCase,setLowerCase]=useState(false);
    const[uppercase,setUppercase]=useState(false);
    const [numbers,setNumbers]=useState(false);
    const[symbols,setSymbols]=useState(false);
    
    
   const generatePassword=()=>{
     let generatedPassword="";
     let charset="";
      if(lowerCase) charset+="abcdefghijklmnopqrstuvwxyz";
      if(uppercase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(numbers) charset+="0123456789";
      if(symbols) charset+="!@#$%^&*(<>";
      for(let i=0; i<length;i++){
        const randomIndex=Math.floor(Math.random()*charset.length);
        generatedPassword+=charset[randomIndex];
      }
      setPassword(generatedPassword);
    }
    return(
        <>

          <div style={{height:'35px',width:'200px',border:'2px solid black',textAlign:'center',padding:'5px'}}>
             <p>password:{password}</p>
          </div>
          <br />
        <input type="range"  
         value={length}
         onChange={(e)=>setLength(e.target.value)}
        /> <br />
        <label >Include Lowecase</label>
        <input type="checkbox" 
         checked={lowerCase}
         onChange={()=>setLowerCase(!lowerCase)}
        /> <br />
        <label >Include Uppercase</label>
        <input type="checkbox"
         checked={uppercase}
         onChange={()=>setUppercase(!uppercase)}
        />
        <br />
        <label >Include Numbers</label>
        <input type="checkbox"
         value={numbers}
         onChange={()=>setNumbers(!numbers)}
        />
        <br />
        <label >Include Symbols</label>
        <input type="checkbox"
         value={symbols}
         onChange={()=>setSymbols(!symbols)}
        /> <br /> <br />

        <button onClick={generatePassword}>Gnerate Password</button>
         
        

       
        
        </>
    )
 }
 export default PasswordGenerator;