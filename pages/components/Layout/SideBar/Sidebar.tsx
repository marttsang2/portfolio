import React from 'react'
import styles from './Sidebar.module.scss'
import {FaTimes} from 'react-icons/fa'
import Link from 'next/link'

const Sidebar = ({toggle, isOpen}) => {
    return (
        
            isOpen ? 
            (
                <div className={styles.container}>
                    <div className={styles.cancel}>
                        <FaTimes onClick={toggle}/>
                    </div>
                    <p onClick={toggle}><Link href="/work">Portfolio</Link></p>
                    <p onClick={toggle}><Link href="/about">Profile</Link></p>
                </div>
            ):(
                null
            )
        
        
    )
}

export default Sidebar
