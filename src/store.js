import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice'


let cart = createSlice({
    name : 'cart',
    initialState :[
        {id:0, name:'goodgood', count:2},
        {id:1, name:'rainbow', count:1},
    ],
    reducers : {
        addCount(state, action){
            let add = state.findIndex((a)=>{return a.id === action.payload})
            state[add].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})
export let {addCount, addItem} = cart.actions

export default configureStore({
    reducer:{ // 위에 쓴 내용들을 여기에 등록을 해야 함
        user : user.reducer,
        cart : cart.reducer,
    }
})