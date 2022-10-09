import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CurrencyExchange.css'

export const CurrencyExchange = () => {
  const navigate = useNavigate()
  const goBack = () => navigate('/', { replace: true })
  return (
    <div>
      <div className="go-back" onClick={goBack}>
        Go back
      </div>
    </div>
  )
}
