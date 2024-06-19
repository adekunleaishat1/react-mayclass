import React,{useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const Form = () => {
  const [alluser , setalluser] = useState([])
  const [loading , setloading] = useState(false)

  useEffect(() => {
      axios.get("http://localhost:4567/users")
      .then((res)=>{
        console.log(res);
        setalluser(res.data)
      }).catch((err)=>{
        console.log(err);
      })
  }, [loading])
  

    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            username:yup.string().min(5, "username cannot be lessthan five characters").required("username cannot be empty"),
            email:yup.string().email("email is not valid").required("email is required"),
            password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password must have atleast one uppercase,a special character and an integer ").required("password cannot be empty")
        }),
        onSubmit:(value)=>{
          setloading(true)
       let existuser =  alluser.find(e=> e.email == value.email)
        if (existuser) {
           alert("user already exist")
           setloading(false)
        }else{
          axios.post("http://localhost:4567/users", value)
          .then((res)=>{
            console.log(res);
            setloading(false)
          }).catch((err)=>{
            console.log(err);
            setloading(false)
          })
        }
        }
    })
    console.log(formik.errors);
    console.log(formik.touched);
  return (
    <div>
         <form className='w-50 mx-auto bg-white shadow px-3 py-3' onSubmit={formik.handleSubmit} >
            <h1 className='text-center text-muted'>Sign up</h1>
            <div className='form-group mt-3'>
                <label htmlFor="">Username</label>
                <input  className='form-control' name='username' onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" />
                <p className='text-danger fs-6'>{formik.touched.username && formik.errors.username? formik.errors.username : ""}</p>
            </div>
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
             <button className='btn btn-primary mt-3' type='submit'>{loading? "...loading" : "register"}</button>
         </form>
    </div>
  )
}

export default Form