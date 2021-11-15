import React from 'react';
import Card from '../cards/Card';
import { GET_CRYPTOS_MARKET_DATA } from '../../services/Api';
import styled from './Broker.module.css';
import { ReactComponent as Arrow } from '../../assets/right.svg';
import { ReactComponent as LefterArrow } from '../../assets/fast-forward.svg';
import { UserContext } from '../../UserContext';
import LoadingBar from '../LoadingBar/LoadingBar';

const Broker = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState(false);
  const { loading, setLoading } = React.useContext(UserContext);
  React.useEffect(() => {
    setLoading(true);
    GET_CRYPTOS_MARKET_DATA(page).then((resp) => {
      setData(resp);
      setLoading(false);
    });
  }, [page]);
  return (
    <section>
      {data ? (
        <div className={styled.cardsContainer}>
          <div className={styled.arrows}>
            {loading ? <LoadingBar top={10} left={-30} width={30} /> : null}
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
          <ul className={styled.carousel}>
            {data.map((coin) => (
              <Card
                key={coin.id}
                id={coin.id}
                name={coin.name}
                ranking={coin.market_cap_rank}
                imgURL={coin.image}
                currentValue={coin.current_price}
                flutuation={coin.price_change_percentage_24h}
              />
            ))}
          </ul>
        </div>
      ) : (
        <LoadingBar top={'50%'} left={'45%'} width={50} />
      )}
    </section>
  );
};

export default Broker;
