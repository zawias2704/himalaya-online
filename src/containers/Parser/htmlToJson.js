import { parse } from 'himalaya';

const htmlToJson = (htmlString) => {
  let result = htmlString;

  // remove all newlines
  result = result.replace(/(\r\n|\n|\r)/gm, '');

  // remove 2+ consecutive whitespaces
  result = result.replace(/\s+/g," ");

  // remove spacing between tags
  result = result.replace(/> </g,"><");

  // parse with himalaya
  result = parse(result);

  // stringify (2 spaces align)
  result = JSON.stringify(result, null, 2);

  return result;
};

export default htmlToJson;
