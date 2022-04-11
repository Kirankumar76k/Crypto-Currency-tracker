import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  getCryptoListUI = () => {
    const {cryptoList} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <div className="item-container">
          <div className="item-head-container">
            <h1 className="item-head">Coin Type</h1>
            <div className="h3">
              <h1 className="item-head">USD</h1>
              <h1 className="item-head">EURO</h1>
            </div>
          </div>
          <ul className="crypto-item-list">
            {cryptoList.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} CryptoDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      this.getCryptoListUI()
    )
  }
}
export default CryptocurrenciesList
