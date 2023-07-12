import "./singlepagedesign.css"
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"
import tshirt from "../../images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg"

import ProductsList from "../../components/productsList/productsList"

const Singlepagedesign = () => {
    const colors = [
        "white", "red", "yellow", "pink", "orange"
    ]
    return (
        <div className='singlepagedesign'>
            <div className="singlepagedesign-container">

                <div className="singlepagedesign-product">
                    <div className="singlepagedesign-left">
                        <img src={tshirt} alt="" />
                    </div>
                    <div className="singlepagedesign-right">
                        <h2>Daily wear t-shirt </h2>
                        <h3>$55 </h3>
                        <div className="rating">
                            <div className="stars">
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                            <span>112 reviews</span>
                        </div>

                        <div className="qty">
                            <button>-</button>
                            <span>5</span>
                            <button>+</button>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eligendi animi voluptates ullam. Nisi repellat harum, esse, nobis odio praesentium non dignissimos quibusdam culpa dolores fugit suscipit? Aperiam, necessitatibus incidunt!</p>
                        <div className="size">
                            <h4>Sizes :-</h4>
                            <div className="sizes">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                                <span>XXL</span>
                            </div>
                        </div>

                        <div className="color">
                            <h4>Colors</h4>
                            <div className="colors">
                                {colors.map((i) => {
                                    return <span style={{ backgroundColor: `${i}` }}></span>
                                })}
                            </div>
                        </div>

                        <button>Add to bag</button>
                    </div>
                </div>
            </div>
            <ProductsList  products = "YOU MAY ALSO LIKE"/>
        </div>
    )
}

export default Singlepagedesign
