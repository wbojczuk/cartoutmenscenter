import styles from "./contactcontent.module.css"
import Image from "next/image"
import FreeEstimateForm from "../misc/FreeEstimateForm/FreeEstimateForm"

export default function ContactContent() {
  return (
    <section className={styles.contactContent}>
        <div>
        <h1>Contact Us</h1>

        <div className={styles.content}>
            <aside className={styles.contactBar}>

                <div className={styles.contactItem}>
                    <span className={styles.itemTitle}>Location</span>
                    <div className={styles.itemDesc}>73 Maple Rdg Dr SE,<br />
Cartersville, GA 30121</div>
                </div>

                <div className={styles.contactItem}>
                    <span className={styles.itemTitle}>Email</span>
                    <a href="mailto:cartersvilleoutreachmenscenter@gmail.com" className={styles.itemDesc}>Click to email</a>
                </div>

                <div className={styles.contactItem}>
                    <span className={styles.itemTitle}>Phone</span>
                    <a href="tel:7707735950" className={styles.itemDesc}>(770) 773-5950</a>
                </div>
            </aside>


            <FreeEstimateForm />
        </div>

        
        </div>
        <div style={{backgroundColor: "rgba(255,255,255,0.8)"}} className="shader"></div>
        <Image className="bg-img" src="/img/holding_phone.jpg" width={1280} height={720} alt="Image of phone" />
    </section>
  )
}
