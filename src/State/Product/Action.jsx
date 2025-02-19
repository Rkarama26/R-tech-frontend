import { api } from "../../Config/apiConfig";
import { CREATE_PRODUCTS_FAILURE, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_CATEGORY_FAILURE, FIND_PRODUCT_BY_CATEGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProduct = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST })
    const {
        //  category = "arduino",
        category,
        minPrice,
        maxPrice,
        minDiscount,
        sort,
        stock,
        pageNumber,
        pageSize

    } = reqData;
    try {

        const { data } = await api.get(`/api/products?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
        console.log("product data: ", data);

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })

    }
};

export const findProductById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const { productId } = reqData;
    console.log("product id------", productId);


    try {

        const { data } = await api.get(`/api/products/id/${productId}`);
        console.log("data----", data);


        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })

    }
};

export const findProductByCategory = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_CATEGORY_REQUEST });
    const { category } = reqData;
    console.log("Fetching products for category:", category);

    try {
        const { data } = await api.get(`/api/products/${category}`);
        console.log("API Response Data:", data); // Debugging

        dispatch({ type: FIND_PRODUCT_BY_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        console.error("API Fetch Error:", error);
        dispatch({ type: FIND_PRODUCT_BY_CATEGORY_FAILURE, payload: error.message });
    }
};


export const createProduct = (product) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCTS_REQUEST })
    console.log("product created------", product);

    try {
        const { data } = await api.post(`/api/admin/products/create`, product);
        console.log("created product----", data);
        dispatch({
            type: CREATE_PRODUCTS_SUCCESS,
            payload: data,
        })

        dispatch({ type: CREATE_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_PRODUCTS_FAILURE, payload: error.message })

    }
};


export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCTS_REQUEST })
    console.log("product id------", productId);

    try {//admin/products/404/delete
        const { data } = await api.delete(`/api/admin/products/${productId}/delete`);
        console.log("delete product----", data);
        dispatch({
            type: DELETE_PRODUCTS_SUCCESS,
            payload: productId,
        })

        dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELETE_PRODUCTS_FAILURE, payload: error.message })

    }
};



