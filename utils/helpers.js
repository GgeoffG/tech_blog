module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  equal: (a, b) => {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  },
};
