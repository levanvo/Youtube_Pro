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
                draft.dataChanels.push(action.payload);
                break;
            case "onde-Chanel":
                let idOne = action.payload;
                draft.dataChanels = draft.dataChanels.filter((items) => items._id == idOne)
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