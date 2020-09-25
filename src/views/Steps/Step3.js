import React from 'react'
import {useForm} from 'react-hook-form'

const Step3 = ({ totalStep,setStep,setTotalStep }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onHandleSubmit = data => {
        setStep(4)
        let data_clone = [...totalStep];
        data_clone[0].data.meal = data.meal;
        data_clone[0].data.people = data.people;
 
 
       setTotalStep(data_clone)
 
     }
     const pre = () => {
         setStep(2)
     }
    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
             <div className="col-6 m-auto">
                <div className="row">
                    <div className=" col-6">
                        <p>Please select restaurant</p>
                        <select className="browser-default custom-select">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-6">
                    <p>Please enter number no of servings</p>
                        <input type="text" id="form1" className="form-control" />
                    </div>
                </div>
                <div className="form-control">
                <button ><i className="fa fa-plus-circle"></i></button>
                </div>
                <button class="btn" onClick={pre}>
                        Pre <span class="badge badge-primary"></span>
                </button>

                <button class="btn">
                        Next <span class="badge badge-primary"></span>
                </button>
            </div>
        </form>
    )
}


export default Step3
