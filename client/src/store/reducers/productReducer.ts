import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";

const initialState: ProductState = {
    types: [],
    brands: [],
    products: { count: 0, rows: [] } || [],
};

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS: {
            return { ...state, products: action.payload }
        }
        default: {
            return state
        }
    }
}

