import shape1 from "../public/assets/images/shape-1.png"
import shape2 from "../public/assets/images/shape-2.png"
import shape3 from "../public/assets/images/shape-3.png"
import shape4 from "../public/assets/images/shape-4.png"
import bannerline from "../public/assets/images/banner-line.png"
import bannerimgbg from "../public/assets/images/banner-img-bg.png"
import bannerimg from "../public/assets/images/9.png"
import banneralimenticon1 from "../public/assets/images/banner-aliment-icon-1.png"
import banneralimenticon2 from "../public/assets/images/banner-aliment-icon-2.png"
import banneralimenticon3 from "../public/assets/images/banner-aliment-icon-3.png"
import banneralimenticon4 from "../public/assets/images/banner-aliment-icon-4.png"
import Image from "next/image"
import React, { Component } from 'react'
import Typical from 'react-typical'
import styless , {keyframe} from "./../styles/home3.module.css"
// import About1 from "../pages/About1"

const Home3 = () =>{
    return( <>
    
        
        <section className={styless.home22 }>
<div className={styless.shape1}>
<Image src={shape1} alt="art shape" width="70"/>
</div>
<div className={styless.shape2}>
<Image src={shape2} alt="art shape" width="70" height="55"/>
</div>
<div className={styless.shape3}>
<Image src={shape3} alt="art shape" width="300"/>
</div>
<div className={styless.shape4}>
<Image src={shape4} alt="art shape" width="50" height="64"/>
</div>
<div className={styless.homeleft}>
  <p className={styless.sectionsubtitle }>Welcome To One line </p>
  <h1 className={styless.mainheading}>
  Get Class From Top

    <span className={styless.underlineimg}>Instructor <Image src={bannerline} alt="line"/></span>
  </h1>
  <p className={styless.sectiontext}>
    Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.
  </p>
  <div className={styless.homebtngroup}>
    <button className={styless.btnbtnprimary}>
      <p className={styless.btntext}>Explore Courses</p>
      <span className={styless.square}></span>
    </button>
    <button className={styless.btnbtnsecondary}>
      <p className={styless.btntext}>Contact Us</p>
      <span className={styless.square}></span>
    </button>
  </div>
</div>
<div className={styless.homeright}>
  <div className={styless.imgbox}>
  {/* <Image src={bannerimgbg} alt="colorful background shape" className={styless.backgroundshape}/> */}
    <Image src={bannerimg} alt="banner image" className={styless.bannerimg}/>
  <div className={styless.icon}> 
 
  <div className={styless.icon1} ><Image src={banneralimenticon1}  alt=""  width="222" height="55" /></div>
   <div className={styless.icon2} > <Image src={banneralimenticon2}  alt=""  width="222" height="55"/></div>
   <div className={styless.icon3}> <Image src={banneralimenticon3}  alt=""  width="212" height="55"/></div>
   <div className={styless.icon4}> <Image src={banneralimenticon4} alt="" /></div>
   

   </div>
</div>
{/* <About1/> */}
</div>
{/* <div className={styless.sert}>v c
<Image src={bannerimgbg} alt="colorful background shape" className={styless.backgroundshape}/>
</div> */}
<div className={styless.sert}>
<Image src={bannerimgbg} alt="colorful background shape" className={styless.backgroundshape1}/>
</div>
</section>
</>
    )
}
// const anit=keyframe 
// 0%,
//   20%,
//   50%,
//   80%,
//   100% { transform: translateY(0); }
//   40%  { transform: translateY(-30px); }
//   60%  { transform: translateY(-15px); }



export default Home3;