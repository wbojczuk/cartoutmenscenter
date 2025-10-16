import styles from "./programinfo.module.css"
import Image from "next/image"

export default function ProgramInfo() {
  return (
    <section className={styles.programInfo}>
        <h4>What We Do</h4>
        
        <h1>Renewing Lives Through Faith</h1>

        <p>Cartersville Outreach Men’s Center is a Christ centered transitional program with the objective of
helping men who have been in addiction and/or incarcerated transition back into society as
productive members of the community. We provide a safe living environment at no cost to the
resident, sound Biblical teaching through Bible studies and church services, one-on-one counseling
and life skills classes. The Bible studies teach them to obey the scriptures and trust in God. <br /><br />Life skills
classes provide them the opportunity to learn essential things that are necessary to obtain
employment, keep a job, and effectively manage their lives, relationships and families. Our desire is
to see them make the changes that are necessary for a successful life built on a foundation of Biblical
principles and on the Lord Jesus Christ.
        </p>

        <div style={{backgroundColor: "rgba(255,255,255,0.85)"}} className="shader"></div>
        <Image className="bg-img" src="/img/group.webp" width={1280} height={720} alt="Image of community" />
    </section>
  )
}
