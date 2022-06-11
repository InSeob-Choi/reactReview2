import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinHistory } from '../api';

interface ChartProps {
  coinID: string;
}

function Chart({coinID}: ChartProps) {
  const {isLoading, data} = useQuery(["ohlcv", coinID], () => fetchCoinHistory(coinID));
  console.log(data);
  return (
    <h1>Chart</h1>
  )
}

export default Chart;