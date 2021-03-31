import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:5000",
    // http://localhost:5000",
   // http://localhost:5000/user/signup
})
//https://tru-profile.herokuapp.com/
export default instance