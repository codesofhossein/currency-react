import React from 'react';
import styles from "./ItemCoins.module.css";

const ItemCoins = (props) => {

    const { id, symbol, name, image, current_price, market_cap, price_change_percentage_24h } = props.coins;

    return (

        <div className={styles.container}>

            <div className={styles.column1}>

                <img src={image} alt={id} />
                <span>{name}</span>

            </div>

            <span className={styles.symbol}>{symbol.toUpperCase()}</span>

            <span className={styles.current_price}>$ {current_price.toLocaleString()}</span>

            <span className={price_change_percentage_24h < 0 ? styles.redChange : styles.greenChange}>{price_change_percentage_24h.toFixed(2)}</span>

            <span className={styles.market_cap}>$ {market_cap.toLocaleString()}</span>

        </div>
    );
};

export default ItemCoins;