//action types
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const INCREASE_QTY = "INCREASE_QTY";
const DECREASE_QTY = "DECREASE_QTY";

//action creators
const _addItem = (item) => {
    return {
        type: ADD_ITEM,
        item,
    };
};

const _deleteItem = (item) => {
    return {
        type: DELETE_ITEM,
        item,
    };
};

const _increaseQty = num => {
    return {
        type: INCREASE_QTY,
        num,
    };
};

const _decreaseQty = num => {
    return {
        type: DECREASE_QTY,
        num,
    };
};

const initialState = {
    test: {
        food,
        price,
        quantity
    }
}
//thunk
export const addedItems = (id) => {
    return async (dispatch, getState)
}

//reducer
export const itemsReducer = (state = initialState, action) => {
    return state
}