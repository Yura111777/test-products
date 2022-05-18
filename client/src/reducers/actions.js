import {
    CREATE_COMMENT,
    CREATE_PRODUCT,
    DELETE_COMMENT,
    DELETE_PRODUCT, EDIT_COMMENT,
    EDIT_PRODUCT,
    FETCH_COMMENT,
    FETCH_PRODUCT
} from "./types";

export const createProduct = (product) => {
    return {
        type: CREATE_PRODUCT,
        payload: product
    }
}

export  const editProduct = (product) => {
    return {
        type: EDIT_PRODUCT,
        payload: product
    }
}

export  const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        payload: product
    }
}

export  const fetchProduct = (product) => {
    return {
        type: FETCH_PRODUCT,
        payload: product
    }
}

export const createComment = (comment) => {
    return {
        type: CREATE_COMMENT,
        payload: comment
    }
}

export  const fetchComment = (comment) => {
    return {
        type: FETCH_COMMENT,
        payload: comment
    }
}

export  const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        payload: comment
    }
}

export  const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        payload: comment
    }
}