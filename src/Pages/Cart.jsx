import useCart from "../store/useStore";

const Cart = () => {
  const cart = useCart((state) => state.cart);
  const clearCart = useCart((state)=>state.clearCart)
  const increment = useCart((state)=>state.increment)
  const decrement = useCart((state)=>state.decrement)
  console.log(cart)

  return (
    <div>
      <div className="flex justify-between ">
      <h2>Shopping Cart</h2>
      <button onClick={clearCart}>clear cart</button>
      </div>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex  border border-black justify-evenly h-[70px] w-[800px] items-center"
            >
              <div className="w-[55px] h-[50px] object-contain max-h-full">
                <img src={item.image} alt={item.model} />
              </div>
              <div className="">{item.model}</div>
              <div>{item.price}</div>
              <div className="flex gap items-center">
               
              <div className="text-center ">{item.quantity}</div>
              <div className="flex flex-col ">
              <div><button onClick={ ()=>increment(item.id)}>+</button></div>
              <div><button onClick={()=>decrement(item.id)} >-</button></div>
              
              </div>
              </div>
              <div>{(parseInt(item.price)) * (parseInt(item.quantity))}</div>
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
