import fs from "fs";
import { MarcRecord } from '@natlibfi/marc-record';
import { ISO2709, AlephSequential, Text } from '@natlibfi/marc-record-serializers';
export const createRecord = () => {
  const record = new MarcRecord();
  record.leader = "00000cam^a22001817i^4500";

  record.insertField({
    tag: "001",
    value: "007045872"

  });

  return record;
};

export const toFile = () => {
  fs.writeFile('examples/__test-data/file.mrc', ISO2709.to(createRecord()), (err) => {
    if (err) {
      return console.log(err);
    };
  });
};
