import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const MainPage: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
