
import Image from "next/image"
import course1 from "../public/assets/images/course-1.jpg"
import course2 from "../public/assets/images/course-2.jpg"
import course3 from "../public/assets/images/course-3.jpg"
import course4 from "../public/assets/images/course-4.jpg"
import course5 from "../public/assets/images/course-5.jpg"
import course6 from "../public/assets/images/course-6.jpg"
import d from "../public/assets/images/d.jpg"
import student from "../public/assets/images/student-icon.png"
import m from "./../styles/courses.module.css"




const Courses = () =>{
    return(
        <div className={m.ee}>
            <section className={m.course} >
        <p className={m.title} >Our Online Courses</p>
        <h2 className={m.stitle}>Find The Right Online Course For You</h2>
         <div className={m.coursegrid}> 
          <div className={m.coursecard}>
            <div className={m.coursebanner}>
                <Image src={course1}/>
              <div className={m.coursetagbox}>
                <a  className={m.badgetag}>show more</a>
             
              </div>
            </div>
            <div className={m.coursecontent}>
              <h3 className={m.cardtitle}>
                <a >linux </a>
              </h3>
              <div className={m.rrt}>
                <div className={m.author}>
                    <div className={m.authorimg}>
                <Image src={d} />
                  </div>
                  <a  className={m.authorname}>mustafa</a>
                </div>
                <div className={m.rating}>
                  <ion-icon name="star"></ion-icon>
                  <p>5.0 (2k)</p>
                </div>
              </div>
              <div className={m.rrt2}>
                <div className={m.courseprice}>$500</div>
                <div className={m.enrolled}>
                  <div className={m.iconuser}>
                  <Image src={student} className={m.authorimg}/>
                    
                  </div>
                  <p>600k</p>
                </div>
              </div>
            </div>
          </div> 
          <div className={m.coursecard}>
            <div className={m.coursebanner}>
                <Image src={course2}/>
              <div className={m.coursetagbox}>
                <a  className={m.badgetag}>show more</a>
             
              </div>
            </div>
            <div className={m.coursecontent}>
              <h3 className={m.cardtitle}>
                <a >linux </a>
              </h3>
              <div className={m.rrt}>
                <div className={m.author}>
                    <div className={m.authorimg}>
                <Image src={d} />
                  </div>
                  <a  className={m.authorname}>mustafa</a>
                </div>
                <div className={m.rating}>
                  <ion-icon name="star"></ion-icon>
                  <p>5.0 (2k)</p>
                </div>
              </div>
              <div className={m.rrt2}>
                <div className={m.courseprice}>$500</div>
                <div className={m.enrolled}>
                  <div className={m.iconuser}>
                  <Image src={student} className={m.authorimg}/>
                    
                  </div>
                  <p>600k</p>
                </div>
              </div>
            </div>
          </div>
          <div className={m.coursecard}>
            <div className={m.coursebanner}>
                <Image src={course3}/>
              <div className={m.coursetagbox}>
                <a  className={m.badgetag}>show more</a>
             
              </div>
            </div>
            <div className={m.coursecontent}>
              <h3 className={m.cardtitle}>
                <a >linux </a>
              </h3>
              <div className={m.rrt}>
                <div className={m.author}>
                    <div className={m.authorimg}>
                <Image src={d} />
                  </div>
                  <a  className={m.authorname}>mustafa</a>
                </div>
                <div className={m.rating}>
                  <ion-icon name="star"></ion-icon>
                  <p>5.0 (2k)</p>
                </div>
              </div>
              <div className={m.rrt2}>
                <div className={m.courseprice}>$500</div>
                <div className={m.enrolled}>
                  <div className={m.iconuser}>
                  <Image src={student} className={m.authorimg}/>
                    
                  </div>
                  <p>600k</p>
                </div>
              </div>
            </div>
          </div>
          <div className={m.coursecard}>
            <div className={m.coursebanner}>
                <Image src={course4}/>
              <div className={m.coursetagbox}>
                <a  className={m.badgetag}>show more</a>
             
              </div>
            </div>
            <div className={m.coursecontent}>
              <h3 className={m.cardtitle}>
                <a >linux </a>
              </h3>
              <div className={m.rrt}>
                <div className={m.author}>
                    <div className={m.authorimg}>
                <Image src={d} />
                  </div>
                  <a  className={m.authorname}>mustafa</a>
                </div>
                <div className={m.rating}>
                  <ion-icon name="star"></ion-icon>
                  <p>5.0 (2k)</p>
                </div>
              </div>
              <div className={m.rrt2}>
                <div className={m.courseprice}>$500</div>
                <div className={m.enrolled}>
                  <div className={m.iconuser}>
                  <Image src={student} className={m.authorimg}/>
                    
                  </div>
                  <p>600k</p>
                </div>
              </div>
            </div>
          </div>
          <div className={m.coursecard}>
            <div className={m.coursebanner}>
                <Image src={course5}/>
              <div className={m.coursetagbox}>
                <a  className={m.badgetag}>show more</a>
             
              </div>
            </div>
            <div className={m.coursecontent}>
              <h3 className={m.cardtitle}>
                <a >linux </a>
              </h3>
              <div className={m.rrt}>
                <div className={m.author}>
                    <div className={m.authorimg}>
                <Image src={d} />
                  </div>
                  <a  className={m.authorname}>mustafa</a>
                </div>
                <div className={m.rating}>
                  <ion-icon name="star"></ion-icon>
                  <p>5.0 (2k)</p>
                </div>
              </div>
              <div className={m.rrt2}>
                <div className={m.courseprice}>$500</div>
                <div className={m.enrolled}>
                  <div className={m.iconuser}>
                  <Image src={student} className={m.authorimg}/>
                    
                  </div>
                  <p>600k</p>
                </div>
              </div>
            </div>
          </div>
          <div className={m.coursecard}>
            <div className={m.coursebanner}>
                <Image src={course6}/>
              <div className={m.coursetagbox}>
                <a  className={m.badgetag}>show more</a>
             
              </div>
            </div>
            <div className={m.coursecontent}>
              <h3 className={m.cardtitle}>
                <a >linux </a>
              </h3>
              <div className={m.rrt}>
                <div className={m.author}>
                    <div className={m.authorimg}>
                <Image src={d} />
                  </div>
                  <a  className={m.authorname}>mustafa</a>
                </div>
                <div className={m.rating}>
                  <ion-icon name="star"></ion-icon>
                  <p>5.0 (2k)</p>
                </div>
              </div>
              <div className={m.rrt2}>
                <div className={m.courseprice}>$500</div>
                <div className={m.enrolled}>
                  <div className={m.iconuser}>
                  <Image src={student} className={m.authorimg}/>
                    
                  </div>
                  <p>600k</p>
                </div>
              </div>
            </div>
          </div>
          <button className={m.btn}>
            <p className={m.btntext}>Explore More</p>
            <span className={m.square}></span>
          </button>
          </div>
          </section>
        </div>

    )
}
export default Courses;