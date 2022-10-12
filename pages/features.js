import icon1 from "../public/assets/images/feature-icon-1.png"
import icon2 from "../public/assets/images/feature-icon-2.png"
import icon3 from "../public/assets/images/feature-icon-3.png"
import courefeatures from "../public/assets/images/coure-features-img.jpg"
import Image from "next/image"
import l from "./../styles/feat.module.css"
import Instructor from "../pages/Instructor"


const Feat = () => {
    return (
        <div>
            <section className={l.features} >
                <div className={l.featuresleft}>
                    <p className={l.title}>Core Features</p>
                    <h2 className={l.stitle}>See What Our Mission Are</h2>
                    <ul className={l.courseitemgroup}>
                        <li className={l.featuresitem}>
                            <div className={l.itemiconboxblue}>
                                <Image src={icon1} />
                            </div>
                          <div className={l.wrapper}>
                                <h3 className={l.itemtitle}>Student Life</h3>
                                <p className={l.itemtext}>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
                                    dictum.</p>
                            </div>
                        </li>
                        <li className={l.featuresitem}>
                            <div className={l.itemiconbox}>
                                <Image src={icon2} />
                            </div>
                            <div className={l.wrapper}>
                                <h3 className={l.itemtitle}>Best Online class</h3>
                                <p className={l.itemtext}>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
                                    dictum.</p>
                            </div>
                        </li>
                        <li className={l.featuresitem}>
                            <div className={l.itemiconboxpurple}>
                                <Image src={icon3} />
                            </div>
                            <div className={l.wrapper}>
                                <h3 className={l.itemtitle}>24x7 Program</h3>
                                <p className={l.itemtext}>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim
                                    dictum.</p>
                            </div>
                     </li>
                  </ul>
            </div>
              <div className={l.featuresright}>
                    <Image src={courefeatures} width="800px " height= "800px"  />
                </div></section>
                <Instructor/>
        </div>
    )

}
export default Feat;