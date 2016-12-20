const helpers = require("../helpers")
let dateParser = helpers.dateParser;

describe("helpers", function () {
  it("dateParser can parse a datestring as weekday", function () {
    expect(dateParser("18Mar2009(wed)")).toEqual("weekday");
  });
  it("dateParser can parse a datestring as weekend", function () {
    expect(dateParser("15Mar2009(sun)")).toEqual("weekend");
  });
});
