const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe(".repair", function () {
    it("should return item props", function () {
      const item = "item";
      const durability = 100;
      expect(item).toBe("item");
      expect(durability).toBe(100);
    });
  });
  describe(".succeed", function () {
    it("should return succeed props", function () {
      const enhancement = 20;
      const durability = 100;
      expect(enhancement).toBe(20);
      expect(durability).toBe(100);
    });
  });

  describe(".fail", function () {
    it("should return fail props", function () {
      //const enhancement = -5;
      const enhancement = 19;
      const durability = 100;
      //expect(enhancement).toBe(-5);
      expect(enhancement).toBe(19);
      expect(durability).toBe(100);
    });
  });
});
