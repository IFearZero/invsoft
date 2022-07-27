import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

//import Pay from "./pages/Pay";

import Success from "./pages/Success";

//import { render } from "react-dom";

import {
  BrowserRouter, Route, Routes, Navigate
} from "react-router-dom";

import { useSelector } from "react-redux";

/*const App = () => {
  render (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/login" element={<Login />}> </Route>
      <Route path="/register" element={<Register />}> </Route>
      <Route path="/cart" element={<Cart />}> </Route>
      <Route path="/product" element={<Product />}> </Route>
      <Route path="/productlist" element={<ProductList />}> </Route>      
      <Route path="/pay" element={<Pay />}> </Route>
      <Route path="/success" element={<Success />}> </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
  );
}
*/

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}> </Route>
      <Route path="/products/:category" element={<ProductList />}> </Route>
      <Route path="/product/:id" element={<Product />}> </Route>
      <Route path="/cart" element={<Cart />}> </Route>
      <Route path="/success" element={<Success />}> </Route>
      <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} /> 
      <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} /> 
    </Routes>
    </BrowserRouter>
  )
};

export default App;