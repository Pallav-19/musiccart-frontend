import React, { } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './components/miscellaneous/loader/Loader'
import Login from './pages/Login'
import Register from './pages/Register'
import RequireAuth from './guard/RequireAuth'
import Footer from './components/footer/FooterComponent'
import Home from './pages/Home'
import Header from './components/header/Header'
import Products from './components/products/Products'
import ViewProduct from './components/products/viewProduct/ViewProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import CheckedOut from './pages/CheckedOut'
import PageNotFound from './pages/PageNotFound'
import { useSelector } from 'react-redux'
import { currentLoading } from './features/utils/loadingSlice'
import Notifications from './components/miscellaneous/Notifications'
import PersistentUserLogin from './components/auth/PersistentUserLogin'
const App = () => {
  const isLoading = useSelector(currentLoading)
  return (
    <div className='App'>
      <Router>
        <Header />
        {isLoading && <Loader />}
        <Notifications />
        <Routes>

          <Route exact path='/' element={<Home />} >
            <Route index exact path='/' element={<Products />} />
            <Route exact path='/:id' element={<ViewProduct />} />
            <Route element={<PersistentUserLogin />}>
              <Route element={<RequireAuth />}>
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/checkout' element={<Checkout />} />
                <Route exact path='/checked-out' element={<CheckedOut />} />
              </Route>
            </Route>
          </Route>

          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App