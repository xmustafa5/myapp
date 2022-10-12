
import inst1 from "../public/assets/images/instructor-1.jpg"
import inst2 from "../public/assets/images/instructor-2.jpg"
import inst3 from "../public/assets/images/instructor-3.jpg"
import inst4 from "../public/assets/images/instructor-4.jpg"
import t from "./../styles/instructor.module.css"
import Image from "next/image"
import { Icon } from '@iconify/react';


const instr =()=>{
    return(
        <div className="rty">
              <section className={t.instructor}>
<p className={t.title}>Best Coach</p>
<h2 className={t.stitle}>Our Expert Instructor</h2>
 <div className={t.instructorgrid}> 
  <div className={t.instructorcard}>
    <div className={t.instructorimgbox}>
        <Image src={inst1}/>
      <div className={t.sociallink}>
        <a  className={t.facebook}>
            <Icon icon="ion:logo-facebook" />
        </a>
        <a  className={t.instagram}>
          <Icon icon="ion:logo-instagram" />
        </a>
        <a  className="twitter">
        <Icon icon="ion:logo-youtube" />
      </a>
      </div>
    </div>
    <h4 className={t.instructorname}>ali</h4>
    <p className={t.instructortitle}>Instructor</p>
  </div>
  {/* /**/}
  <div className={t.instructorcard}>
    
    <div className={t.instructorimgbox}>
        <Image src={inst2}/>
      <div className={t.sociallink}>
        <a  className={t.facebook}>
            <Icon icon="ion:logo-facebook" />
        </a>
        <a  className={t.instagram}>
          <Icon icon="ion:logo-instagram" />
        </a>
        <a  className="twitter">
        <Icon icon="ion:logo-youtube" />
      </a>
      </div>
    </div>
    <h4 className={t.instructorname}>ahmed</h4>
    <p className={t.instructortitle}>Instructor</p>
  </div>
  {/* /**/}
  <div className={t.instructorcard}>
    
    <div className={t.instructorimgbox}>
        <Image src={inst3}/>
      <div className={t.sociallink}>
        <a  className={t.facebook}>
            <Icon icon="ion:logo-facebook" />
        </a>
        <a  className={t.instagram}>
          <Icon icon="ion:logo-instagram" />
        </a>
        <a  className="twitter">
        <Icon icon="ion:logo-youtube" />
      </a>
      </div>
    </div>
    <h4 className={t.instructorname}>zahraa</h4>
    <p className={t.instructortitle}>Instructor</p>
  </div>
  {/* /**/}
  <div className={t.instructorcard}>
    
    <div className={t.instructorimgbox}>
        <Image src={inst4 }/>
      <div className={t.sociallink}>
        <a  className={t.facebook}>
            <Icon icon="ion:logo-facebook" />
        </a>
        <a  className={t.instagram}>
          <Icon icon="ion:logo-instagram" />
        </a>
        <a  className="twitter">
        <Icon icon="ion:logo-youtube" />
      </a>
      </div>
    </div>
    <h4 className={t.instructorname}>sosa</h4>
    <p className={t.instructortitle}>Instructor</p>
  </div>
  </div>
</section>
        </div>
    )
}
export default instr;