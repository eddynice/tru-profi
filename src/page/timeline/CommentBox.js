import React from 'react'

export default function Daa({handleChanges, handleSubmit,setInput,showSuccess,input}) {
    return (
        <div>
       
<div className="col-md-12">
<div className="card card-danger card-outline">
<div className="card-header">
  <h3 className="card-title">Write New Article</h3>
</div>
{/* /.card-header */}

<div className="card-body">
<form  onSubmit={handleSubmit}>
  <div className="form-group">
    
    <input type="text" className="form-control" placeholder="Your Name:"
      name="name" value={input.name} required  onChange={handleChanges}  />
  </div>
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Topic:"
      name="topic" value={input.topic} required onChange={handleChanges} />
  </div>
  <div className="form-group">
    <textarea  type="text" id="compose-textarea" className="form-control" 
    style={{height: 300}} name="comment" value={input.comment} required onChange={handleChanges} />
  </div>
  <div className="form-group">
   
  
  </div>
   {/* /.card-body */}
  <div className="card-footer">
  <div className="float-right">
    
    <button type="submit" className="btn btn-danger"><i className="far fa-envelope" />Post</button>
  </div>
  
</div>
 
  </form>
  {showSuccess && <div className=" updated successfully">Success</div>}
</div>


{/* /.card-footer */}
</div>
{/* /.card */}
</div>
{/* /.col */}
{/* /.row */}
{/* /.container-fluid */}

        
    </div>
  
     
        
    )
}
