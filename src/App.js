import "./global.css"
import Homepage from "./pages/homepage/homepage";
import ProductsPage from "./pages/productpage/productsPage"
import { Route, Routes } from "react-router-dom";
import SingleProductPage from "./pages/singleProductPage/singleProductPage";
import CheckOutPage from "./pages/checkOut/checkOutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products?" element={<ProductsPage />} />
        <Route path="/singleproducts" element={<SingleProductPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>

    </div>
  );
}

export default App;
