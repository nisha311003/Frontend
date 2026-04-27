export function fetchData(){
    return async function (dispatch){
        dispatch({type: "FETCH_PRODUCTS_REQUEST"})
        try {
            let res = await fetch("https://fakestoreapi.com/products")
            if(!res.ok){
                throw new Error("Failed to fetch!!")
            }

            let data = await res.json()
            dispatch({type:"FETCH_PRODUCTS_SUCCESS", payload: data})
        } catch (error) {
            dispatch({type:"FETCH_PRODUCTS_FAILED", payload: error.message})
        }
    }
}