import { createSlice } from '@reduxjs/toolkit'

//INFO CARRITO, ESTADO LOCAL.
const initialState = {
  value: {
    user:"ffuentes",
    items:[],
    total:null,
    updateAt:"",
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
        const foundItem = state.value.items.find(item => item.id === action.payload.id)
        if(foundItem) foundItem.quantity++
        else state.value.items.push({...action.payload,quantity:1})
        state.value.total = state.value.items.reduce((acc,item)=> acc + (item.price * item.quantity),0)
        state.value.updateAt = new Date().toLocaleString()
        console.log(state.value)

    },
    removeItem: () => {
        // state.value.items.pop(actions.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer