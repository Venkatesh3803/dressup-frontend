import { useState } from "react"
import "./productpageLeft.css"
import { AiOutlineDown } from "react-icons/ai"

const ProductpageLeft = () => {
  const [sort, setSort] = useState(false)
  const [range, setRange] = useState(false)
  const [size, setSize] = useState(false)
  const [color, setColor] = useState(false)


  return (
    <div className="Productpage-left">
      <div className="productpage-left-container">
        <div className="list-items">
          <div className="sort" onClick={() => setSort(!sort)} style={{ cursor: "pointer" }}>
            <span>Sort by Price</span>
            <AiOutlineDown  />
          </div>
          {sort &&
            <div className="sort-list">
              <div className="sort-input">
                <input type="radio" />
                <label htmlFor="">Price High</label>
              </div>
              <div className="sort-input">
                <input type="radio" />
                <label htmlFor="">Price Low</label>
              </div>
            </div>
          }
        </div>

        <div className="list-items">
          <div className="sort" onClick={() => setRange(!range)} style={{ cursor: "pointer" }} >
            <span>Sort by Range</span>
            <AiOutlineDown />
          </div>
          {range &&
            <div className="sort-list">
              <div className="sort-input">
                <input type="range" min={100} max={10000} className="range" />
                <label htmlFor="">5000</label>
              </div>
            </div>
          }
        </div>

        <div className="list-items">
          <div className="sort" onClick={() => setSize(!size)} style={{ cursor: "pointer" }}>
            <span>Sizes</span>
            <AiOutlineDown  />
          </div>
          {size &&
            <div className="sort-size-list">
              <div className="sort-size">
                <span>S</span>
              </div>
              <div className="sort-size">
                <span>M</span>
              </div>
              <div className="sort-size">
                <span>L</span>
              </div>
              <div className="sort-size">
                <span>XL</span>
              </div>
              <div className="sort-size">
                <span>XXL</span>
              </div>
            </div>
          }
        </div>

        <div className="list-items">
          <div className="sort"  onClick={() => setColor(!color)} style={{ cursor: "pointer" }}>
            <span>Color</span>
            <AiOutlineDown />
          </div>
          {color &&
            <div className="sort-size-list">
              <div className="sort-size">
                <span>Red</span>
              </div>
              <div className="sort-size">
                <span>Green</span>
              </div>
              <div className="sort-size">
                <span>Yellow</span>
              </div>
              <div className="sort-size">
                <span>Black</span>
              </div>
              <div className="sort-size">
                <span>Orange</span>
              </div>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default ProductpageLeft