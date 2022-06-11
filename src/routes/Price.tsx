import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

function Price() {
  const [books, setBooks] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const json = await response.json();
      setBooks(json);
      setLoading(false);
    })();
  }, [])
  console.log(books);

  return (
    <>
      <h1>Price</h1>
    </>
  )
}

export default Price;