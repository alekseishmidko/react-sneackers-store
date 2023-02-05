import AppContext from "../context"
import React from "react";

export  const useCart = () => {
    const {cartItems, setCartItems} = React.useContext(AppContext );
    const totalPrice  = (cartItems.reduce((sum, obj) => Number(obj.price) + Number(sum), 0));

    return {cartItems, totalPrice, setCartItems}
}