import {React,useState} from "react";

const Stepper = ({ stepUI }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [level, setLevel] = useState(0);

const handlenext=()=>{
    setCurrentIndex((currentIndex)=>
      currentIndex+1
    );
    setLevel(level+1)
}
let width = 0;

  if (level === 0) {
    width = 0;
  } else if (level === 1) {
    width = 35;
  } else if (level === 2) {
    width = 68;
  } else {
    width = 100;
  }

  return (
    <>
    <div className="progress">
        <div className="progress-bar" style={{
        width: `${width}%`,
      }} ></div>
    </div>
      <div className="step-container">
        {stepUI.map((step, index) => {return(
          <div key={step.name} className="step-item">
            <div style={{backgroundColor:currentIndex===index&&"rgb(43, 116, 234)"}} 
                 className={`step-number ${currentIndex > index && "completed"}`} >
                {currentIndex>index? (<>&#10003;</>):index+1}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        )
        })
        }
      </div>
      <div className="details">
        
        {currentIndex>3?null:stepUI[currentIndex].Component()}
        {currentIndex>2? currentIndex>3?"Ordered Already Delivered":   <button onClick={handlenext} >Finshed</button>: <button onClick={handlenext}>Next</button>}
      </div>
     
    </>
  );
};

export default Stepper;
