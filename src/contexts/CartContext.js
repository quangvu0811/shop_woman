import React , {createContext, useState, useEffect} from 'react'
import Product from '../componnents/Product'


export const cartContext = createContext()


const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const [itemAmount, setItemAmount] = useState(0)

  const [total, setTotal] = useState(0)

  useEffect(() =>{
    const amount = cart.reduce(( addAmount ,deleteAmount) =>{
      return addAmount + deleteAmount.price * deleteAmount.amount
    }, 0);
    setTotal(amount)
  })

  useEffect (() =>{
     if(cart) {
      const amount = cart.reduce(( addAmount ,deleteAmount) =>{
        return addAmount + deleteAmount.amount
      }, 0);
      setItemAmount(amount)
     }
  },[cart])

  const addToCart =  (Product, id) =>{
 
   const newItem = {...Product,  amount: 1 };
  
    const cartItem = cart.find(item =>{
      return item.id === id;
    });
   
    if(cartItem) {
      const newCart = [...cart].map(item =>{
        if (item.id === id){
          return {...item , amount: cartItem.amount  +1}
        } else{
          return item ;
        }
      });
      setCart(newCart)
    } else{
      setCart([...cart, newItem])
    }
  };

    const removeFromCart = (id) => {
      const newCart = cart.filter((item) =>{
        return item.id !== id
      })
      setCart(newCart)
    }

    const clearCart = () =>{
      setCart([])
    }


    const addAmount = (id) =>{
      const cartItem = cart.find((item) => item.id === id)

      addToCart(cartItem, id)
    }

    const deleteAmount =  (id) =>{
      const cartItem = cart.find(item =>{
        return item.id === id
      })
      if(cartItem) {
        const newCart = cart.map(item =>{
          if (item.id === id){
          return {...item, amount : cartItem.amount - 1}
        } else {
          return item
        }
        })
        setCart(newCart)

      }
        if (cartItem.amount < 2 ){
          removeFromCart(id)
        }
      
    }
   
  return (
    <cartContext.Provider
      value={{cart , addToCart ,removeFromCart ,clearCart,addAmount
      ,deleteAmount ,itemAmount ,total }}
    >{children}</cartContext.Provider>
  )

}

export default CartProvider