import React,{useState} from 'react'
import {Route, Redirect, Switch, withRouter, useHistory} from "react-router-dom"
import Footer from './components/Footer.js/Footer'
import Explore from './page/explore/Explore'
import Errorm from './page/errorpage/Error'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Abou from './page/about/About'

import Time from './page/timeline/Timeline'
import Dropdown from './components/Dropdown/Dropdown'

import swal from "sweetalert";
import Navbar from './components/NavBar/Navbar.js'
//import Timeline from './page/timeline/Timeline'


//check the authentication state of the user

const isLoggin = ()=>{
  return ( localStorage.getItem("TOKEN_KEY") !=null
  //return  null;
  )
};


//const isLoggin = ()=>{
//}

// secure route protect route
const SecuredRoute = ({component:Component, ...rest})=>(
    <Route 
    {...rest}
    render={props=> 
  //ternary condition 
  isLoggin() === true ? (
      <Component {...props}/>
  ): (
      <Redirect to="/"/>
  )
  }
  />
)



 function App() {
    const [isOpen, setisOpen] = useState(false)
    const history= useHistory()
    

  const toggle=()=>{
    setisOpen(!isOpen)
  }

  const  Logout=(props)=>{
        swal("Are you sure signOut ?",{
            buttons:{
                nope: {
                    next: "let me back",
                    value: "nope"
                },
                sure:{
                    text:"i m suure",
                    value: "sure"
                
                }
            }
        } ).then(value=>{
            switch(value){
                case "sure":
                    swal("sign out successfully", "success").then(val =>{
                        localStorage.removeItem("TOKEN_KEY");
                       return history.push("/")
                     
                        
                    })
                    break;
                    case "nope":
                        swal("OK", "success");
                        break;
                        default:
                            swal("Got away sately");
            }
        })
  
      }


    return (
        <>  
           {isLoggin() ? <Navbar toggle={toggle} Logout={Logout}/>:  <Redirect to="/"/>}
           <Dropdown isOpen={isOpen} toggle={toggle} Logout={Logout}/>
       
        <Switch>
       
        
        <Route exact path="/" component={Login}/>
        <Route   path="/register" component={Register}/>
        
       
     
        <SecuredRoute path="/detail" component={Explore}/>
        <SecuredRoute path="/timeline" component={Time}/>
        <SecuredRoute path="/about" component={Abou}/>
        
      
       
       
        <Route  component={Errorm}/>
    
        
        
        
        
        
        </Switch>
        {isLoggin() && <Footer/>}  
        </>
    )
}

export default withRouter(App)