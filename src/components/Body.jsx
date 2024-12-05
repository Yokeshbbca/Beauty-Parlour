
import { useGSAP } from "@gsap/react"
import gsap from "gsap/gsap-core"
import React from "react"
import { Link } from "react-router-dom"


function Body()  {

  useGSAP(() => {
    gsap.to('.parlour-title', { opacity: 1, delay: 1.5, x: 1 });
    gsap.to('#para', { opacity:1, delay:1.5, x:-2 });
    gsap.to('.btn-1', { opacity:1, delay: 1.5, y: -10, stagger: 1.5 });
    gsap.to('.d-img', { opacity:1, delay: 1, stagger: 1 });
    gsap.to('.d-about', { opacity:1, delay:3, x:4 });
    gsap.to('.a-para', { opacity:1, delay:3, y:4 });
    gsap.to('.d-container', { opacity:1, delay:3, stagger:1.5 });
  }, [])
  
  return (
    <>
      <section className="first-section" id="home">
        <h1 id='name' className="parlour-title">
          Beauty <span className="c-p">Parlour</span>
        </h1>
        <p id="para" className="margin-l-40 w-50 para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam aut 
          explicabo consequatur nisi maiores laudantium suscipit,
          vitae laboriosam praesentium! Assumenda,
          odit iure! Amet sed sapiente veniam iste tempora nam.        
        </p>
        <div className="button-div">
          <Link to="/appointment"><button className="btn-1"> GET GORGEOUS</button></Link>
          <button className="btn-1">CONTACT NOW</button>
        </div>
      </section>

      <section className="second-section" id="about">
      <div className="grid-image">
        <img className="d-img" src="/public/image1.jpg" alt="image1" />
        <img className="d-img" src="/public/image2.jpg" alt="image2" />
        <img className="d-img" src="/public/image3.jpg" alt="image3" />
        <img className="d-img" src="/public/image4.jpg" alt="image4" />
      </div>
      <div>
        <h3 className="d-about">Welcome to</h3>
        <h2 className="d-about">My Beauty Studio</h2>
        <p className="margin-l-40 a-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nihil exercitationem eos quasi, eius doloremque recusandae 
          expedita minima pariatur totam nemo adipisci ab quaerat soluta. 
          Sapiente obcaecati consequatur quia asperiores deleniti!</p>
          <button className="button-more">know more</button>
      </div>
    </section>

    <section className="third-section" id="services">
      <h1>Services For Every Occasion</h1>
      <p className="margin-l-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem placeat deserunt</p>
      <div className="grid-div">
        <div className="d-container">
          <h4>Wedding Makeup</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ut </p>
        </div>
        <div className="d-container">
          <h4>Reception Makeup</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ut </p>
        </div>
        <div className="d-container">
          <h4>Puberty Makeup</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ut </p>
        </div>
        <div className="d-container">
          <h4> Model Makeup</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ut </p>
        </div>
      </div>
    </section>

    <section className="fourth-section">
      <div><img className="w-50 off-20" src="public/20-Off.jpg" alt="" /></div>
      <div>
        <h2>Book Your Appoinment Now and Get 20% Off</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi 
          sequi voluptatum quae ex blanditiis impedit in eos, accusamus reprehenderit 
          qui ullam quia expedita odio asperiores atque tenetur quis saepe.</p>
      </div>
      <Link to="/appointment"><button className="appoint-button">BOOK AN APPOINTMENT</button></Link>
    </section>
    
    <section>
      <div className="copyright">&#169; Copyright</div>
    </section>
    </>
    
  )
}

export default Body