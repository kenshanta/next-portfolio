import { createSlice } from '@reduxjs/toolkit'

const actionBase = (state: number) => {
  console.log(state, 'state')
  state + 1
  console.log(state + 1, 'state + 1')
  return state
}
const counterSlice = createSlice({
  name: 'counter',
  initialState: 2,
  reducers: {
    increment: (state: number) => state + 1,
    decrement: (state: number) => state - 1,
  },
})

export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
