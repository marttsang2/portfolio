import React from 'react'
import Layout from './components/Layout/Layout'
import styles from './work.module.scss'
import data from './work.json'
import Image from 'next/image'
import Link from 'next/link'

const work = () => {

    return (
        <Layout>
            <div className={styles.gridcontainer}>
                {data.map((data, key)=>(
                    <Link href={data.link}>
                    <div className={styles.photoContent}>
                        <div className={styles.mask}/>
                        <p>{data.name}</p>
                        <Image src={data.src} layout="fill"
                        objectFit="cover"
                        objectPosition="65% center" ></Image>
                    </div>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export default work
