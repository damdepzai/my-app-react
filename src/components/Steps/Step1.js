import React from 'react'
import {useForm} from 'react-hook-form'
import { Redirect } from 'react-router-dom';
const Step1 = ( { totalStep,setStep,setTotalStep }) =>{

    const { register, handleSubmit, errors } = useForm();

    const onHandleSubmit = (data) => {
       setStep(2);

       let data_clone = [...totalStep];
       data_clone[0].data.meal = data.meal;
       data_clone[0].data.people = data.people;
      setTotalStep(data_clone)
    };
  const onChaneSelect =(e) =>{
    var newVal = e.target.value
        let data_clone = [...totalStep];
        data_clone[0].data.meal = newVal;
        setTotalStep(data_clone)
     }
     return(
         <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="col-6 m-auto">
                <div className="form-group">
                    <p>Please select a Meal</p>
                    <select name="meal" onChange={onChaneSelect}  className="browser-default custom-select" ref={register({required: true})}  value={totalStep[0].data.meal}>
                        <option value="" selected>------Meal--------</option>
                        {totalStep[0].category.map(({value, name}, key) => (
                            <option value={value} key={key}   >{name}</option>
                        ))}
                    </select>
                    {errors.meal && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <p>Please enter number of people</p>
                    <input type="text" name="people" defaultValue={totalStep[0].data.people} id="form1" className="form-control" ref={register({ required: true })} />
                    {errors.people && <span className="text-danger">This field is required</span>}
                </div>
            </div>
           
            <button class="btn" type="submit">
                    Next <span class="badge badge-primary"></span>
            </button>
        </form>
    )

}
export default Step1