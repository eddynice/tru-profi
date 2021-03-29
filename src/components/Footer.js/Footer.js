import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footerhomew}>
              <footer className={styles.footer}>
          <section>
          <h2>
              <i className='fab fa-twitter'></i> follow me 
            </h2>
            <ul>
             
              <li>
                <a
                 href='https://github.com/eddynice'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @Eddynice
                </a>
              </li>
             
              
            </ul>
          </section>

       {/*    <section>
            <h2>
              <i className='fas fa-tshirt'></i> Buy an #EndSARS T-shirt
            </h2>
            <img className={styles.ad} src='assets/img/ad.jpg' alt='' />
       </section>  */}

          <section>
            <h2>
              <i className='fas fa-laptop-code'></i> Contributor
            </h2>
            <ul>
              <li>
                <a
                  href='https://twitter.com/iamEddynics'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                 @iamEddynics
                </a>
              </li>

              
             

              

            </ul>
          </section>


          <section>
            <h2>
              <i className='fab fa-twitter'></i> About Me
            </h2>
            <ul>
             
              <li>
                
                <Link to="/about">TRU</Link>
                  
               
              </li>
             
              
            </ul>
          </section>
        </footer>
        </div>
    )
}
