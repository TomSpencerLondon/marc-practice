import serializer from './serializer';

describe("serializer", () => {
  it("turns our test Marc file into a JS Marc object", async () => {
    const result = await serializer();
    expect(result).toMatchSnapshot();
  })
})
