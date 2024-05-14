const trim_fn = (x) => String(x).replace(/^[\s]+/,'').replace(/[\s]+$/,'');
const left_trim_fn = (x) => String(x).replace(/^[\s]+/,'');
const right_trim_fn = (x) => String(x).replace(/[\s]+$/,'');
module.exports = {
  trim: (x) => {
    if(Array.isArray(x)){
      return x.map(trim_fn);
    }
    return trim_fn(x);
  },
  ltrim: (x) => {
    if(Array.isArray(x)){
      return x.map(left_trim_fn);
    }
    return left_trim_fn(x);
  },
  rtrim: (x) => {
    if(Array.isArray(x)){
      return x.map(right_trim_fn);
    }
    return right_trim_fn(x);
  },
};
