import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
/* import { IoCart } from "react-icons/io5"; */

function CartIcon() {
  return (
    <NavLink to="/cart">
      <IoCartOutline size={40} />
    </NavLink>
  );
}

export default CartIcon;
