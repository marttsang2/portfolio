import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import styles from './Layout.module.scss'
import Sidebar from './SideBar/Sidebar'

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.layout}>
            <Navbar toggle={toggle}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <main>{children}</main>
        </div>
    )
}

export default Layout
