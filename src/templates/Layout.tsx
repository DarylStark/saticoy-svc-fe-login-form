import LoginForm from '../organisms/LoginForm'
import './Layout.scss'
import DarkModeToggle from '../atoms/DarkModeToggle'

function Layout() {
  return (
    <div id='layout'>
      <div className='bottom-right'><DarkModeToggle /></div>
      <LoginForm />
    </div>
  )
}

export default Layout
