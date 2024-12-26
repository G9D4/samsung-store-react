import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import AppLayout from "./components/common/AppLayout";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <CheckoutProvider>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="shoppingCart" element={<ShoppingCart />} />
                  <Route path="checkout" element={<Checkout />} />
                </Route>
              </Routes>
            </CheckoutProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
      <Toaster position="top-center" gutter={12} containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000, }, error: { duration: 5000, },
          style: { fontSize: '16px', maxWidth: '500px', padding: '16px 24px', backgroundColor: "white", color: "gray", }
        }}
      />
    </>
  )
}

export default App
