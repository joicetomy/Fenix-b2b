const isListNotEmpty = list => {
  if (list && Array.isArray(list) && list.length > 0) {
    return true;
  }
  return false;
};

const isListEmpty = list => {
  if (!list) {
    return true;
  }
  if (!Array.isArray(list) || list.length === 0) {
    return true;
  }
  return false;
};



module.exports = {
  isListNotEmpty,
  isListEmpty,
};
