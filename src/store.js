import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({ // 약간 useState() 역할임
    name : 'user',
    initialState:{name:'ParkJiyun', age:22},
    reducers : {
        changeName(state){
            state.name = 'jiyun'
        },
        countAge(state, a){
            state.age += a.payload
            // 다른 컴포넌트애서 쓸 때는  ''countAge(8)'' <- 이렇게 쓰면 8씩 더하기가 된다.
        },
        changeFullName(){
            return 'ParkJiYun'
        }
    }
})
export let {changeName, changeFullName, countAge} = user.actions

let cart = createSlice({
    name : 'cart',
    initialState :[
        {id:0, name:'goodgood', count:2},
        {id:1, name:'rainbow', count:1},
    ]
})

export default configureStore({
    reducer:{ // 위에 쓴 내용들을 여기에 등록을 해야 함
        user : user.reducer,
        cart : cart.reducer,
    }
})