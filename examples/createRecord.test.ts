import demo from "./createRecord";

describe("createRecord", () => {
  it("creates a record", () => {
    const result = demo();
    expect(result).toMatchSnapshot();
  })
})

