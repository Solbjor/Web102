import { useEffect, useState } from "react"
import { useParams } from "react-router"

const API_KEY = import.meta.env.VITE_APP_API_KEY

const usd = value => (value != null ? `$${value.toLocaleString()} USD` : "N/A")

const CoinDetail = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState(null)

  useEffect(() => {
    const getCoinDetail = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`,
        {
          headers: {
            "x-cg-demo-api-key": API_KEY,
          },
        }
      )
      if (response.status === 429) {
        console.error("Too many requests. Wait a few seconds, then reload the page.")
        return
      }
      const json = await response.json()
      setCoin(json)
    }

    getCoinDetail().catch(console.error)
  }, [id])

  const market = coin?.market_data
  // The API's description contains HTML links; show it as plain text.
  const description = coin?.description?.en?.replace(/<[^>]*>/g, "")

  return (
    <div className="coin-detail">
      <h1>{coin?.name}</h1>
      <img
        className="images"
        src={coin?.image?.large}
        alt={`Small icon for ${coin?.name} crypto coin`}
      />
      <div className="description">{description}</div>
      <br></br>
      <div>
        This coin was built with the algorithm{" "}
        {coin?.hashing_algorithm ?? "not listed"}{" "}
      </div>

      {coin && (
        <table>
          <tbody>
            <tr>
              <th>Launch Date </th>
              <td>{coin.genesis_date ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Website </th>
              <td>
                {coin.links?.homepage?.[0] ? (
                  <a href={coin.links.homepage[0]} target="_blank" rel="noreferrer">
                    {coin.links.homepage[0]}
                  </a>
                ) : "N/A"}
              </td>
            </tr>
            <tr>
              <th>Whitepaper </th>
              <td>
                {coin.links?.whitepaper ? (
                  <a href={coin.links.whitepaper} target="_blank" rel="noreferrer">
                    {coin.links.whitepaper}
                  </a>
                ) : "N/A"}
              </td>
            </tr>
            <tr>
              <th>Monetary Symbol </th>
              <td>{coin.symbol?.toUpperCase()}</td>
            </tr>
            <tr>
              <th>Market Cap Rank </th>
              <td>{coin.market_cap_rank ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Last Updated </th>
              <td>{coin.last_updated ? new Date(coin.last_updated).toLocaleString() : "N/A"}</td>
            </tr>
            <tr>
              <th>Circulating Supply </th>
              <td>{market?.circulating_supply?.toLocaleString() ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Volume </th>
              <td>{usd(market?.total_volume?.usd)}</td>
            </tr>
            <tr>
              <th>Current Price </th>
              <td>{usd(market?.current_price?.usd)}</td>
            </tr>
            <tr>
              <th>Highest Price (24h) </th>
              <td>{usd(market?.high_24h?.usd)}</td>
            </tr>
            <tr>
              <th>Lowest Price (24h) </th>
              <td>{usd(market?.low_24h?.usd)}</td>
            </tr>
            <tr>
              <th>Change from Previous Day </th>
              <td>
                {market?.price_change_percentage_24h != null
                  ? `${market.price_change_percentage_24h.toFixed(2)}%`
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <th>Market Cap </th>
              <td>{usd(market?.market_cap?.usd)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default CoinDetail
