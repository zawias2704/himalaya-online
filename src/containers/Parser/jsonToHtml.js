import { stringify } from 'himalaya';
import prettifyHtml from 'prettify-html';

const transformJsonIntoHtml = (input) => {
  let result = input;

  // remove "export default " if any
  result = result.replace('export default ', '');

  // use himalaya to transform json into html
  result = stringify(JSON.parse(result));

  // prettify the html code
  result = prettifyHtml(result);

  return result;
};

const jsonToHtml = (jsonString) => {
  let result;

  try {
    result = transformJsonIntoHtml(jsonString);
  } catch (e) {
    result = 'Error! Root element must be an array.\n\nMessage:\n ' + e;
  }

  return result;
};

export default jsonToHtml;
