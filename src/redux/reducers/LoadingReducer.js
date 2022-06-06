const initialState = {
  isloading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_LOADING":
      state.isloading = true;
      return { ...state };
    case "HIDE_LOADING":
      state.isloading = false;
      return { ...state };

    default:
      return state;
  }
};
