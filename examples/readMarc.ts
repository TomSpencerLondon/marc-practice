import * as fs from "fs";
import { ISO2709 } from "@natlibfi/marc-record-serializers";

const readMarc = async () => {
  const data = new Promise((resolve) => {
    const reader = new ISO2709.Reader(
      fs.createReadStream("examples/__test-data/record.mrc")
    );

    reader.on("data", (r) => {
      resolve(r);
    });
  });
  return data;
};

export default readMarc;
