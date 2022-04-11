import './index.css'

const CryptocurrencyItem = props => {
  const {CryptoDetails} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = CryptoDetails

  return (
    <li key={id}>
      <div className="item-head2-container">
        <div className="coin-container">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currency-logo"
          />
          <p className="item-head2">{currencyName}</p>
        </div>
        <div className="currency-container">
          <p className="item-head2">{usdValue}</p>
          <p className="item-head2">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
