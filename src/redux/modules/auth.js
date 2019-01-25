// Actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';
const SET_PROVIDER = 'SET_PROVIDER';

// Action Creators
function setLogIn(token) {
  return {
    type: LOG_IN,
    token
  };
}

function logout() {
  return {
    type: LOG_OUT
  };
}

function setProvider(provider) {
  return {
    type: SET_PROVIDER,
    provider
  };
}

// API Actions
function socialLogin(userInfo, socialProvider) {
  return (dispatch) => {
    console.log(userInfo);

    const token = 'Career Talk Token';

    dispatch(setProvider(socialProvider));
    dispatch(setLogIn(token));

    return true;
  };
}

// Initial State
const initialState = {
  isLoggedIn: false,
  socialProvider: ''
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_PROVIDER:
      return applySetProvider(state, action);
    default:
      return state;
  }
}

// Reducer Functions
function applyLogIn(state, action) {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogOut() {
  return {
    isLoggedIn: false,
    token: ''
  };
}

function applySetProvider(state, action) {
  const { provider } = action;
  return {
    ...state,
    socialProvider: provider
  };
}

// Exports

const actionCreators = {
  socialLogin,
  logout
};

export { actionCreators };

// Default Reducer Export
export default reducer;
