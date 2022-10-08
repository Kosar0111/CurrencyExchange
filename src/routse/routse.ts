import { MainPage } from '../page/MainPage/MainPage'
import { CurrentCurrency } from '../page/CurrentCurrency/CurrentCurrency'
import { CurrencyExchange } from '../page/CurrencyExchange/CurrencyExchange'
import { NotFoundPage } from '../page/NotFoundPage/NotFoundPage'

export const routes = [
  {
    path: '/',
    element: <MainPage />,
    children: [
      { index: true, element: <CurrentCurrency /> },
      { path: 'shoes', element: <CurrencyExchange /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]
