"use client"

import { InlineIcon } from "@iconify/react"
import styles from "./handbookcontent.module.css"

export default function HandbookContent() {
  return (
    <section className={styles.section}>

        <h1>Handbook</h1>

        <p>You can download the handbook below:</p>

        <div className={`center ${styles.downloadWrapper}`}>
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1yAMv-x5efXCV9tVisr_TAaupDjwy1gh4&export=download" target="_blank" className="main-cta">Download <InlineIcon icon="mdi:download"/> </a>
        </div>

        <div style={{backgroundColor: "rgba(255,255,255,0.8)"}} className="shader"></div>
        <img className="bg-img" src="/img/holding_phone.webp" width={1280} height={720} alt="Image of phone" />
    </section>
  )
}
