import React, { Component } from 'react'
import {Formik} from "formik";
import swal from  "sweetalert"
import * as Yup from "yup";
import {Link} from "react-router-dom"
import axios from '../../axios';

const validPhonePrefix = [
  '0703',
  '0706',
  '0803',
  '0806',
  '0810',
  '0813',
  '0814',
  '0816',
  '0903',
  '0705',
  '0805',
  '0811',
  '0815',
  '0905',
  '0701',
  '0708',
  '0802',
  '0808',
  '0812',
  '0902',
  '0809',
  '0817',
  '0818',
  '0909',
  '0804',
];


const signupSchema = Yup.object().shape({
  username: Yup.string()
  .min(3 ,"user is to short")
  .max(50, "user is to long")
  .required("user is require"),
  email:Yup.string()
  .email("invalid email")
  .required("Email is required"),
  password:Yup.string()
  .required("password is required")
  .min(6, 'Password should be of minimum 8 characters length'),
  confirm_password:Yup.string().required()
  .oneOf([Yup.ref("password"), null],
      "both password need to be desame"
  ),
  phoneNumber: Yup
  .string()
  .required('Please enter your phone number')
  .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .test(
      'digits',
      'Must be valid Nigerian number (e.g. 0818-XXX-XXXX)',
      (phone) => {
        if (!phone) return false;
        // check that the phone number starts with one of the valid prefixes
        return validPhonePrefix.some((prefix) => phone.startsWith(prefix));
      }
    )
    .min(11, 'Phone must be 11 digits')
    .max(11, 'Phone must be 11 digits'),

})
  
//co
//const  history = useHistory();

export default class Register extends Component {
    constructor(props) { super(props);
        this.state = { alert: null };
        }
        submitForm = (values,history)=>{
          console.log(history)
          axios.post("/user/signup", values)
          .then(res =>{
              console.log(res.data.result);
              if(res.data.result === "success"){
                localStorage.setItem("TOKEN_KEY",res.data.token);
                swal("success", res.data.message, "success")
                .then(value =>{
                    setTimeout(() => {
                        history.push("/")
                    }, 2000);
                   
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
     
    return (
      <form  onSubmit={handleSubmit}>
        <div className="input-group mb-3">
        <input type="text" onChange={handleChange}
                    value={values.username} style={{width:"100%"}}
                    placeholder="Username"
                    name="username"
                    className={errors.username && touched.username ? "form-control is-invalid" : "form-control"}
                    />
                    {errors.username && touched.username ? (
                        <small id="passwordHelp" class="text-danger">
                            {errors.username}
                        </small>
                    ):null}
        </div>
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
        <input type="password" onChange={handleChange}
                    value={values.password}
                    style={{width:"100%"}}
                    placeholder="password"
                    name="password"
                   
                    className={errors.password && touched.password ? "form-control is-invalid" : "form-control"}
                    />
                    {errors.password && touched.password ? (
                        <small id="passwordHelp" class="text-danger">
                            {errors.password}
                        </small>
                    ):null}
        </div>
        <div className="input-group mb-3">
        <input type="password" onChange={handleChange}
                    value={values.confirm_password}
                    style={{width:"100%"}}
                    placeholder="confirm_password"
                    name="confirm_password"
                   
                    className={errors.confirm_password && touched.confirm_password ? "form-control is-invalid" : "form-control"}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                        <small id="passwordHelp" class="text-danger">
                            {errors.confirm_password}
                        </small>
                    ):null}
        </div>

        <div className="input-group mb-3">
        <input type="text" onChange={handleChange}
                    value={values.phoneNumber}
                    style={{width:"100%"}}
                    placeholder="phoneNumber"
                    name="phoneNumber"
                   
                    className={errors.PhoneNumber && touched.PhoneNumber ? "form-control is-invalid" : "form-control"}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                        <small id="passwordHelp" class="text-danger">
                            {errors.phoneNumber}
                        </small>
                    ):null}
        </div>

        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input name="terms" id="agreeTerms" disabled type="checkbox" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <Link >terms</Link>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button className="btn btn-danger btn-block" type="submit">Register</button>
          </div>
          {/* /.col */}
        </div>
      </form>);
        }
        render(){
          return(
            <div className="register-page">
            <div className="register-box">
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
     <h1><b>TRU</b>CLASS</h1>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Register as new User</p>
       
      <Formik initialValues={{
                           username:"",
                           email:"",
                           password:"",
                           confirm_password:"",
                           phoneNumber:"" 
                        }}
                        onSubmit={(values,{setSubmitting})=>{
                            console.log(values);
                            this.submitForm(values,
                                
                                this.props.history);
                            setSubmitting(false)
                        }}
                        validationSchema={signupSchema}
                        >
                            {props =>this.showForm(props)}
                        </Formik>
{/** 
      <div className="social-auth-links text-center">
        <Link className="btn btn-block btn-primary" to="#">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </Link>
        <Link className="btn btn-block btn-danger" to="#">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </Link>
      </div> */}
<p className="text-center"> OR </p>
<div className="social-auth-links text-center">
      <Link className="text-center btn btn-block  " to="/">I  HAVE AN ACCOUNT ALREADY</Link>
      </div>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>

        </div>
    )
}
}
