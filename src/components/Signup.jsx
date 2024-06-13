import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [data,setdata]=useState({
        "name":"",
    "emailid":"",
    "pass":""
    })
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:8004/signup",data).then(
            (response)=>{
                if(response.data.status == "SIGNUP"){
                    alert("ADDED")
                }
                else{
                    alert("FAILED")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>NAME</b></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>EMAIL</b></label>
                            <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                            <input type="password" name="pass" value={data.pass} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn-btn-primary" onClick={readValue}>REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup