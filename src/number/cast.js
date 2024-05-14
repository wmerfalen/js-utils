const cast_fn = (x) => parseInt(x,10);
const cast_float_fn = (x) => parseFloat(x,10);
module.exports = {
  cast_to_int: (x) => {
    if(Array.isArray(x)){
      return x.map(cast_fn);
    }
    return cast_fn(x);
  },
  cast_to_float: (x) => {
    if(Array.isArray(x)){
      return x.map(cast_float_fn);
    }
    return cast_float_fn(x);
  },
};
