import React from 'react';
import styles from '../../styles/FreeShippingText.module.css';

const FreeShippingText: React.FC = () => {
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