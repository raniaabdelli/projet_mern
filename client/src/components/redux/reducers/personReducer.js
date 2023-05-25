const { GET_PERSON } = require("../actions/Type");

const personReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_PERSON:
      return payload;
    default:
      return state;
  }
};

export default personReducer;
