let Util = module.exports;
Util.xtract = function (obj, schema, justCheck = false) {
  if (schema === null) {
    return null;
  }
  let parts = null;
  if (Array.isArray(schema)) {
    parts = schema;
  } else {
    let matches = schema.match(/\^([0-9]+)$/);
    if (matches) {
      const index = matches[1];
      if (Array.isArray(obj) && obj.length > index) {
        if (justCheck) {
          return true;
        }
        return obj[index];
      }
      return null;
    }
    parts = schema.split('.');
  }
  let level = obj;
  for (let i = 0; i < parts.length; i += 1) {
    let key = parts[i];
    if (Array.isArray(level)) {
      let index = parseInt(key);
      if (index === -1) {
        return null;
      }
      if (index < level.length) {
        if (justCheck && index + 1 === level.length) {
          return true;
        }
        level = level[index];
        continue;
      }
    } else if (typeof level === 'object' && level !== null) {
      if (typeof level[key] === 'undefined') {
        return null;
      }
      if (justCheck && i + 1 === parts.length) {
        return true;
      }
      level = level[key];
      continue;
    }
  }
  return level;
};

Util.has = function (obj, schema) {
  if (Array.isArray(schema)) {
    for (let pattern of schema) {
      if (Util.xtract(obj, pattern, true)) {
        continue;
      }
      return false;
    }
    return true;
  }
  return !!Util.xtract(obj, schema, true);
};
