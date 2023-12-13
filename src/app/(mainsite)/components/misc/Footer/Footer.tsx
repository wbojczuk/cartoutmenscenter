"use client"

import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <aside>
        <h1>Cartersville Outreach Men's Center</h1>
        <h2>73 Maple Rdg Dr SE, <br />
Cartersville, GA 30121</h2>
      </aside>

        <aside>
          <h3>Page Links</h3>
          <ul className={styles.link}>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/staff">Staff</Link>
            <Link href="/program">Program</Link>
          </ul>
        </aside>

        <aside>
          <h3>Other Links</h3>
          <ul className={styles.link}>
            <a href="https://cartersvilleoutreach.org" target="_blank">Cartersville Outreach</a>
            <a href="https://cartersvilleoutreachinternational.org" target="_blank">International</a>
            <a href="https://cartersvilleoutreachwomenscenter.org" target="_blank">Women's Center</a>
          </ul>
        </aside>
    </footer>
  )
}
