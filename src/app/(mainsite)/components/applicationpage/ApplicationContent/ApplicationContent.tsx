"use client"

import { InlineIcon } from "@iconify/react"
import styles from "./applicationcontent.module.css"

export default function ApplicationContent() {
  return (
    <section className={styles.section}>

        <h1>Application</h1>

        <p>Download the form, fill it out, and send it to <a href="mailto:cartersvilleoutreachmenscenter@gmail.com">cartersvilleoutreachmenscenter@gmail.com</a></p>

        <div className={`center ${styles.downloadWrapper}`}>
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1YKppd89E7eWAZQwrz0hAjdIQ8lFu_VX7&export=download" target="_blank" className="main-cta">Download <InlineIcon icon="mdi:download"/> </a>
        </div>

        <div style={{backgroundColor: "rgba(255,255,255,0.8)"}} className="shader"></div>
        <img className="bg-img" src="/img/holding_phone.webp" width={1280} height={720} alt="Image of phone" />
    </section>
  )
}
