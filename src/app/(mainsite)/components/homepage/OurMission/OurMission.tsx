import styles from "./ourmission.module.css"
import Image from "next/image"

export default function OurMission() {
  return (
    <section className={styles.ourMission} id="ourMission">
        <Image className={styles.bgImg} src="/img/our_mission.png" width={1024} height={512} alt="Photo of staff" />

        <img src="./icons/cross.svg" aria-hidden className={styles.cross} />
        
        <div className={styles.content}>
            <h1>Our Mission</h1>

            <p>To help guide these men into becoming productive members of the community and helping establish guidelines to help them manage their lives, homes, and everyday relationships that are built on a foundation of biblical principles and on the Lord Jesus Christ. Our desire is to help these men with their mental, physical and spiritual needs, by providing them the opportunity to change their lives by having a personal relationship with Jesus Christ as their Lord and Savior.</p>
        </div>
    </section>
  )
}
