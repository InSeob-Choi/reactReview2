const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return (
    fetch(`${BASE_URL}/coins`).then(res => res.json())
  )
}

export function fetchCoinInfo(coinID: string) {
  return (
    fetch(`${BASE_URL}/coins/${coinID}`).then(res => res.json())
  )
}

export function fetchCoinPrice(coinID: string) {
  return (
    fetch(`${BASE_URL}/tickers/${coinID}`).then(res => res.json())
  )
}

export function fetchCoinHistory(coinID: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = Math.floor(Date.now() / 1000) - (60 * 60 * 23);
  return (
    fetch(`${BASE_URL}/coins/${coinID}/ohlcv/historical?start=${startDate}&end=${endDate}`).then(res => res.json())
  )
}