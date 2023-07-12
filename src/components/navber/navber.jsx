import "./navber.css"
import { AiOutlineMenuUnfold, AiOutlineSearch, AiOutlineSetting, AiOutlineShoppingCart } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { LuLayoutDashboard } from "react-icons/lu"
import { MdCancel } from "react-icons/md"
import { useState } from "react"
import NewArrivalsList from "../newArrivals/NewArrivalsList"
import Cart from "../cart/Cart"
import { Link } from "react-router-dom"



const Navber = () => {
  const [search, setSearch] = useState(false)
  const [active, setActive] = useState(false)
  const [mens, setMens] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [profile, setProfile] = useState(false)



  return (
    <div className="navber">
      <AiOutlineMenuUnfold style={{ cursor: "pointer" }} onClick={() => setActive(!active)} className="menu-icon" />
      <div className="nav-container">
        <div className="nav-left">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h1>Dress <span>Up</span></h1>
          </Link>
        </div>
        <div className="nav-links">
          <ul className={active ? "list-active" : "list"}>


            <Link onMouseEnter={() => setMens(true)} style={{ textDecoration: "none" }}>
              <li>MENS </li>
            </Link>
            <Link onMouseEnter={() => setMens(true)} style={{ textDecoration: "none" }}>
              <li>WOMENS </li>
            </Link>
            <Link to={"../products?category=accessories"} style={{ textDecoration: "none" }}>
              <li>ACCESSORIE</li>
            </Link>

            <Link to={"../products?category=delux"} style={{ textDecoration: "none" }}>
              <li>DE-EXCLUSIVE </li>
            </Link>
            <Link to={"../products?category=shoes"} style={{ textDecoration: "none" }}>
              <li>SHOES </li>
            </Link>



            <MdCancel className="cancle" onClick={() => setActive(false)} />
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-right-items">
            <div className="search">
              <AiOutlineSearch onClick={() => setSearch(true)} className="icons" />
            </div>
            <div className="vl"></div>
            <div className="search">
              <AiOutlineShoppingCart onClick={() => setCartOpen(!cartOpen)} className="icons" />
              <div className="bedge">2</div>
            </div>
            <div className="vl"></div>
            <div className="search" onMouseEnter={() => setProfile(true)}>
              <CgProfile className="icons" />
            </div>
          </div>
        </div>
        {search &&
          <div className="search-box">
            <div className="search-input">
              <AiOutlineSearch className="icons" />
              <input type="text" placeholder="Search Here..." />
            </div>
            <MdCancel onClick={() => setSearch(false)} className="icons" />
          </div>
        }
        {mens &&
          <NewArrivalsList setMens={setMens}  />
        }
        {cartOpen &&
          <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
        }

        {profile &&
          <div className="profile" onMouseLeave={() => setProfile(false)}>
            <div className="pro-list">
              <CgProfile />
              <h4>Profile</h4>
            </div>
            <div className="pro-list">
              <AiOutlineShoppingCart />
              <h4>My Orders</h4>
            </div>
            <div className="pro-list">
              <LuLayoutDashboard />
              <h4>Dashboard</h4>
            </div>
            <div className="pro-list">
              <AiOutlineSetting />
              <h4>Settings</h4>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navber