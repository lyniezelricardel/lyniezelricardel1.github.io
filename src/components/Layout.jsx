import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import ScrollManager from './ScrollManager.jsx'

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <header className="site-header">
        <Navbar />
      </header>
      <Outlet />
    </>
  )
}
