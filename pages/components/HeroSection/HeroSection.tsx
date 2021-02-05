import React from 'react'
import styles from './HeroSection.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h1>MARTIN TSANG</h1>
                    <ul>
                        <Link href="/work"><li>Portfolio</li></Link>
                        <Link href="/about"><li>Profile</li></Link>
                    </ul>
                </div>
                <div className={styles.photoContent}>
                    <Image
                        src="/hero.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="65% center"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
