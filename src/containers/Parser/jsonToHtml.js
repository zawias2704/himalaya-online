import { stringify } from 'himalaya';
import prettifyHtml from 'prettify-html';
import * as cssbeautify from "cssbeautify";

const transformJsonIntoHtml = (input) => {
  let result = input;

  // remove "export default " if any
  result = result.replace('export default ', '');

  // use himalaya to transform json into html
  result = stringify(JSON.parse(result));

  // prettify the html code
  result = prettifyHtml(result);

  // if it's a css, then beautify it
  if (result.startsWith('<style>') && result.endsWith('</style>')) {
    result = result.replace('<style>', '');
    result = result.replace('</style>', '');
    result = cssbeautify(result, {
      indent: '  ',
      openbrace: 'separate-line',
      autosemicolon: true,
    });
    result = `<style>\n${result}\n</style>`;
  }

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
