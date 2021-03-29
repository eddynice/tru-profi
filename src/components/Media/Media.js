import React from 'react'
import style from "./media.module.css"

export default function Media({name,Image,}) {
   console.log()
    return (
        <div>
       
        <div className={style.medias}>
            
            <div className={style.title}>
            <h6>{name}</h6>
          
              
        </div>
       
   <img src={Image} style={{height:120,width:220}} alt="check"/>  
        </div>
        </div>
    )
}
