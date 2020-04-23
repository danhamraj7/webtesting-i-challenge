module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item, enhancement, durability) {
  if (enhancement == 20) {
    durability = durability;
  } else if (enhancement < 20) {
    enhancement++;
  }
  return (item = enhancement && durability);
}

function fail(item, enhancement, durability) {
  if (enhancement < 15) {
    durability - 5;
  } else if (enhancement > 15) {
    durability - 10;
  } else if (enhancement > 16) {
    durability++;
  }
  return (item = enhancement && durability);
}

function repair(item, durability) {
  return item((durability = 100));
}

function get(item) {
  return { ...item };
}
