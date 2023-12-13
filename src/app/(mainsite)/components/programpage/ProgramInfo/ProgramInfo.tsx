import styles from "./programinfo.module.css"
import Image from "next/image"

export default function ProgramInfo() {
  return (
    <section className={styles.programInfo}>
        <h4>What We Do</h4>
        
        <h1>Our Program</h1>

        <p>To help guide these men into becoming productive members of the community and helping establish guidelines to help them manage their lives, homes, and everyday relationships that are built on a foundation of biblical principles and on the Lord Jesus Christ. <br /><br /> Our desire is to help these men with their mental, physical and spiritual needs, by providing them the opportunity to change their lives by having a personal relationship with Jesus Christ as their Lord and Savior.
        </p>

        <div style={{backgroundColor: "rgba(255,255,255,0.8)"}} className="shader"></div>
        <Image className="bg-img" src="/img/community.jpg" width={1280} height={720} alt="Image of community" />
    </section>
  )
}
