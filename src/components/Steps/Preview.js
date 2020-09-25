import React from 'react'
import {useForm} from 'react-hook-form'

const Preview = ({ totalStep,setStep,setTotalStep }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onHandleSubmit = data => {
       
 
     }
     const pre = () => {
         setStep(3)
     }
    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="md6 m-auto">
                    <div className="row">
                        <p className="md-6 p-50">Meal</p>
                        <p className="md-6 ">
                            {totalStep[0].category.map( ({value,name})=>{
                                if(value == totalStep[0].data.meal){
                                return name
                                }
                             })}
                        </p>
                    </div>
                    <div className="row">
                        <p className="md-6 p-50">No of People</p>
                        <p className="md-6">{totalStep[0].data.people}</p>
                    </div>
                    <div className="row">
                        <p className="md-6 p-50">Restaurant</p>
                        <p className="md-6">
                            {totalStep[1].listRestaurants.map( ({value,name})=>{
                                    if(value == totalStep[1].data.restauranted){
                                    return name
                                    }
                            })}
                        </p>
                    </div>
                    <div className="row">
                        <p className="md-6 p-50">Dishes</p>
                        <p className="md-6">
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

                        </p>
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
