import {
    LOADING_DATA,
    LOAD_DATA,
    ADD_DATA,
    DELETE_DATA,
    EDIT_DATA,
  } from "../action/actionType";
  
  const initialState = {
    data: [],
    isLoading: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOADING_DATA: {
        return {
          ...state,
          isLoading: action.payload,
        };
      }
  
      case LOAD_DATA: {
        return {
          ...state,
          data: action.payload,
        };
      }
  
      case ADD_DATA: {
        return {
          ...state,
          data: state.data.concat(action.payload),
        };
      }
  
      case DELETE_DATA: {
        return {
          ...state,
          data: state.data.filter((datas) => {
            return datas.id !== action.payload;
          }),
        };
      }
  
      case EDIT_DATA: {
        const index = state.data.findIndex(
          (datas) => datas.id === action.payload.id
        );
        const newdata = [...state.data];
        newdata[index] = action.payload;
  
        return {
          ...state,
          data: newdata,
        };
      }
  
      default:
        return {
            ...state
        }
    }
  };
  