import React from 'react';
import Card from './components/cards/Card';
import Navbar from './components/Navbar/Navbar';
import { GET_CRYPTOS_MARKET_DATA } from './services/Api';

function App() {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '80vh',
    overflow: 'wrap',
    alignItems: 'flex-start',
  };

  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState(false);
  React.useEffect(() => {
    GET_CRYPTOS_MARKET_DATA(1).then((resp) => setData(resp));
  }, [page]);
  return (
    <>
      <Navbar />
      <section className="cards-container" style={{ paddingTop: '20vh' }}>
        {data ? (
          <ul className="carrosel" style={style}>
            {data.map((coin) => (
              <Card
                key={coin.id}
                name={coin.name}
                marketCap={coin.market_cap}
                ranking={coin.market_cap_rank}
                imgURL={coin.image}
                currentValue={coin.current_price}
                flutuation={coin.price_change_percentage_24h}
              />
            ))}
          </ul>
        ) : (
          <p>loading...</p>
        )}
      </section>
    </>
  );
}

export default App;
