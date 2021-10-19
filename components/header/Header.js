import React from 'react'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <Link href="/">
                    <img src="/header_logo.jpeg" alt="logo"/>
                </Link>
                <div className={styles.header__nav}>
                    <Link href="/" >
                        <a className={styles.nav_link}>Home</a>
                    </Link> 
                    <Link href="/">
                        <a className={styles.nav_link}>Sistemas</a>
                    </Link>
                    <Link href="/">
                        <a className={styles.nav_link}>Guia de processos</a>
                    </Link>
                    <Link href="/">
                        <a className={styles.nav_link}>FAQ</a>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default Header