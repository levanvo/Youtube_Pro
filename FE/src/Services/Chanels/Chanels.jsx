import { produce } from "immer";

const Initial = {
    dataChanels: [],
};

const Chanels = (state = Initial, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case "fetch-Chanels":
                draft.dataChanels = action.payload;
                return;
            case "add-Chanels":
                draft.dataChanels.push(action.payload.data);
                break;
            case "remove-Chanels":
                const id = action.payload;
                draft.dataChanels=draft.dataChanels.filter((items)=>items != id)
                break;
            default:
                return state;
        };
    });
};

export default Chanels