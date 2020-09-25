import React from 'react'
import {useForm} from 'react-hook-form'

const Step2 = ({totalStep,setStep,setTotalStep}) => {
    const { register, handleSubmit, errors } = useForm();

    const onHandleSubmit = (data) => {
        console.log(4234)
        setStep(3);
 
        let data_clone = [...totalStep];
        data_clone[1].data.restauranted = data.restaurant;
       setTotalStep(data_clone)
     };
   const onChaneSelect =(e) =>{
     var newVal = e.target.value
         let data_clone = [...totalStep];
         data_clone[1].data.restauranted = newVal;
         setTotalStep(data_clone)
      }
    const pre = () => {
        setStep(1)
    }
    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="col-6 m-auto">
                <div className="form-group">
                    <p>Please select restaurant</p>
                    <select name="restaurant" className="browser-default custom-select" ref={register({required: true})}  value={totalStep[1].data.restauranted}>
                        <option value="" selected>-----Restaurant------</option>
                        {totalStep[1].listRestaurants.map(({value, name}, key) => (
                            <option value={value} key={key}   >{name}</option>
                        ))}
                    </select>
                    {errors.restaurant && <span className="text-danger">This field is required</span>}
                </div>
                <button class="btn"onClick={pre}>
                        Pre <span class="badge badge-primary"></span>
                </button>

                <button class="btn" type="submit">
                        Next <span class="badge badge-primary"></span>
                </button>
            </div>
        </form>
    )
}


export default Step2
