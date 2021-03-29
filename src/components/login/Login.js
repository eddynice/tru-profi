import React,{Component} from 'react'
import swal from  "sweetalert"
import * as Yup from "yup";
import {Link} from "react-router-dom"
import {Formik} from "formik";
import axios from '../../axios';




 




const signupSchema = Yup.object().shape({
  email:Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});





export default class Log extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      alert: null
       
    }
  }
  

      
       //prevent loginin user from visiting the login page
componentDidMount(){
  if(localStorage.getItem("TOKEN_KEY") != null){
   return this.props.history.goBack();
  //  return this.props.history.push("/timeline");
  }
}
  submitForm = (values,history)=>{
    console.log(history)
    axios.post("/user/login/", values)
    .then(res =>{
        console.log(res.data.result);
        if(res.data.result === "success"){
          localStorage.setItem("TOKEN_KEY",res.data.token);
          swal("success", res.data.message, "success")
          .then(values =>{
             setTimeout(() => {
                  history.push("/timeline")
             }, 1000);
             
          });
      }else if(res.data.result === "error"){
          swal("error", res.data.message, "error")
      }
        
    })
    
    .catch(error=>{
        console.log(error)
       
        swal("Error", "unexpected error", "error")
    })
}

      

    showForm=({
    values,errors, touched,handleChange,handleSubmit,setFieldValue, isSubmitting
})=>{
   return(
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
        <input type="email" onChange={handleChange}
                    value={values.email} style={{width:"100%"}}
                    placeholder="Email"
                    name="email"
                    className={errors.email && touched.email ? "form-control is-invalid" : "form-control"}
                    />
                    {errors.email && touched.email ? (
                        <small id="passwordHelp" class="text-danger">
                            {errors.email}
                        </small>
                    ):null}

        </div>
        <div className="input-group mb-3">
          <input type="password"  name="password"  id="password" placeholder="Password" autoComplete="password"
                    autoFocus   value={values.password} onChange={handleChange} style={{width:"100%"}}
                    className={errors.password && touched.password ? "form-control is-invalid" : "form-control"}   
                     />
          {errors.password && touched.password ? (
                        <small id="passwordHelp" class="text-danger">
                            {errors.password}
                        </small>
                    ):null}
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" disabled />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>  
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-danger btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>);
}

render(){
  return(
    
    <div className="hold-transition login-page">
    <div className="login-box">
{/* /.login-logo */}
<div className="card card-outline card-primary">
<div className="card-header text-center">
<h1><b>TRU</b>-CLASS</h1>
</div>
<div className="card-body">
<p className="login-box-msg">Sign in </p>
<Formik initialValues={{
  email:"",
  password:"" 
}}
onSubmit={(values,{setSubmitting})=>{
  // console.log(values);
   this.submitForm(values,
       
       this.props.history);
   setSubmitting(false)
}}
validationSchema={signupSchema}
>
   {props =>this.showForm(props)}
</Formik>
{/** 
      <div className="social-auth-links text-center mt-2 mb-3">
        <Link to="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </Link>
        <Link to="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </Link>
      </div>
      */}
      {/* /.social-auth-links 
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p> */}
      
      <p className="text-center"> OR </p>
      <div className="social-auth-links text-center">
      <Link className="text-center btn btn-block" to="/register">REGISTER AS A NEW USER</Link>
      </div>
{/** 
      <p className="mb-0">
        <Link to="/register" className="text-center">Register a new User</Link>
      </p>
      */}
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>

        </div>
    )
   }
  }
