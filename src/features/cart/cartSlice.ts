import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define Cart Item Interface
interface CartItem {
  id: string
  preco: number
  quantity: number
}

// Define Cart State Interface
interface CartState {
  items: CartItem[]
}

// Initialize Cart State
const initialState: CartState = {
  items: [] // 'items' is an array of cart items
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{ id: string; preco: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += action.payload.quantity // Update quantity if item exists
      } else {
        state.items.push(action.payload) // Add new item if it doesn't exist
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
