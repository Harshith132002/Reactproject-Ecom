import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) => {
        set((state) => {
          const existingItem = state.cart.find(
            (cartitem) => cartitem.id === item.id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((cartitem) =>
                cartitem.id === item.id
                  ? { ...cartitem, quantity: cartitem.quantity + 1 }
                  : cartitem
              ),
            };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        });
      },

      clearCart: () => set({ cart: [] }),

      increment: (id) =>{
        console.log('increamen id',id)
        set((state)=>{
          const updatedCart = state.cart.map((cartitem)=>
         cartitem.id === id?
          {...cartitem,quantity: cartitem.quantity+1} : cartitem
          )
          return{cart:[...updatedCart]}
        })
      },
        decrement:(id) => {
          set((state)=>{
            const datedCart = state.cart.map((cartitem)=>
            cartitem.id === id && cartitem.quantity > 1?
            {...cartitem,quantity:cartitem.quantity-1 }:cartitem
            )
            return{cart:[...datedCart]}
          }
    )}
   
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCart;
