import Image from "next/image"
import Navbar from "../components/Navbar"
import icon1 from "../public/assets/images/course-category-icon-1.png"
import icon2 from "../public/assets/images/course-category-icon-2.png"
import icon3 from "../public/assets/images/course-category-icon-3.png"
import icon4 from "../public/assets/images/course-category-icon-4.png"
import icon5 from "../public/assets/images/course-category-icon-5.png"
import icon6 from "../public/assets/images/course-category-icon-6.png"
import styles from "../styles/about1.module.css"


const about1 = () =>{
    return(
        <div>  
         
        <div className={styles.roll}>
            <section className={styles.category}>
        <p className={styles.sectionsubtitle}>Course Category</p>
        <h2 className={styles.sectiontitle}>Explore Popular Courses</h2>
        <ul className={styles.courseitemgroup}> 
          <li className={styles.coursecategoryitem}>
            <div className={styles.wrapper}>
                <Image src={icon1} className={styles.categoryicondefault}/>
            </div>
            <div className={styles.coursecategorycontent}>
              <h3 className={styles.categorytitle}>
                <a href="#">Learn Data Science</a>
              </h3>
              <p className="categorysubtitle">Data is 
               Everything</p>
            </div>
          </li>
          <li className={styles.coursecategoryitem}>
            <div className={styles.wrapper}>
                <Image src={icon2} className={styles.categoryicondefault}/>
            </div>
            <div className={styles.coursecategorycontent}>
              <h3 className={styles.categorytitle}>
                
                <a href="#">Learn Data Science</a>
              </h3>
              <p className="categorysubtitle">Data is Everything</p>
            </div>
          </li>
          <li className={styles.coursecategoryitem}>
            <div className={styles.wrapper}>
                <Image src={icon3} className={styles.categoryicondefault}/>
            </div>
            <div className={styles.coursecategorycontent}>
              <h3 className={styles.categorytitle}>
                
                <a href="#">Learn Data Science</a>
              </h3>
              <p className="categorysubtitle">Data is Everything</p>
            </div>
          </li>
          <li className={styles.coursecategoryitem}>
            <div className={styles.wrapper}>
                <Image src={icon4} className={styles.categoryicondefault}/>
            </div>
            <div className={styles.coursecategorycontent}>
              <h3 className={styles.categorytitle}>
                
                <a href="#">Learn Data Science</a>
              </h3>
              <p className="categorysubtitle">Data is Everything</p>
            </div>
          </li>
          <li className={styles.coursecategoryitem}>
            <div className={styles.wrapper}>
                <Image src={icon5} className={styles.categoryicondefault}/>
            </div>
            <div className={styles.coursecategorycontent}>
              <h3 className={styles.categorytitle}>
                
                <a href="#">Learn Data Science</a>
              </h3>
              <p className="categorysubtitle">Data is Everything</p>
            </div>
          </li>
          <li className={styles.coursecategoryitem}>
            <div className={styles.wrapper}>
                <Image src={icon6} className={styles.categoryicondefault}/>
            </div>
            <div className={styles.coursecategorycontent}>
              <h3 className={styles.categorytitle}>
                
                <a href="#">Learn Data Science</a>
              </h3>
              <p className="categorysubtitle">Data is Everything</p>
            </div>
          </li>
          </ul>
         
      
          </section>
</div>
</div>
    )
}
export default about1;