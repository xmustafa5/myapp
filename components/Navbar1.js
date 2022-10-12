import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import NavItem from "./NavItem";
import style1 from "./../styles/Navbar.module.css"
import img1 from "../public/assets/images/logo.png"

const MENU_LIST  = [
  { text: "Home", href: "/"  },
  { text: "Category", href: "/about1" },
  { text: "Courses", href: "/courses" },
  { text: "Core Features", href: "/features" },
  { text: "About us", href: "/aboutus" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={style1.navbar  } >
      <nav className='nav'>

        <div className={style1.navbar_brand }>
             <Image src={img1}/> 
         </div>
        
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          <button className="btn btn-primary">
           <p className="btntext">sign up</p>
           <span className="square"></span>
         </button>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;