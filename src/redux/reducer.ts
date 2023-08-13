import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  CREATE_USERS_FAIL,
  CREATE_USERS_SUCCESS,
} from "./constants";

interface IUser {
  data: [] | any;
  loading: boolean;
  error: null | any;
}

const initialState: IUser = {
  data: [],
  loading: false,
  error: null,
};
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ALL_USERS_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CREATE_USERS_SUCCESS:
      // state.data.unshift(action.payload.data)
      console.log("state", state.data.data);
      console.log(action.payload.data);
      // state.data.data.unshift(action.payload.data);
      const newData = state.data;
      newData.unshift(action.payload.data);
      console.log(newData);

      return {
        ...state,
        loading: false,
        data1: newData,
        error: null,
      };

    case CREATE_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
