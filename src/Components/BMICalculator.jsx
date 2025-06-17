import React, { useState } from "react";
const BMICalculator=()=>{
    const[weight,setWeight]=useState("");
    const[height,setHeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const[category,setCategory]=useState("");

    const calculateBMI=()=>{
        const heightInMeters=height/100;
        const bmiValue=weight/(heightInMeters*heightInMeters);
        const roundBMI=bmiValue.toFixed(2);
        setBmi(roundBMI);

        //categorySize

        if(bmiValue <18.5){
            setCategory("underweight")
        }
        else if(bmiValue>=18.5 && bmiValue<24.9){
            setCategory("overweight");
        }
        else{
            setCategory("Obese");
        }

        
    };
    return(
        <>
        <input type="number"
         placeholder="weight(kg)"
         value={weight}
         onChange={(e)=>setWeight(e.target.value)}
        />
        <br />

        <input type="text"
         placeholder="Height (cm)"
         value={height}
         onChange={(e)=>setHeight(e.target.value)}
        /> <br /> <br />
        <button onClick={calculateBMI}>Calculate BMI</button>
         <p>bmi:{bmi} and category:{category}</p>

        </>
    )
}
export default BMICalculator;