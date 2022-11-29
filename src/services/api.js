
import axios from "axios" ;

const Base_Url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" ;

const getCoin = async () => {

    const res = await axios.get(Base_Url);
    return res.data ;
}

export {getCoin} ; 