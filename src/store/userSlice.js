import { createSlice } from "@reduxjs/toolkit"


let user = createSlice({ // 약간 useState() 역할임
    name : 'user',
    initialState:{name:'ParkJiyun', age:22},
    reducers : {
        changeName(state){
            state.name = 'jiyun'
        },
        countAge(state, actions){
            state.age += actions.payload
            // 다른 컴포넌트애서 쓸 때는  ''countAge(8)'' <- 이렇게 쓰면 8씩 더하기가 된다.
        },
        changeFullName(){
            return 'ParkJiYun'
        }
    }
})

export let {changeName, changeFullName, countAge} = user.actions

export default user