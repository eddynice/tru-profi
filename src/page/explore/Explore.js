import React,{useState,useEffect} from 'react'

import style from "./detail.module.css"
import Media from '../../components/Media/Media';
import axios from "axios"
import Osa from "../../images/Loader v6.gif" 
//import { useParams } from 'react-router';


export default function Explore() {
  const [media, setmedia] = useState(null);
 //const {id} = useParams()
 const url=`https://60545835d4d9dc001726ce7d.mockapi.io/Data/`

 useEffect(()=>{
  axios.get(url)
  .then(responnse=>{
    setmedia(responnse.data)
    console.log(responnse)
  })

 }, [url])

  return (
    <div >
     
      <main>
      <div className={style.header}>
            <h1>Tru Pics</h1>
        </div>

        {media === null ? (
                      <div className={style.load}>
                        <img src={Osa} alt="LOADING" />
                        <h3 style={{textAlign:'center'}}>Loading....</h3></div>
                    ):(

<div className={style.grid}> 

                  {media.map((item) => (
                      <Media
                        key={item.id}
                       name={item.name}
                       Image={item.Image}
                    
                       
                      />
                  ))}
                    
                     
              </div>

      

                
                    )}
                
                  
            
      </main>
      
    </div>
  )
}
