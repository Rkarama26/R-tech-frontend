import { api, API_BASE_URL } from "../../Config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

export const createOrder = (reqData) => async (dispatch) => {
    console.log("reqData", reqData);
    const { address, navigate, setActiveStep } = reqData;

    dispatch({ type: CREATE_ORDER_REQUEST });

    try {
        const { data } = await api.post(`/api/orders/`, address);

        if (data.id) {
            console.log("id is -- ", data.id);
            navigate({ search: `?step=3&order_id=${data.id}` });
        }

        console.log("created order - ", data);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });
        setActiveStep(3);


    } catch (error) {
       
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });

    }

};

export const getOrderById = (orderId) => async (dispatch) => {
    console.log("get order req: ", orderId);
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });

    try {

        const { data } = await api.get(`/api/orders/${orderId}`);

        console.log("order by id: ", data);
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });
    }
    catch (error) {
        console.log("catch ", error)
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message
        });
    }

};
