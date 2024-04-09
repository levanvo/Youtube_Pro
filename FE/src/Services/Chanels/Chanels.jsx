import { produce } from "immer";

const Initial = {
    dataChanels: [],
};

const Chanels = (state = Initial, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case "fetch-Chanel":
                draft.dataChanels = action.payload;
                return;
            case "add-Chanel":
                let dataAdd = action.payload;
                const dataAdd_ = dataAdd.data.dataChanel
                draft.dataChanels.push(dataAdd_);
                break;
            case "onde-Chanel":
                let idOne = action.payload;
                draft.dataChanels = draft.dataChanels.filter((items) => items._id == idOne)
                break;
            case "actice-Chanel":
                const { data } = action.payload;
                const { dataUpdate } = data;
                draft.dataChanels = draft.dataChanels.map((items) => items._id == dataUpdate._id ? items = dataUpdate : items);
                break;
            case "remove-Chanel":
                const idRemove = action.payload;
                draft.dataChanels = draft.dataChanels.filter((items) => items._id != idRemove)
                break;
            default:
                return state;
        };
    });
};

export default Chanels