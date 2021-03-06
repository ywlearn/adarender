'use strict';

const yaml = require('js-yaml');
const {compileString} = require('../../handlebarsutils');
const path = require('path');
const fs = require('fs');

const tmpbuf = fs.readFileSync(path.join(__dirname, 'template.hbs'));
const template = compileString(tmpbuf.toString());

/**
 * renderTable - render for table
 * @param {string} content - token.content
 * @return {string} str - HTML string
 */
function renderTable(content) {
  try {
    const table = yaml.safeLoad(content);
    if (table) {
      const html = template(table);

      return html;
    }
  } catch (err) {

  }

  return '';
}

/**
 * markdownitAdaTable
 * @param {object} md - MarkdownIt
 * @param {object} config - {input, output, onlyname, vfs}
 */
function markdownitAdaTable(md, config) {
  config = config || {};

  const oldRule = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const info = token.info.trim();
    if (info === 'ada.table') {
      return renderTable(token.content);
    }

    return oldRule(tokens, idx, options, env, slf);
  };
}

module.exports = markdownitAdaTable;
