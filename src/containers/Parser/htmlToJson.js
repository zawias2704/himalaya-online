import { parse } from 'himalaya';

const htmlToJson = (htmlString) => {
  return JSON.stringify(parse(htmlString), null, 2);
};

export default htmlToJson;
