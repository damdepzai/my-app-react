import React from 'react'
import {useForm} from 'react-hook-form'
const Step1 = ( { totalStep,setStep,setTotalStep }) =>{
    const { register, handleSubmit, watch, errors } = useForm();

    const onHandleSubmit = data => {
       setStep(2);

       let data_clone = [...totalStep];
       data_clone[0].data.meal = data.meal;
       data_clone[0].data.people = data.people;


      setTotalStep(data_clone)

    }
     return(
         <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="col-6 m-auto">
                <div className="form-group">
                    <p>Please select a Meal</p>
                    <select name="meal" className="browser-default custom-select" ref={register({ required: true })} >
                        <option selected>------Restaurant--------</option>
                        {totalStep[0].category.map(({value, name}, key) => (
                            <option value={value} key={key}>{name}</option>
                        ))}
                    </select>
                    {errors.meal && <span>This field is required</span>}
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