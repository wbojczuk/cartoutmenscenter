"use client"

import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"
import { InlineIcon } from "@iconify/react"


export default function Header() {
  
  return (
    <header className={`${styles.header}`}>

      <h1>Renewing Lives Through Faith</h1>
      <h2>God-Centered Men's Transitional Center Transforming Lives</h2>

      <div style={{gap: "2rem"}} className="center">
      <Link href="/program" className="main-cta">Learn More <InlineIcon icon="basil:arrow-right-outline"/> </Link>

      <Link href="/testimonies" className="main-cta">Testimonies <InlineIcon icon="basil:arrow-right-outline"/> </Link>

      </div>
        
      <a href="#ourMission" className={styles.downArrow}></a>

        <div className="shader"></div>
        <Image className="bg-img" style={{objectPosition: "top"}} src="/img/happy_family.webp" width={1280} height={720} alt="Image of happy family" />
    </header>
  )
}
