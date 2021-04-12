export const SAVE_USER_AND_TOKEN = "SAVE_USER_AND_TOKEN";
export const CLEAR_USER_AND_TOKEN = "CLEAR_USER_AND_TOKEN";

export const saveUserAndToken = (user, token) => {
  return {
    type: SAVE_USER_AND_TOKEN,
    payload: {
      user,
      token,
    },
  };
};

export const clearUserAndToken = () => {
  return {
    type: CLEAR_USER_AND_TOKEN,
  };
};
