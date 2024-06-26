

import { useSelector } from "react-redux";

function Cart() {
    const items = useSelector((state) => state.items);

    return (
        <div>
            <h2>Items</h2>
            {Object.keys(items).map((id) => (
                <div key={id}>
                    <span>Product ID: {id}</span>
                    <span>Quantity: {items[id].quantity}</span>
                </div>
            ))}
        </div>
    );
}

export default Cart;