const cloneArray = require("./cloneArray");

test("Clones Array", () => {
    const array = [1, 2, 3];

    expect(
        cloneArray(array)
    ).toEqual(array);
})