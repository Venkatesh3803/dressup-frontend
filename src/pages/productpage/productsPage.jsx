import "./productsPage.css"
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import ProductsList from "../../components/productsList/productsList"
import ProductpageLeft from "../../components/productpageLeft/productpageLeft"

const ProductsPage = () => {
  return (
    <div>
      <Navber />
      <div className="product-page">
        <ProductpageLeft />
        <div className="product-page-right">
          <ProductsList products="PRODUCTS" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductsPage