"use client"

import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { InlineIcon } from "@iconify/react"
import Image from "next/image"
import NavMultiOption from "./NavMultiOption"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const programRef: any = useRef()
  const contactRef: any = useRef()
  const staffRef: any = useRef()
  const testimoniesRef: any = useRef()
  const applicationRef: any = useRef()
  const handbookRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()

  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/staff"],
      ref: staffRef
    },
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/testimonies"],
      ref: testimoniesRef
    },
    {
      triggers: ["/program"],
      ref: programRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    },
    {
      triggers: ["/application"],
      ref: applicationRef
    },
    {
      triggers: ["/handbook"],
      ref: handbookRef
    },
    
  ]

  const pathname = usePathname()

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])


  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleX(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleX(1)"
  }


  return (
    <nav className={styles.mainNav}>

      <Link href="/" className={styles.logo}>
        <div className={styles.logoImg}> </div>
        <span>Cartersville Outreach Men’s Center</span>
      </Link>

      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className="hamburger hamburger--spin mobile tablet nav-noclose" type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        

        <div ref={contentRef} className={styles.content}>
          <ul className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          iconifyIcon="mdi:home"
          ref={homeRef}
          />

          <NavOption
          title="Testimonies"
          url="/testimonies"
          iconifyIcon="mdi:information"
          ref={testimoniesRef}
          />

          <NavOption
          title="Program"
          url="/program"
          iconifyIcon="mdi:information"
          ref={programRef}
          />

          <NavOption
          title="Contact"
          url="/contact"
          iconifyIcon="mdi:email"
          ref={contactRef}
          />
          <NavOption
          title="Leadership"
          url="/staff"
          iconifyIcon="mdi:email"
          ref={staffRef}
          />
          <NavOption
          title="Application"
          url="/application"
          iconifyIcon="mdi:email"
          ref={applicationRef}
          />
          <NavOption
          title="Handbook"
          url="/handbook"
          iconifyIcon="mdi:email"
          ref={handbookRef}
          />

          <Link href="/donate" className={styles.cta}>
            <InlineIcon icon={"mdi:heart"} width="50px" height="50px" />
            <span>Donate</span>
          </Link>

          </ul>
        </div>
    </nav>
  )
}
