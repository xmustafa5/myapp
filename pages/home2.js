import shape1 from "../public/assets/images/shape-1.png"
import shape2 from "../public/assets/images/shape-2.png"
import shape3 from "../public/assets/images/shape-3.png"
import shape4 from "../public/assets/images/shape-4.png"
import bannerline from "../public/assets/images/banner-line.png"
import bannerimgbg from "../public/assets/images/banner-img-bg.png"
import bannerimg from "../public/assets/images/banner-img.png"
import banneralimenticon1 from "../public/assets/images/banner-aliment-icon-1.png"
import banneralimenticon2 from "../public/assets/images/banner-aliment-icon-2.png"
import banneralimenticon3 from "../public/assets/images/banner-aliment-icon-3.png"
import banneralimenticon4 from "../public/assets/images/banner-aliment-icon-4.png"
import Image from "next/image"
import styless from "./../styles/home2.module.css"
import Navbar from "../components/Navbar"

const Home2 = () =>{
    return( <>
        <Navbar/>
        <section className={styless.home22 }>
<div className={styless.shape1}>
<Image src={shape1} alt="art shape" width="30"/>
</div>
<div className={styless.shape2}>
<Image src={shape2} alt="art shape" width="30"/>
</div>
<div className={styless.shape3}>
<Image src={shape3} alt="art shape" width="30"/>
</div>
<div className={styless.shape4}>
<Image src={shape4} alt="art shape" width="30"/>
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
    <button className={styless.btnbtnsecondary} >
      <p className={styless.btntext}>Contact Us</p>
      <span className={styless.square}></span>
    </button>
  </div>
</div>
<div className={styless.homeright}>
  <div className={styless.imgbox}>
  <Image src={bannerimgbg} alt="colorful background shape" className={styless.backgroundshape}/>
    <Image src={bannerimg} alt="banner image" className={styless.bannerimg}/>
    <Image src={banneralimenticon1}  alt="" className={styless.icon1} width="250"/>
    <Image src={banneralimenticon2}  alt="" className={styless.icon2} width="240"/>
    <Image src={banneralimenticon3}  alt="" className={styless.icon3} width="195"/>
    <Image src={banneralimenticon4} alt="" className={styless.icon4}/>
  </div>
</div>
</section>
</>
    )
}
export default Home2;