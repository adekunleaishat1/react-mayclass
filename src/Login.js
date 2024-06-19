import axios from 'axios'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [alluser , setalluser] = useState([])

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
            email:yup.string().email("email is not valid").required("email is required"),
            password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password must have atleast one uppercase,a special character and an integer ").required("password cannot be empty")
        }),
        onSubmit:(value)=>{
            console.log(value);
            axios.get("http://localhost:4567/users")
            .then((res)=>{
                console.log(res.data);
                setalluser(res.data)
            }).catch((err)=>{
                console.log(err);
            })
            console.log(alluser);
            if (alluser) {
              let exist = alluser.find((e)=> e.email == value.email) 
              console.log(exist);
              if (exist && exist.password == value.password) {
                 console.log("login successful");
                 toast.success("login successful")
              }else{
                console.log("user does not exist");
                toast.error("user does not exist")
              }
            }
        }
    })
  return (
    <div>
       <form className='w-50 mx-auto bg-white shadow px-3 py-3' onSubmit={formik.handleSubmit} action="">
        <p className='text-center text-muted'>Login</p>
       <div className='form-group mt-3'>
                <label htmlFor="">Email</label>
                <input className='form-control' name='email' onBlur={formik.handleBlur}  onChange={formik.handleChange} type="email" />
                <p className='text-danger fs-6'>{formik.touched.email && formik.errors.email? formik.errors.email : ""}</p>
            </div>
            <div className='form-group mt-3'>
                <label htmlFor="">Password</label>
                <input className='form-control' name='password' onBlur={formik.handleBlur}  onChange={formik.handleChange} type="text" />
                <p className='text-danger fs-6'>{formik.touched.password && formik.errors.password? formik.errors.password : ""}</p>
            </div>
            <button className='btn btn-primary mt-3' type='submit'>
                Login
            </button>
            <ToastContainer/>
       </form>
    
    </div>
  )
}

export default Login