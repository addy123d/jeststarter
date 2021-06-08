const sum = require("./sum");


test("Adds two number", () => {
    expect(
        sum(2, 3)
    ).toBe(5);
})