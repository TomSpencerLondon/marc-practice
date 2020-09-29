import {MarcRecord} from '@natlibfi/marc-record';
const record = new MarcRecord();

const demo = () => {
  const record = new MarcRecord();
  console.log("this is a record: ", record);
  return true;
}

export default demo;
