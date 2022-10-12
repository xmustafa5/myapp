import Image from "next/image";
import img1 from "../public/assets/images/logo.png"
import Link from 'next/link'
import style1 from "./../styles/Navbar.module.css"

const Navbar = () => {
    return(
       <header className={style1.navbar  } >
       <nav className={style1.navbar  }>
         <div className={style1.navbar_brand }>
             <Image src={img1}/> 
         </div>
         <ul className={style1.navbar_nav}>
           <li className={style1.nav_item}>
           <Link href="/"><a>Home</a></Link>
           </li>
           <li className={style1.nav_item}>           <Link href="/about1"><a>Category </a></Link>
           </li>
           <li className={style1.nav_item}>           <Link href="/courses"><a>Courses</a></Link>
           </li>
           <li className={style1.nav_item}>           <Link href="/features"><a>Core Features</a></Link>
           </li>
           <li className={style1.nav_item}>           <Link href="/aboutus"><a>About Us</a></Link>
           </li>
         </ul>
         <button className="btn btn-primary">
           <p className="btntext">sign up</p>
           <span className="square"></span>
         </button>
         {/* <button className="nav-toggle-btn">
           <span className="one"></span>
           <span className="two"></span>
           <span className="three"></span>
         </button> */}
       </nav>
     </header>
    );
  }

  export default Navbar;