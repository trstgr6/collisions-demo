const isCollision = require("../collisionDetector").isCollision;
const createDto = require('../dto').createDto;
const testData = require("./support/testData").testData;

describe("Collision detected using same object for both arguments", () => {
  testData.forEach(elem => {
    it("Collision detected when arguments are same object", () => {
      expect(isCollision(elem, elem)).toBe(true);
    });
  });
});

describe("Collision not detected", () => {
  testData.forEach(elem => {
    it("Collision not detected when a above b", () => {
      const obj = createDto(0, elem.y + elem.height + 1, 0, 0);
      expect(isCollision(elem, obj)).toBe(false);
    });

    it("Collision not detected when a below b", () => {
      const obj = createDto(0, elem.y - 1, 0, 0);
      expect(isCollision(elem, obj)).toBe(false);
    });

    it("Collision not detected when a to the left of b", () => {
      const obj = createDto(elem.x - elem.width - 1, 0, 0, 0);
      expect(isCollision(elem, obj)).toBe(false);
    });

    it("Collision not detected when a to the right of b", () => {
      const obj = createDto(elem.x + elem.width + 1, 0, 0, 0);
      expect(isCollision(elem, obj)).toBe(false);
    });
  });
});