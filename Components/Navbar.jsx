import Image from 'next/image';
import React from 'react';
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt='img' width="32" height="32"/>
                </div>

                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>

            <div className={styles.item}>center</div>
            <div className={styles.item}>right</div>
        </div>
    );
};

export default Navbar;