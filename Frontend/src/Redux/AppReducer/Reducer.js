import * as types from "./ActionTypes";
const InitialData = {
  userData: [],
  isLoading: false,
  isError: false,
};

function Reducer(state = InitialData, action) {
  const { payload, type } = action;
  switch (type) {
    case types.GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userData: payload,
        isError: false,
      };
    }

    case types.GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        userData: [],
        isError: true,
      };
    }

    case types.POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        userData: [],
        isError: true,
      };
    }

    case types.DELETE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.DELETE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userData: [],
        isError: false,
      };
    }

    case types.DELETE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        userData: [],
        isError: true,
      };
    }
    default:
      return state;
  }
}
export { Reducer };
