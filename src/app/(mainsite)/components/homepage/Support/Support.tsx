"use client"
import styles from "./support.module.css"
import { InlineIcon } from "@iconify/react"
import Image from "next/image"

export default function Support() {
  return (
    <section className={styles.support}>
        <h1 className={styles.ribbon}>Help support the community.</h1>

        <div className={styles.content}>
          <p>Your support enables us to create a godly environment where individuals seeking positive change find it in the transformative power of God. With your support, we can provide essential resources, counseling, and spiritual guidance, paving the way for men to rebuild their lives with faith as their cornerstone. Your donation isn't just financial; it's a contribution to the lasting transformation of individuals on the path to a brighter future. We are a 501c3 non-profit organization, all donations are tax deductable.</p>

          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=cartersvilleoutreachmenscenter@gmail.com&lc=US&no_note=0&item_name=Thank+you+for+your+donation!&cn=&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted" target="_blank"><img src="https://imgur.com/jZNts9Q.png" alt="donate button" /></a>


          <div style={{backgroundColor: "rgba(255,255,255,0.7)"}} className="shader"></div>
          <Image className="bg-img" style={{objectPosition: "center 20%"}} src="/img/community.webp" width={1280} height={720} alt="Image of community" />
        </div>
    </section>
  )
}
