import { FC } from 'react'
import { ICurrency } from '../../../model/interfaceCurrency'
import './Currency.css'

export const Currency: FC<ICurrency> = (el: ICurrency) => {
  // const currentValue = localStorage.getItem('currency')
  // console.log(localStorage.getItem('currency'))
  // let value = el.rate
  // if (currentValue === 'USD') {
  //   return (value = el.rate / 36.5686)
  // } else if (currentValue === 'EUR') {
  //   return (value = el.rate / 35)
  // }
  return (
    <div className="currency-wrapper">
      <div className="currency-wrapper__short">{el.cc}</div>
      <div className="currency-wrapper__country">{el.txt}</div>
      <div className="currency-wrapper__value">{el.rate}</div>
    </div>
  )
}
