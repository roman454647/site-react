export default (type, err) => (
  {
    type,
    payload: err.response.data,
  }
);
