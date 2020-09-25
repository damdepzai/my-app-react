import React from 'react'
import {useForm} from 'react-hook-form'

const Step3 = ({ totalStep,setStep,setTotalStep }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onHandleSubmit = data => {
        setStep(4)
 
     }
     const handleDish =(data) =>{
        let data_clone = [...totalStep];
        // data_clone[2].data.meal = data.meal;
        // data_clone[2].data.people = data.people;
        data_clone[3].dish.map( ({value,name}) =>{
            if(value == data.dish){
                
            }
        })
        console.log(data)
 
 
       setTotalStep(data_clone)
     }
     const pre = () => {
         setStep(2)
     }
   
    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
             <div className="col-10 m-auto">
                <div className="row">
                    <div className=" col-6">
                        <p>Please select restaurant</p>
                        <select name="dish" className="browser-default custom-select" ref={register({required: true})} >
                            <option value ="" selected>-----Dish------</option>
                            {totalStep[2].dish.map(({value, name}, key) => (
                            <option value={value} key={key}   >{name}</option>
                        ))}
                        </select>
                        {errors.dish && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-6">
                    <p>Please enter number no of servings</p>
                        <input name="order" type="text" defaultValue={1} id="form1" className="form-control" ref={register({ required: true })} />
                        {errors.order && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div>
                <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="30%">
                              <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                    </tr>
                                </tbody>
                            </table>
                <button onClick={handleSubmit(handleDish)} ><i className="fa fa-plus-circle"></i></button>
                </div>
                <button class="btn" onClick={pre}>
                        Pre <span class="badge badge-primary"></span>
                </button>

                <button class="btn" onClick="onHandleSubmit">
                        Next <span class="badge badge-primary"></span>
                </button>
            </div>
        </form>
    )
}


export default Step3
