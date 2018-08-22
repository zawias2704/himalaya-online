import { stringify } from 'himalaya';

const jsonToHtml = (jsonString) => {
  let result;

  try {
    result = stringify(JSON.parse(jsonString))
  } catch (e) {
    result = 'Error! Root element must be an array.\n\nMessage:\n ' + e;
  }

  return result;
};

export default jsonToHtml;
