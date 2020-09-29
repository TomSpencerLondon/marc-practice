import demo from "./demo";

describe("happy path", () => {
  it("is sane", () => {
    expect(true).toBe(true);
  });

  it("is able to import another file", () => {
    expect(demo()).toBe(true);
  })
})
