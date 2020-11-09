const createDto = require('../dto').createDto;
const testData = require("./support/testData").testData;

describe("Collision DTO object creation tests", () => {

  testData.forEach((elem) => {
    it("Constructs object with correct x property, using (" + elem + ")", () => {
      const obj = createDto(elem.x, elem.y, elem.height, elem.width);
      expect(obj.x).toBe(elem.x);
    });
    
    it("Constructs object with correct y property, using (" + elem + ")", () => {
      const obj = createDto(elem.x, elem.y, elem.height, elem.width);
      expect(obj.y).toBe(elem.y);
    });
    
    it("Constructs object with correct height property, using (" + elem + ")", () => {
      const obj = createDto(elem.x, elem.y, elem.height, elem.width);
      expect(obj.height).toBe(elem.height);
    });
    
    it("Constructs object with correct width property, using (" + elem + ")", () => {
      const obj = createDto(elem.x, elem.y, elem.height, elem.width);
      expect(obj.width).toBe(elem.width);
    });
  });
});