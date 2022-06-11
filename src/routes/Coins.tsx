import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`
const Header = styled.header`
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`
const CoinsList = styled.ul`
  
`
const Coin = styled.li`
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    transition: color .2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`
  const Loader = styled.span`
    text-align: center;
    display: block;
  `
  const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 12px;
  `

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins); // 데이터를 캐시에 저장해둬서 굳!
/*
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, [])
*/

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? <Loader>Loading...</Loader> : (
      <CoinsList>
        {data?.slice(0, 100).map(coin => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={{name: coin.name}}>
              <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
              {coin.name} &rarr;
            </Link>
          </Coin>
        ))}
      </CoinsList>
      )}
    </Container>
  )
}

export default Coins;