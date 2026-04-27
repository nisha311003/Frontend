let initialState = {
    count:0
}

function Reducer(state = initialState, action){

    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1}
        case "DECREMENT":
            return (state.count >0)? {count:state.count-1}: state;
        case "RESET":
            return {count:0};
        default:
            return state
    }
}
export default Reducer