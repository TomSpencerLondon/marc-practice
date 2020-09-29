import demo from "./file";

describe("file", () => {
  it("returns as a record", () => {
    const result = demo();
    expect(result).toMatchSnapshot();
  })
})

