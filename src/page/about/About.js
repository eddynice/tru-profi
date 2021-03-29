import React from 'react'
import {Link} from "react-router-dom"
import Img from "../../images/IMG_20190719_205125.jpg"
import styled from "./about.module.css"

export default function About() {
    return (
        
        <div className="container">
     
        <div className="col-md-12">
         <div className={styled.move}>
        <div className="card card-danger card-outline mt-4 ">
        <div className="card-body box-profile ">
          <div className="text-center">
            <img className="profile-user-img img-fluid img-circle" alt="Userprofilepicture" src={Img} />
          </div>
          <h3 className="profile-username text-center">Tru Osazee</h3>
          <p className="text-muted text-center">Software Engineer</p>
          <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Followers</b> <Link className="float-right">1,322</Link>
            </li>
            <li className="list-group-item">
              <b>Following</b><Link className="float-right"></Link>
            </li>
            <li className="list-group-item">
              <b>Friends</b><Link className="float-right"></Link>
            </li>
          </ul>
          <Link className="btn btn-danger btn-block" to="https://twitter.com/iamEddynics"><b>Follow</b></Link>
        </div>
        </div>
        </div>
        {/* /.card-body */}
     
      {/* /.card */}
      {/* About Me Box */}
      <div className="card card-danger">
        <div className="card-header">
          <h3 className="card-title">About Me</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <strong><i className="fas fa-book mr-1" /> Education</strong>
          <p className="text-muted">
            B.SC in Computer Science from the University of Ambrose Alli 
          </p>
          <hr />
          <strong><i className="fas fa-map-marker-alt mr-1" /> Location</strong>
          <p className="text-muted">Nigeria, Edo State</p>
          <hr />
          <strong><i className="fas fa-pencil-alt mr-1" /> Skills</strong>
          <p className={styled.push}>

            <span >UI Design</span>

            <span>Coding</span>
            <span> Javascript </span>

            <span>PHP</span>

            <span>Node.js</span>
            <span>React.js</span>
            <span>Express.js</span>
          </p>
          <hr />
          <strong><i className="far fa-file-alt mr-1" /> Notes</strong>
          <p className="text-muted">

passionate about web Accessiblity and web Technologies.Skilled
in transforming UI/UX designs to readable codes. I develop web applications and tools with javascript



          </p>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
    </div>
  
 
  
    )
}
