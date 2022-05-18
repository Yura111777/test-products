import {
    CREATE_COMMENT,
    CREATE_PRODUCT,
    DELETE_COMMENT,
    DELETE_PRODUCT, EDIT_COMMENT,
    EDIT_PRODUCT,
    FETCH_COMMENT,
    FETCH_PRODUCT
} from "./types";


const initialState = {
    products:  [],
    comments: []
}


export const productReducer = (state = initialState, action)=> {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.payload)
            };
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map(el => el._id === action.payload._id ? el = action.payload : el)
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(el =>  el._id !== action.payload)
            }
        case FETCH_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case CREATE_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.payload)
            };
        case FETCH_COMMENT:
            return {
                ...state,
                comments: action.payload
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(el =>  el._id !== action.payload)
            }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: state.comments.map(el => el._id === action.payload._id ? el = action.payload : el)
            }
        default: return state;
    }
}