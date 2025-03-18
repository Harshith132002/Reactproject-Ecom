import useCart from "../store/useStore";

const Cart = () => {
  const cart = useCart((state) => state.cart);
  const clearCart = useCart((state) => state.clearCart);
  const increment = useCart((state) => state.increment);
  const decrement = useCart((state) => state.decrement);
  console.log(cart);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2>Shopping Cart</h2>
        <button onClick={clearCart}>Clear Cart</button>
      </div>

     <div className="flex flex-col justify-center align-middle text-center">

      <div className="grid grid-cols-4 bg-gray-100 text-black p-3 rounded-t-md text-center font-semibold w-1/2">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {cart.length === 0 ? (
        <p className="mt-4">Cart is empty</p>
      ) : (
        <div className="flex flex-col gap-3 mt-2 w-1/2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 border border-black p-3 text-center items-center bg-gray-100 rounded-md"
            >
              <div className="flex items-center justify-center gap-2">
                <img src={item.image} alt={item.model} className="w-[55px] h-[50px] object-contain" />
                <span>{item.model}</span>
              </div>
              <div>{item.price}</div>
              <div className="flex justify-center items-center gap-2">
                <span>{item.quantity}</span>
                <div className="flex flex-col">
                  <button onClick={() => increment(item.id)}>+</button>
                  <button onClick={() => decrement(item.id)}>-</button>
                </div>
              </div>
              <div>{parseInt(item.price) * parseInt(item.quantity)}</div>
            </div>
           
          ))}
          
        </div>
      
      )}

     
         </div>
    </div>
  );
};

export default Cart;
