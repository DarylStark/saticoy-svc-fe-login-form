import './login_page.scss'
import Header from '../organisms/header'
import LoginForm from '../organisms/login_form'

// Component
function Layout() {
  return (
    <div id='layout'>
      <Header />
      <main>
        <LoginForm />
      </main>
    </div>
  )
}

export default Layout
