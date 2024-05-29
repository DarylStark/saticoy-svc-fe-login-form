import './login_page.scss'
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
      <Header toggle_theme={toggle_theme} />
      <body>
        <LoginForm />
      </body>
    </div>
  )
}

export default Layout
