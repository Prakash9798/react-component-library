  import React, { useEffect, useState } from "react";
 
 const Digital=()=>{
    const[time,setTime]=useState(getCurrentTime());

    function getCurrentTime(){
        const now=new Date();
        // console.log(now.toLocaleTimeString());
        return now.toLocaleTimeString();
        
     }
     useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(getCurrentTime());
        },1000);

        return ()=>clearInterval(interval);
     },[]);
    return(
        <>
              <div style={styles.container}>
                 <h1 style={styles.heading}>Digital Clock</h1>
                 <div style={styles.clock}>{time}</div>
                </div> 
        </>
    )
 }
    const styles={
        container:{
            textAlign:'center',
            marginTop:'100px',
            fontFamily:'Arial, sans-serif',
        },
        heading:{
            fontSize:'2rem',
            marginBottom:'20px',
        },
        clock:{
            fontSize:'3rem',
            fontWeight:'bold',
            background:'#222',
            color:'#0f0',
            padding:'20px 40px',
            borderRadius:'10px',
            display:'inline-block',
            boxShadow:'0 0 20px #0f0'
        }
    }
 export default Digital;