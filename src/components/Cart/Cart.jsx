// import { useSelector } from "react-redux";
//
// function Cart() {
//     let cart = useSelector((state) => {
//         return state.cart.items;
//     })
//     return (
//         <div>
//             <ul>
//                 {
//                     Object.values(cart).map((item) => {
//                         return (<li key={item.id}>{item.title}   -
//                                  : {item.quantity} </li>
//                          )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
//
// export default Cart;
import React from "react";
import {useSelector} from "react-redux";

function Cart() {
    const cartElements = useSelector(state => state.cart.items);
    return (
        <div>
            {
                Object.keys(cartElements).map((key) => {
                    return (
                        <div className="currentCart">
                            <div>{cartElements[key].title}</div>
                            <div> {cartElements[key].quantity}</div>
                            <div>Category: {cartElements[key].category}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cart;