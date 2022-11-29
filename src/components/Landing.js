import React, { useEffect, useState } from "react";
import styles from "./Landing.module.css";
import logo from "../assets/images/logo.png";
import searchIcon from "../assets/images/iconSearch.png" ;

//API
import { getCoin } from "../services/api";

//shared
import Loading from "../shared/Loading";

//helper
import ItemCoins from "../helper/ItemCoins";



const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchApi = async () => {

            const data = await getCoin();
            setCoins(data);
        }

        fetchApi();


    }, []);


    const resultSearch = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (

        <>

            {coins.length ? <div className={styles.container}>

                <div className={styles.header}>

                    <div className={styles.search}>
                    <img src={searchIcon} alt="iconserach" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />

                    </div>
                    <img src={logo} alt="mainLogo" />
                </div>

                <div className={styles.Items}>{resultSearch.length ? 
                resultSearch.map(item => <ItemCoins key={item.id} coins={item} />) : 
                <h2 style={{color : "silver" , textAlign : "center" , margin : "3rem 0"}}>Search not Found...!</h2>}</div>

            </div>
                :
                <Loading />}

                <p className={styles.License}>Made by @Hossein</p>

        </>
    )
}

export default Landing;