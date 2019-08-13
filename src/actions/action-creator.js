exports.makeActionCreator = (type) =>{
  const action = type.catch(err => {
      dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      });
  });
  return action
}
