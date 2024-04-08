import { produce } from "immer";

const Initial = {
    dataUser: [],
};

const Users = (state = Initial, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case "fetch-User":
                draft.dataUser = action.payload;
                return;
            default:
                return state;
        };
    });
};

export default Users
/*
switch (action.type) {
            // ===================get data
            case "product/fetching":
                draftState.isLoading = true
                break;
            case "product/fetchingSuccess":
                draftState.products = action.payload
                break;
            case "product/fetchingFailed":
                draftState.error = action.payload
                break;
            case "product/fetchingFinally":
                draftState.isLoading = false
                break;
            // ===================CUD data
            case "product/addProduct":
                
                draftState.products.push(action.payload.data);
                break;
            case "product/updateProduct":
                const product = action.payload.data
                draftState.products = draftState.products.map((item: any) => item.id === product.id ? product : item)
                // draftState.products[product.id] = product;
                break;
            case "product/deleteProduct":
                const id = action.payload;
                draftState.products = state.products.filter((item: any) => item.id !== id)
                break;
            default:
                return state;
*/