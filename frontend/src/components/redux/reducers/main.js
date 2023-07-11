import { getProductsReducers, getProductsByIdReducer } from "./Productsreducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers,
    getproductbyid : getProductsByIdReducer
});

export default rootreducers;