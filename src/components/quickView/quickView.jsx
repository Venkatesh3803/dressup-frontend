import "./quickview.css"
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"
import tshirt from "../../images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg"

const QuickView = ({ setQuickView }) => {
    const colors = [
        "white", "red", "yellow", "pink", "orange"
    ]
    return (
        <div className='quickView'>
            <div className="quickview-container">
                <div className="cancel" onClick={() => setQuickView(false)}>X</div>
                <div className="qv-product">
                    <div className="qv-left">
                        <img src={tshirt} alt="" />
                    </div>
                    <div className="qv-right">
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
                                    return  <span style={{ backgroundColor: `${i}` }}></span>
                                })}
                            </div>
                        </div>

                        <button>Add to bag</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickView