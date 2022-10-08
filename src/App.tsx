import { useEffect } from 'react'
import './App.css'
import { Currency } from './components/core/Currency'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getAllCurrency } from './store/currency'

export const App = () => {
  const allMoney = useAppSelector(state => state.currency.currency)
  let filterCurrency = allMoney.filter(
    el => el.cc === 'CAD' || el.cc === 'AED' || el.cc === 'USD' || el.cc === 'EUR'
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllCurrency())
    localStorage.setItem('currency', 'UAH')
  }, [dispatch])

  const choiceCurrency = (cur: string): void => {
    localStorage.setItem('currency', `${cur}`)
  }

  return (
    <div className="wrapper">
      <div className="choice">
        <label className="label">Choice currency</label>
        <select onChange={e => choiceCurrency(e.target.value)}>
          <option value="UAH" onClick={() => choiceCurrency('UAH')}>
            UAH
          </option>
          {filterCurrency.map((el, i) => (
            <option key={i} value={el.cc}>
              {el.cc}
            </option>
          ))}
        </select>
      </div>

      <div className="currency">
        <h1>Current value currency</h1>
        {filterCurrency.map(el => (
          <Currency key={el.r030} {...el} />
        ))}
      </div>
    </div>
  )
}
