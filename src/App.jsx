
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";



function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <AppLayout /> }>
            <Route index  element={<Home />} />
            <Route path="login"  element={<Login />} />
            <Route path="register"  element={<Register />} />
            <Route path="shoppingCart"  element={<ShoppingCart />} />
            <Route path="checkout"  element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
