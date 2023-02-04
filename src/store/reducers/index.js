import { combineReducers } from "redux";

const initialState = {
  showMenu: false,
};

const showMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SHOW_MENU":
      return {
        ...state,
        showMenu: true,
      };
    case "CLOSE_SHOW_MENU":
      return {
        ...state,
        showMenu: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  showMenu: showMenuReducer,
});

export default rootReducer;
