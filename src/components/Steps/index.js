import React, {useEffect} from 'react'
import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'
import Preview from './Preview'


const Step = ({step, setStep, totalStep,setTotalStep}) => {


    const renderStepper = () => {
        return (
            totalStep.map((item, key) => (
                <li key={key} className={item.number === step ? 'active' : ''}>
                    <a href="#!">
                        <span className="circle">{item.number}</span>
                        <span className="label">{item.name}</span>
                    </a>
                </li>
            ))
        )
    }
    const renderViewStep = () =>{
        return (
            <div>
                {step === 1 ? <Step1 setStep={setStep} totalStep={totalStep} setTotalStep={setTotalStep}></Step1> : ''}
                {step === 2 ? <Step2 setStep={setStep} totalStep={totalStep} setTotalStep={setTotalStep}></Step2> : ''}
                {step === 3 ? <Step3 setStep={setStep} totalStep={totalStep} setTotalStep={setTotalStep}></Step3> : ''}
                {step === 4 ? <Preview setStep={setStep} totalStep={totalStep} setTotalStep={setTotalStep}></Preview> : ''}

            </div>
        )
    }
    
    const pre = () => {
        setStep(step - 1)
    }

    const next = () => {
        if(step >3){
            setStep(step + 1)
        }

       
    }

    useEffect(() => {
        renderStepper()
    }, [step])
    var buttonPre;
    if (step >1) {
        buttonPre = <button className="btn" onClick={pre}>
             Pre <span className="badge badge-primary"></span>
        </button>
    }
    let buttonNext;
    if(step <= 3){
        buttonNext = <button type="submit"  className="btn" onClick={next}>
        Next <span className="badge badge-primary"></span>
    </button>
    }
    else{
        buttonNext = <button type="submit"  className="btn" onClick={next}>
        Submit <span className="badge badge-primary"></span>
        </button>
    }
    return (
            <div className="row">
                <div className="col-md-12 ">
                    <ul className="stepper stepper-horizontal"> 
                        {renderStepper()}
                    </ul>
                </div>
                <form className="col-md-7 m-auto " >
                    <div >
                        <div className="container">
                            {renderViewStep()}
                        </div>
                    </div>
                     
                </form>
            </div>
     
    )
}

export default Step
