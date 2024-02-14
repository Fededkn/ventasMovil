import { createSlice } from '@reduxjs/toolkit'

//INFO CARRITO, ESTADO LOCAL.

const initialState = {
  value: {
    user:"",
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
    removeItem: (state, action) => {
      
      // Encuentra el índice del elemento a eliminar

      const index = state.value.items.findIndex(item => item.id === action.payload);

      if (index !== -1) {
        state.value.items.splice(index, 1);

        // Recalcula el total

        state.value.total = state.value.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        state.value.updateAt = new Date().toLocaleString();
        console.log(state.value);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer