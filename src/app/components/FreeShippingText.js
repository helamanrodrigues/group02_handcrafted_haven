import React from 'react';
import styles from './FreeShippingText.module.css';

const FreeShippingText = () => {
    return (
        <div className={styles['shipping-container']}>
            <span className={styles['shipping-text']}>Free Shipping</span>
            <span className={styles['shipping-text']}>Free Shipping</span>
            <span className={styles['shipping-text']}>Free Shipping</span>
            <span className={styles['shipping-text']}>Free Shipping</span>
            <span className={styles['shipping-text']}>Free Shipping</span>
            <span className={styles['shipping-text']}>Free Shipping</span>
        </div>
    );
};

export default FreeShippingText;