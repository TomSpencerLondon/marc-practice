import fs from "fs";
import { createRecord, toFile } from "./createRecord";
let writeFile;

beforeEach(() => {
  writeFile = jest.spyOn(fs, 'writeFile').mockImplementationOnce(() => {});
});


describe("createRecord", () => {
  it("creates a record", () => {
    const result = createRecord();
    expect(result).toMatchSnapshot();
  });
});

describe("toFile", async () => {
  it("creates a marc file", async () => {
    await toFile();
    expect(writeFile).toHaveBeenCalled();
  });
});

