import serializer from './readMarc';

describe("readMarc", () => {
  it("turns our test Marc file into a JS Marc object", async () => {
    const result = await serializer();
    expect(result).toMatchSnapshot();
  })
})
