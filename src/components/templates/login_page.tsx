import './login_page.scss'
import DarkModeToggle from '../../atoms/DarkModeToggle'
import Header from '../organisms/header'
import LoginForm from '../organisms/login_form'

// Props
interface LayoutProps {
  toggle_theme: () => void
}

// Component
function Layout({ toggle_theme }: LayoutProps) {
  return (
    <div id='layout'>
      <Header />
      <DarkModeToggle toggle_theme={toggle_theme} />
      <LoginForm />
    </div>
  )
}

export default Layout
