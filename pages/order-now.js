import React from 'react';
import styles from '../styles/order-now.module.scss';
import comb from '../public/comb.gif';
import Image from 'next/image';

const OrderNow = () => {
    return (<div id={styles.orderNow}>
        <Image src={comb} alt='under construction' />
        <h1>Under Construction</h1>
    </div> );
}
 
export default OrderNow;