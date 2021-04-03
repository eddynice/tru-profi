import axios from "axios";

const instance = axios.create({
    baseURL:"https://tru-profile.herokuapp.com",
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
    // http://localhost:5000",
   // http://localhost:5000/user/signup
})
//https://tru-profile.herokuapp.com/
export default instance