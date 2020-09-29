import * as fs from "fs";
import { ISO2709 } from "@natlibfi/marc-record-serializers";

const reader = new ISO2709.Reader(fs.createReadStream("test-data/record.mrc"));

reader.on("data", (record) => console.log("data: ", record));
