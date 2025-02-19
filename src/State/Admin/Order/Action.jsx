import { CANCELED_ORDERS_FAILURE, CANCELED_ORDERS_REQUEST, CANCELED_ORDERS_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDERS_FAILURE, DELETE_ORDERS_REQUEST, DELETE_ORDERS_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDERS_FAILURE, SHIP_ORDERS_REQUEST, SHIP_ORDERS_SUCCESS } from "./ActionType";
import { api } from "../../../Config/apiConfig";


export const getOrders = () => {
   // console.log("get all orders");
    return async (dispatch) => {
        dispatch({ type: GET_ORDERS_REQUEST });
        try {
            const response = await api.get(`/api/admin/order/list`);
            console.log("get all orders ", response.data)
            dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
        }
    };
}


export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDER_REQUEST });
    try {
        const response = await api.put(`/api/admin/order/${orderId}/confirmed`);
        const data = response.data;
        console.log("confirm order", data);
        dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        console.log("catch error", error);
        dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
    }
};


export const shipOrder = (orderId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SHIP_ORDERS_REQUEST })
            const { data } = await api.put(`/api/admin/order/${orderId}/ship`)
            console.log("shipped order ", data);
            dispatch({ type: SHIP_ORDERS_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: SHIP_ORDERS_FAILURE, payload: error.message });

        }
    };
};

export const deliveredOrder=(orderId) => async (dispatch) =>{

    dispatch({type: DELIVERED_ORDERS_REQUEST});

    try {
        const response = await api.put(`/api/admin/order/${orderId}/deliver`);
        const data = response.data;
        console.log("delivered order", data);
        dispatch({type:DELIVERED_ORDERS_SUCCESS, payload:data})

    } catch (error) {
        dispatch({type:DELIVERED_ORDERS_FAILURE, payload: error.message});
    }

};


export const cancelOrder =(orderId) => async (dispatch) =>{

    dispatch({type: CANCELED_ORDERS_REQUEST});

    try {
        const response = await api.put(`/api/admin/order/${orderId}/cancel`);
        const data = response.data;
        console.log("cancel order", data);
        dispatch({type:CANCELED_ORDERS_SUCCESS, payload:data})

    } catch (error) {
        dispatch({type:CANCELED_ORDERS_FAILURE, payload: error.message});
    }

};

export const deleteOrder = (orderId) => {
    return async(dispatch) => {
        dispatch({type: DELETE_ORDERS_REQUEST});

        try {
            const {data} = await api.delete(`/api/admin/order/${orderId}/delete`);
            console.log("delete order ", data);
            dispatch({type: DELETE_ORDERS_SUCCESS, payload:data});

        } catch (error) {
            console.log("catch error ", error);
            dispatch({type: DELETE_ORDERS_FAILURE, payload: error.message});
        }
    }
}