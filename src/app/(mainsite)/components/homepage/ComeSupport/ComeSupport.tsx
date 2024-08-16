"use client"
import styles from './comesupport.module.css';
import Link from 'next/link';
import { InlineIcon } from '@iconify/react';

export default function ComeSupport(){
return (
 <div className={styles.comeSupport}>
    <h2>Come support Cartersville Outreach Men's Center!</h2>

    <div className="center">
    <Link target="_blank" href="https://cartersvilleoutreachwomenscenter.org/newsletter/#menscenter" className="main-cta">Learn More <InlineIcon icon="basil:arrow-right-outline"/> </Link>
    </div>

    <img src='/img/comesupport.webp' alt='Image of fundraiser' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(0,0,0,0.7)"}}></div>
 </div>
)};