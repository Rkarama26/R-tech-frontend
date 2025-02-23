import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer, productListReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    customerProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    productList: productListReducer,
    adminOrder: adminOrderReducer,
})
 export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))