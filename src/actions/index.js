import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: res });
};

//bad approach (using this async await method without any middlewares )
// Actions must be plain objects. Instead, the actual type was: 'Promise'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.
