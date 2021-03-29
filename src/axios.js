import axios from "axios";

const instance = axios.create({
    baseURL: "https://tru-profile.herokuapp.com/",
})

export default instance