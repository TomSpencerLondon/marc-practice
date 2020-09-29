import {MarcRecord} from '@natlibfi/marc-record';
const record = new MarcRecord();

const demo = () => {
  const record = new MarcRecord();

  console.log(`outputting Marc-JS record: `, record);
  return record;
}

export default demo;
