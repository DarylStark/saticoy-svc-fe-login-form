import LoginForm from '../widgets/LoginForm'
import './Layout.scss'
import DarkModeToggle from '../components/DarkModeToggle'

function Layout() {
  return (
    <div id='layout'>
      <div className='bottom-right'><DarkModeToggle /></div>
      <LoginForm />
    </div>
  )
}

export default Layout
