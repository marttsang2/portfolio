import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
            <div className={styles.left}>
                    <Link href="/work">Portfolio</Link>
                </div>
                <div className={styles.logo}>
                    <h1>
                        <Link href="/">
                            MARTIN TSANG
                        </Link>
                    </h1>
                </div>
                <div className={styles.mobileIcon}>
                    <FaBars onClick={toggle}/>
                </div>
                <div className={styles.right}>
                    <Link href="/about">Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
