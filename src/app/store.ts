// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import favoritesReducer from '../features/favorites/favoritesSlice'
import { api } from '../services/api'

// Create and export RootState and AppDispatch types
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>

// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch
