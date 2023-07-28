import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({ // 약간 useState() 역할임
    name : 'user',
    initialState:'Park'
})

let stock = createSlice({ // 약간 useState() 역할임
    name : 'stock',
    initialState: [10, 11, 12]
})

export default configureStore({
    reducer:{ // 위에 쓴 내용들을 여기에 등록을 해야 함
        user : user.reducer,
        stock : stock.reducer
    }
})