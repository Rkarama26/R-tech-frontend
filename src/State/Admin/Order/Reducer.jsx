import { CANCELED_ORDERS_FAILURE, CANCELED_ORDERS_REQUEST, CANCELED_ORDERS_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDERS_FAILURE, DELETE_ORDERS_REQUEST, DELETE_ORDERS_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDERS_FAILURE, SHIP_ORDERS_REQUEST, SHIP_ORDERS_SUCCESS } from "./ActionType";


const initialState = {
    loading: false,
    orders: [],
    error: "",

};

const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
                error: "",
            };
        case GET_ORDERS_FAILURE:
            return {
                loading: false,
                orders: [],
                error: action.payload,
            };

        case CONFIRMED_ORDER_REQUEST:
        case PLACED_ORDER_REQUEST:
        case DELIVERED_ORDERS_REQUEST:
        case CANCELED_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case CONFIRMED_ORDER_SUCCESS:
            return {
                ...state,
                confirmed: action.payload,
                isLoading: false,
            };
        case PLACED_ORDER_SUCCESS:
            return {
                ...state,
                placed: action.payload,
                isLoading: false,
            };
        case DELIVERED_ORDERS_SUCCESS:
            return {
                ...state,
                delivered: action.payload,
                isLoading: false,
            };
        case CANCELED_ORDERS_SUCCESS:
            return {
                ...state,
                canceled: action.payload,
                isLoading: false,
            };

        case CONFIRMED_ORDER_FAILURE:
        case PLACED_ORDER_FAILURE:
        case DELIVERED_ORDERS_FAILURE:
        case CANCELED_ORDERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case DELETE_ORDERS_REQUEST:
            return { ...state, loading: true };
        case DELETE_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                deletedOrder: action.payload
            };
        case DELETE_ORDERS_FAILURE:
            return { ...state, loading: false, error: action.payload };


        case SHIP_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case SHIP_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                shipped: action.payload

            }
        case SHIP_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                shipped: action.payload
            };

        default:
            return state;

    }
};

export default adminOrderReducer;