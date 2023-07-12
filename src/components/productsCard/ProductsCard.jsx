import "./ProductsCard.css"
import tshirt from "../../images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg"
import { useState } from "react"
import QuickView from "../quickView/quickView"
import { Link } from "react-router-dom"

const ProductsCard = () => {
    const [quickView, setQuickView] = useState(false)

    return (
        <>
            <div className='cards'>
                <div className="cards-container">
                    <div className="product-img">
                        <div className="black" onClick={() => setQuickView(!quickView)}>
                            Quick View
                        </div>
                        <Link to={"/singleproducts"}>
                            <img src={tshirt} alt="" />
                        </Link>
                    </div>
                    <div className="card-info">
                        <h3>Daily-wear t-shirt for mens</h3>
                        <div className="details">
                            <div className="d-left">
                                <p>Brand</p>
                                <div className="size">

                                </div>
                            </div>
                            <div className="d-right">
                                <h2>$55</h2>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {quickView &&
                <QuickView setQuickView={setQuickView} />
            }

        </>
    )
}

export default ProductsCard