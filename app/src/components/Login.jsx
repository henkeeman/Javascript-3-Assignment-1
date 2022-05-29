import React from "react";
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate()
    
    const postTest = () => {

        console.log(formData.email)
        console.log(formData.password)
        const bodyParameters = {
          email: formData.email,
          password: formData.password
        };
      // Skriv komma här efter "bodyparamaters"
        axios.post( 
          'http://localhost:5000/api/users/login',
        bodyParameters
        // config
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
        password: ''
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
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input name="password"type="password" onChange={onChange} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        )
}


export default Login