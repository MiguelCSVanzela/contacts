import { configureStore } from '@reduxjs/toolkit'

import ContatoReducer from './reducers/contato'
const store = configureStore({
  reducer: {
    contato: ContatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
