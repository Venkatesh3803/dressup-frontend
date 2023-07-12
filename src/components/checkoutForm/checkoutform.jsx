import "./checkoutform.css"
import img1 from "../../images/1st pink 2.jpg"
import img2 from "../../images/2nd brown 3.jpg"
import img3 from "../../images/2nd hoodie merron2.jpg"

const Checkoutform = () => {
    return (
        <div className='checkoutform'>
            <div className="checkout-container">
                <div className="checkout-right">
                    <h4 className="headings"> Order Summery</h4>

                    <div className="checkout-product-list">
                        <div className="checkout-img">
                            <img src={img1} alt="" />
                            <div className="checkout-info">
                                <h4>Cotton Shirt</h4>
                                <p>Color : PINK</p>
                                <p>Size : L</p>
                            </div>
                        </div>
                        <div className="checkout-price">
                            <p>$55.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="checkout-product-list">
                        <div className="checkout-img">
                            <img src={img2} alt="" />
                            <div className="checkout-info">
                                <h4>Cotton Shirt</h4>
                                <p>Color : PINK</p>
                                <p>Size : L</p>
                            </div>
                        </div>
                        <div className="checkout-price">
                            <p>$55.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="checkout-product-list">
                        <div className="checkout-img">
                            <img src={img3} alt="" />
                            <div className="checkout-info">
                                <h4>Cotton Shirt</h4>
                                <p>Color : PINK</p>
                                <p>Size : L</p>
                            </div>
                        </div>
                        <div className="checkout-price">
                            <p>$55.00</p>
                        </div>
                    </div>

                    <hr />

                    <div className="checkout-price-details">
                        <div className="checkout-subtotal">
                            <span>Subtotal</span>
                            <span>$350</span>
                        </div>
                        <div className="checkout-subtotal">
                            <span>Shipping</span>
                            <span>$10</span>
                        </div>
                        <div className="checkout-subtotal">
                            <span>Discount</span>
                            <span>$15</span>
                        </div>
                        <hr />
                        <div className="checkout-subtotal">
                            <span style={{ fontWeight: "600" }}>Grand Total</span>
                            <span>$355</span>
                        </div>


                    </div>
                </div>
                <div className="checkout-left">
                    <h4 className='headings'>Contact Information</h4>
                    <form action="">
                        <div className="from-inputs">
                            <label htmlFor="">Email address</label>
                            <input type="text" placeholder='xyz@gmail.com' />
                        </div>

                        <h4 className='headings'>Payment Details</h4>

                        <div className="from-inputs">
                            <label htmlFor="">Name on card</label>
                            <input type="text" />
                        </div>
                        <div className="from-inputs">
                            <label htmlFor="">Card Number</label>
                            <input type="text" />
                        </div>
                        <div className="form-col">
                            <div className="from-inputs">
                                <label htmlFor="">Expiration Date(MM/YY)</label>
                                <input type="nu" placeholder='07/22' />
                            </div>
                            <div className="from-inputs">
                                <label htmlFor="">CVV</label>
                                <input type="text" />
                            </div>
                        </div>

                        <h4 className='headings'>Shipping address</h4>

                        <div className="from-inputs">
                            <label htmlFor="">Address</label>
                            <input type="text" />
                        </div>
                        <div className="from-inputs">
                            <label htmlFor="">House Number</label>
                            <input type="text" />
                        </div>
                        <div className="form-col">
                            <div className="from-inputs">
                                <label htmlFor="">City</label>
                                <input type="nu" placeholder='07/22' />
                            </div>
                            <div className="from-inputs">
                                <label htmlFor="">State / Province</label>
                                <input type="text" />
                            </div>
                            <div className="from-inputs">
                                <label htmlFor="">Postal Code</label>
                                <input type="text" />
                            </div>
                        </div>

                    </form>

                    <hr />
                    <button>Place Order</button>

                </div>

            </div>
        </div>
    )
}

export default Checkoutform
