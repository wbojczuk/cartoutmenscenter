import styles from "./ourmission.module.css"
import Image from "next/image"

export default function OurMission() {
  return (
    <section className={styles.ourMission} id="ourMission">
        <Image className={styles.bgImg} src="/img/our_mission.webp" width={1024} height={512} alt="Photo of staff" />

        <img src="./icons/cross.svg" aria-hidden className={styles.cross} />
        
        <div className={styles.content}>
            <h1>Our Mission</h1>

            <p>To help men who are struggling with addictions become more productive members of the community and help them learn how to manange their lives, homes, and everyday relationships. We have established guidelines that are built on Biblical principles and the Lord Jesus Christ. Our desire is to help them with their mental, physical and spiritual needs, by providing an opportunity to change their lives through a personal relationship with Jesus Christ.</p>
        </div>
    </section>
  )
}
