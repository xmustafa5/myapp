import Footer from "./Footer";
import Navbar1 from "./Navbar1";
const Layout = ({children}) =>{
    return(
        <div className="layout">
             <Navbar1/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;