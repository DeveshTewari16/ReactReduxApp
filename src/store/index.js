import { createSlice ,configureStore} from '@reduxjs/toolkit'

const initialCounterState={counter:0}
const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter=state.counter+1;
        },
        decrement(state){
            state.counter=state.counter-1;
        }
}}
);

const initialAuthState={isAuth:false}

const authReducer=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        Logout(state){
            state.isAuth=false
        },
        Login(state){
            state.isAuth=true
        }
    }
})



const store=configureStore(
    {
        reducer:{counter:counterSlice.reducer,
        auth:authReducer.reducer}
    }
);

export const counterActions =counterSlice.actions;
export const authActions = authReducer.actions;

//console.log(store.dispatch(counterActions.increment))

export default store;


