import { Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Routes from './Components/Routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
<div className='font-poppins'>
    <Navbar />
    <Routes />
    <Footer />
    </div>

    </Switch>
        </Suspense>
      </BrowserRouter>

      )
}

export default App
