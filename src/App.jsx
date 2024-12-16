
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";



function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <AppLayout /> }>
            <Route index  element={<Home />} />
            <Route path="login"  element={<Login />} />
            <Route path="shoppingCart"  element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
