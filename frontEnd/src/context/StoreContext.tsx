import { createContext, ReactNode, useState } from "react";
import { food_list } from "../data/common";

interface food_list_items{
    _id: string,
    name: string,
    image: string,
    price: number,
    description: string,
    category: string,
    rating?: number,
    reviews?: number,
    is_available?: boolean
}

interface StoreContextType {
    food_list: food_list_items[];
    cartItems: CartItems;
    setCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
    addCartItems: (itemId: string) => void;
    removeCartItems: (itemId: string) => void;
    getTotalCartAmount: () => number;
    searchItems: (searchTerm: string) => food_list_items[];
}

export const StoreContext = createContext<StoreContextType | null>(null);

interface StoreContextProviderProps {
    children: ReactNode;
}

interface CartItems {
    [key: string]: number;
  }
  
  

const StoreContextProvider = (props:StoreContextProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItems>({});

    const addCartItems = (itemId: string) => {
        setCartItems((prev) => {
          const newQuantity = prev[itemId] ? prev[itemId] + 1 : 1;
          return { ...prev, [itemId]: newQuantity };
        });
    };


    const removeCartItems = (itemId: string) => {
        setCartItems((prev) => {
          if (!prev[itemId]) { return prev;}
    
          const { [itemId]: _, ...rest } = prev;
          return prev[itemId] > 1 
            ? { ...prev, [itemId]: prev[itemId] - 1 }
            : rest;
        });
    };
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
      
        for (const itemId in cartItems) {
          if (cartItems[itemId] > 0) {
            const itemInfo = food_list.find((product) => product._id === itemId);
      
            if (itemInfo) {
              totalAmount += itemInfo.price * cartItems[itemId];
            }
          }
        }
      
        return totalAmount;
    };


    const searchItems = (searchTerm: string) => {
      return food_list.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
      

    const contextValue: StoreContextType = {
        food_list,
        cartItems,
        setCartItems,
        addCartItems,
        removeCartItems,
        getTotalCartAmount,
        searchItems,
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider