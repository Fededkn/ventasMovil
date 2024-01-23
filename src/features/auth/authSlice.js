import { createSlice } from '@reduxjs/toolkit'

//INFO CARRITO, ESTADO LOCAL.
const initialState = {
  value: {
    email:null,
    idToken:null,
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state,action) => {
        state.value.email = action.payload.email
        state.value.idToken = action.payload.idToken
    }
  },
//Armar método para borrar.
  clearUser: () => {

  }
})

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions

export default authSlice.reducer