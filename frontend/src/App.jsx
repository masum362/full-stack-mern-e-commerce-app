import { Outlet } from 'react-router-dom'
import Header from './shared/header/Header'
import Footer from './shared/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
