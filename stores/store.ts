import { configureStore } from '@reduxjs/toolkit'
// Import your reducers
import counterSlice from './slices/slices'

const store = configureStore({
  reducer: {
    counterSlice,
    // Add more reducers as needed
  },
})
export default store
