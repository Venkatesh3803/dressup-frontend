import "./productsList.css"
import ProductsCard from "../productsCard/ProductsCard"

const Products = ({ popular, products }) => {
    return (
        <div className='products'>
            <h1>{popular}</h1>
            {products ? <h1 style={{textAlign:"start"}}>{products}</h1> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio repellendus officiis, in quisquam molestiae nobis sequi? Nam accusantium optio incidunt ad cum totam ut qui reprehenderit dolorem rem. Nihil!</p>}

            <div className="product-container">
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
            </div>
        </div>
    )
}

export default Products