import React from "react";
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"



const Register = () => {
    const navigate = useNavigate()

    const postTest = () => {

        console.log(formData.email)
        console.log(formData.password)
        const bodyParameters = {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password:formData.password

        };
        axios.post( 
          'http://localhost:5000/api/users/register',
        bodyParameters
        ).then((response) => {
            console.log(response.data)
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userid", response.data._id);
            console.log(localStorage.getItem("token"))
            navigate("/events")
            window.location.reload();
        }
        ).catch((error) => console.log(error));
    }
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
      })
    const onChange = e => {
        setFormData(state => ({
          ...state,
          [e.target.name]: e.target.value
        }))
        console.log(e.target.value)
      }
    const onSubmit = (event) => {
        postTest();
        event.preventDefault();
    }

    return(

        <section className="">
            <form onSubmit={onSubmit}>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Email</span>
            <input type="text" class="form-control" name="email" onChange={onChange} placeholder="Please enter your email adress" aria-label="Email" aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Password</span>
            <input type="password" class="form-control" name="password" onChange={onChange} placeholder="Please enter your password" aria-label="Password" aria-describedby="basic-addon2"/>
            </div>


            <div class="input-group mb-3">
            <span class="input-group-text">Firstname</span>
            <input type="text" class="form-control" name="firstname" onChange={onChange} placeholder="Enter your firstname" aria-label="Username"/>

            <span class="input-group-text">Lastname</span>
            <input type="text" class="form-control" name="lastname" onChange={onChange} placeholder="Enter your lastname" aria-label="Server"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}


export default Register