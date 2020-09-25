import React from 'react'
import {useForm} from 'react-hook-form'

const Preview = ({ totalStep,setStep,setTotalStep }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onHandleSubmit = data => {
        let data_clone = [...totalStep];
        data_clone[0].data.meal = data.meal;
        data_clone[0].data.people = data.people;
 
 
       setTotalStep(data_clone)
 
     }
     const pre = () => {
         setStep(3)
     }
    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="md6 m-auto">
                    <div className="row">
                        <p className="md-6">Meal</p>
                        <p className="md-6">Lunch</p>
                    </div>
                    <div className="row">
                        <p className="md-6 p-50">Meal</p>
                        <p className="md-6">Lunch</p>
                    </div>
                    <div className="row">
                        <p className="md-6 p-50">Meal</p>
                        <p className="md-6">Lunch</p>
                    </div>
                    <div className="row">
                        <p className="md-6 p-50">Meal</p>
                        <p className="md-6">Lunch</p>
                    </div>
                    <div className="row">
                        <p className="md-6 p-50">Meal</p>
                        <p className="md-6">Lunch</p>
                    </div>
                    <button class="btn" onClick={pre}>
                        Pre <span class="badge badge-primary"></span>
                </button>

                <button class="btn" type="submit">
                        Submit <span class="badge badge-primary"></span>
                </button>
            </div>
        </form>
    )
}


export default Preview
