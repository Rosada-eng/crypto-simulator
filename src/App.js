import React from 'react';
import Card from './components/cards/Card';
import {
  GET_CRYPTOS_PRICE_ONLY,
  GET_CRYPTOS_MARKET_DATA,
  GET_COIN_INFO,
  GET_CATEGORIES,
} from './services/Api';

async function allCat() {
  let r = await GET_CATEGORIES();
  console.log(r);
  return;
}

async function listCat() {
  let r = await GET_CATEGORIES(true);
  console.log(r);
  return;
}

async function btc_price() {
  let r = await GET_CRYPTOS_PRICE_ONLY(['bitcoin']);
  console.log(r);
  return;
}

async function btc_info() {
  let r = await GET_COIN_INFO('bitcoin');
  console.log(r);
  return;
}

async function two_coin_data() {
  let r = await GET_CRYPTOS_MARKET_DATA(['bitcoin', 'ethereum']);
  console.log(r);
  return;
}
async function twenty_coin_data() {
  let r = await GET_CRYPTOS_MARKET_DATA();
  console.log(r);
  return;
}

function App() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '80vh',
    justifyContent: 'space-between',
  };
  return (
    <div style={style}>
      <Card name="Bitcoin" currentValue={500} />
      <button onClick={allCat}>GET CATEGORIES full</button>
      <button onClick={listCat}>GET CATEGORIES listOnly</button>
      <button onClick={btc_price}>GET BITCOIN PRICE</button>
      <button onClick={btc_info}>GET BITCOIN INFO</button>
      <button onClick={two_coin_data}>GET 2 COINS MARKET DATA </button>
      <button onClick={twenty_coin_data}>GET 20 COINS MARKET DATA </button>
    </div>
  );
}

export default App;
