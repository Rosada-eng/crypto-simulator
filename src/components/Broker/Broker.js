import React from 'react';
import Card from '../cards/Card';
import { GET_CRYPTOS_MARKET_DATA } from '../../services/Api';
import styled from './Broker.module.css';
import { ReactComponent as Arrow } from './right.svg';
import { ReactComponent as LefterArrow } from './fast-forward.svg';

const Broker = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState(false);
  React.useEffect(() => {
    GET_CRYPTOS_MARKET_DATA(page).then((resp) => setData(resp));
  }, [page]);
  return (
    <section className={styled.cardsContainer}>
      <div className={styled.arrows}>
        <LefterArrow
          className={styled.lefterArrow}
          fill={'#eec643'}
          stroke={'#eec643'}
          onClick={() => setPage(1)}
        />
        <Arrow
          className={styled.leftArrow}
          fill={'#eec643'}
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        />
        <Arrow
          className={styled.rightArrow}
          fill={'#eec643'}
          onClick={() => {
            setPage(page + 1);
          }}
        />
      </div>
      {data ? (
        <ul className={styled.carousel}>
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
  );
};

export default Broker;
