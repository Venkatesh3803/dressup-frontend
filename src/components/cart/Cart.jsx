import "./cart.css"
import shirt1 from "../../images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg"
import { Link } from "react-router-dom"

const Cart = ({ cartOpen, setCartOpen }) => {
  return (
    <div className={cartOpen ? "cart cart-active" : "cart"}>
      <div onClick={() => setCartOpen(false)} className="cart-cross">
        X
      </div>
      <h1>Cart</h1>
      <div className="cart-list">
        <div className="cart-card">
          <div className="cart-card-left">
            <img src={shirt1} alt="" />
          </div>
          <div className="cart-card-right">
            <div className="card-right-top">
              <h3>Plane White t-shirt for mens</h3>
              <div className="sizes">
                <div className="size">
                  <h4>Size:-</h4>
                  <p>Small</p>
                </div>
                <div className="size">
                  <h4>Color:-</h4>
                  <p>Pink</p>
                </div>
              </div>
            </div>
            <div className="card-right-buttom">
              <div className="qty">
                <span>+</span>
                <p>5</p>
                <span>-</span>
              </div>

              <div className="price">
                <h4>$45</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-card">
          <div className="cart-card-left">
            <img src={shirt1} alt="" />
          </div>
          <div className="cart-card-right">
            <div className="card-right-top">
              <h3>Plane White t-shirt for mens</h3>
              <div className="sizes">
                <div className="size">
                  <h4>Size:-</h4>
                  <p>Small</p>
                </div>
                <div className="size">
                  <h4>Color:-</h4>
                  <p>Pink</p>
                </div>
              </div>
            </div>
            <div className="card-right-buttom">
              <div className="qty">
                <span>+</span>
                <p>5</p>
                <span>-</span>
              </div>

              <div className="price">
                <h4>$45</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-card">
          <div className="cart-card-left">
            <img src={shirt1} alt="" />
          </div>
          <div className="cart-card-right">
            <div className="card-right-top">
              <h3>Plane White t-shirt for mens</h3>
              <div className="sizes">
                <div className="size">
                  <h4>Size:-</h4>
                  <p>Small</p>
                </div>
                <div className="size">
                  <h4>Color:-</h4>
                  <p>Pink</p>
                </div>
              </div>
            </div>
            <div className="card-right-buttom">
              <div className="qty">
                <span>+</span>
                <p>5</p>
                <span>-</span>
              </div>

              <div className="price">
                <h4>$45</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-card">
          <div className="cart-card-left">
            <img src={shirt1} alt="" />
          </div>
          <div className="cart-card-right">
            <div className="card-right-top">
              <h3>Plane White t-shirt for mens</h3>
              <div className="sizes">
                <div className="size">
                  <h4>Size:-</h4>
                  <p>Small</p>
                </div>
                <div className="size">
                  <h4>Color:-</h4>
                  <p>Pink</p>
                </div>
              </div>
            </div>
            <div className="card-right-buttom">
              <div className="qty">
                <span>+</span>
                <p>5</p>
                <span>-</span>
              </div>

              <div className="price">
                <h4>$45</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-bottom">
          <div className="cart-buttom-list">
            <h3>Total Price</h3>
            <span>$55</span>
          </div>
          <Link to={"../checkout"}>
            <button className="cart-btn">Check-Out</button>
          </Link>
          <button className="cart-btn">Clear-Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Cart