import React from 'react'
import Layout from './components/Layout/Layout'
import styles from './about.module.scss'
import Image from 'next/image'

const about = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h3>Hi! I'm Martin</h3>
                    <h2>Resume</h2>
                </div>
                <div className={styles.photoContent}>
                <Image src="/resume.png" layout="intrinsic" width={800} height={1100} />
                </div>
            </div>
        </Layout>
    )
}

export default about
