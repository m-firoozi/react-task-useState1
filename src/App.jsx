
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
import './App.css';
import { useState } from "react";

 
 function App() {

  const [step,setStep]=useState(0)
  const [color,setColor]=useState("purple")

  const handleNext=()=>{
    const nextStep=step < messages.length -1 ? step + 1 : 0;
    setStep(nextStep);
    setColor("purple");}


    const handlePrevious=()=>{
      const prevStep=step > 0 ? step -1 :messages.length - 1;
      setStep(prevStep);
      setColor("purple")
    }
  return (
    <div class="steps">
      <div class="numbers">
        <div class="step-1" style={{backgroundColor: step ===0 ? "purple" : "gray"}}>1</div>
        <div class="step-2" style={{backgroundColor: step ===1 ? "purple" : "gray"}}>2</div>
        <div class="step-3" style={{backgroundColor: step ===2 ? "purple" : "gray"}}>3</div>
      </div>

      <p class="message">step:{step + 1}<br/>
        {messages[step]}</p>

      <div class="buttons">
        <button class="previous" onClick={handlePrevious} style={{backgroundColor:color,color:"white"}}>Previous</button>
        <button class="next" onClick={handleNext} style={{backgroundColor:color,color:"white"}}>Next</button>
      </div>
    </div>
  );
}
export default App;