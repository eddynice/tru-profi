import React,{useState, useEffect} from 'react'
import ReadMoreReact from 'read-more-react';
import CommentBox from "./CommentBox"
import axios from "../../axios"
import swal from 'sweetalert';

export default function Timeline() {
  const [showSuccess, setsubmit] = useState(false)
  const [state, setstate] = useState([])
  const [input,setInput] = useState({
    name:"",
    topic:"",
    comment:"",
 
  })

  const handleChanges = (event)=>{
    setInput({...input,
      [event.target.name]: event.target.value
    })
  }

 useEffect(()=>{
  axios.get("/comment")
  .then((response)=>{
     setstate(response.data)
     console.log(response)
  })
 

 },[])


 const  handleSubmit=(e)=>{
  e.preventDefault();
  setsubmit(true);
  console.log(input) 
  axios.post("/comment/add", input)
    .then(res =>{
        console.log(res.data);
        if(res.data ){
          localStorage.setItem("TOKEN_KEY",res.data);
          window.location ="/timeline"
          swal("success", res.data, "success")
          .then(values =>{
             
          });
      }
        
    })
    
    .catch(error=>{
        console.log(error)
        swal("Error", "unexpected error", "error")
    })
  
}

    return (
   
<div>

      <section>
  <div  className="container  pt-3">
    {/* Timelime example  */}
    <div className="row">
      <div className="col-md-12">
      {state.map((item) => (
        
        <div  key={item._id} className="timeline">
          {/* timeline time label */}
          <div className="time-label mt-5 pt-3">
            <span className="bg-red">{item.date}</span>
          </div>
          
          {/* /.timeline-label */}
          {/* timeline item */}
          <div>
          
            <i className="fas fa-envelope bg-black" />
            <div className="timeline-item">
              <span className="time"><i className="fas fa-clock" />{item.time}</span>
              <h5 className="timeline-header">{item.name} Writes New Article</h5>
              <div className="timeline-body">
              <h3 className="text-center">{item.topic}</h3>
              <ReadMoreReact text={item.comment}
                min={50}
                ideal={100}
                max={1000}
              
                readMoreText="read more"
  
                />
              </div>
            </div>
          </div>
        
    </div>
  ))}
          </div>
         
    </div>
    <CommentBox handleChanges={handleChanges}  handleSubmit={ handleSubmit} input={input} setInput={setInput} showSuccess={showSuccess} />
  </div>
</section>
</div>  
    )
}
