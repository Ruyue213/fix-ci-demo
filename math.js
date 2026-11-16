function applyDiscount(price, percent) {
  return price * (1 - percent);
}

module.exports = { applyDiscount };
