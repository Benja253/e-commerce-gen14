import { Route, Routes } from "react-router-dom"
import CartScreen from "./components/Cart/CartScreen"
import HomeScreen from "./components/Home/HomeScreen"
import LoginScreen from "./components/Login/LoginScreen"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PurchasesScreen from "./components/Purchases/PurchasesScreen"
import FooterScreen from "./components/Shared/FooterScreen"
import HeaderScreen from "./components/Shared/HeaderScreen"


function App() {

  return (
    <div className="App">
      <HeaderScreen />
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/purchases" element={<PurchasesScreen />} />
          </Route>
        </Routes>
      </main>
      <FooterScreen />
    </div>
  )
}

export default App
