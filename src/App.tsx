import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/hooks'
import { getAllCurrency } from './store/currency'

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllCurrency())
  }, [])
  return <div className="app">world</div>
}
