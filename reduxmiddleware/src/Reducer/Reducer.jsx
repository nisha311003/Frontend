let initialState ={
    loading: false,
    products:[],
    error:null
}

export default function Reducer(state=initialState, action){
    switch(action.type){
        case "FETCH_PRODUCTS_REQUEST":
            return {...state, loading:true}
        case "FETCH_PRODUCTS_SUCCESS":
            return {loading:false, products:action.payload, error:null}
        case "FETCH_PRODUCTS_FAILED":
            return {loading:false, products:[], error: action.payload}

        default:
            return state
    }
}
