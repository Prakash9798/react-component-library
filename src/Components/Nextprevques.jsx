
import React, { useState } from "react";

 const Nextprevques=()=>{
    const questions=[
        {
            id:1,
            question:"Who is the Prime Minister of india?",
            options:["Modi","Yogi","ShivrajSingh","Amit Shah"],
            correct:"Modi"
        },
        {
            id:2,
            question:"What is the capital of India?",
            options:["Mumbai","Delhi","Kolkata","Chennai"],
            correct:"Delhi"
        },{
            id:3,
            question:"Who is the Chief Minister of Bihar?",
            options:["Nitish Kumar","Yogi","Kejriwal","Amit Shah"],
            correct:"Nitish Kumar"
        }
    ];

    const[currentIndex,setCurrentIndex]=useState(0);
    const[selectedOption,setSelectedOption]=useState([]);
    const[score,setScore]=useState(null);
    const isOptionSelected = selectedOption[currentIndex] !== undefined;

    
    
    const nextQuestions=()=>{
       if(currentIndex<questions.length-1){
        setCurrentIndex(currentIndex+1);
       }
    }
    // const prevQuestions=()=>{
    //     if(currentIndex>questions.length-1){
    //         setCurrentIndex(currentIndex-1);
    //     }
    // }
    const handleOptionChange=(e)=>{
        const updatdOptions=[...selectedOption];
        // console.log(updatdOptions);
        updatdOptions[currentIndex]=e.target.value
        setSelectedOption(updatdOptions);
    }
    const calculateScore=()=>{
        let points=0;
        questions.forEach((ques,id)=>{
            if(ques.correct===selectedOption[id]){
                points++;
            }
        })
        setScore(points);
    }
  


    return(
        <>

        <div style={{width:'400px',height:'200px',backgroundColor:'green',padding:'10px'}}>
        <h1>{questions[currentIndex].id}.{questions[currentIndex].question}</h1>
        {score===null ?(
            <>
            {questions[currentIndex].options.map((option,id)=>(
                <label htmlFor="
                ">
                    <input type="radio"
                     name={`question-${currentIndex}`}
                     value={option}
                     checked={selectedOption[currentIndex]===option}
                     onChange={handleOptionChange}
                    />
                    {option}
                </label>
               
             ))}
           
             <br /><br />
             <button onClick={()=>setCurrentIndex((prev)=>prev-1)} 
                 disabled={currentIndex===0 || !isOptionSelected}
                
                >Prev</button>

             {currentIndex===questions.length-1 ? (
                <button onClick={calculateScore} disabled={!selectedOption[currentIndex]}>Submit</button>
             ):(
                <button onClick={nextQuestions} disabled={!isOptionSelected}>Next</button>
             )}
           

         
            </>
        ):(
            <>
             <h2>your score:{score} out of {questions.length}</h2>
            </>
        )}
       
        </div>
        </>
    )
 }
 export default Nextprevques;