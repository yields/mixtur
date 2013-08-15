
/**
 * dependencies
 */

var parse = require('css-parse')
  , dom = require('cheerio');

/**
 * Export `mixture`
 */

module.exports = mixture;

/**
 * Mix the given `css` and `html`.
 *
 * @param {String} html
 * @param {String} css
 * @return {String}
 * @api public
 */

function mixture(html, css){
  var styl = parse(css).stylesheet
    , $ = dom.load(html);

  styl.rules.forEach(function(rule){
    $(rule.selectors.join(', ')).each(function(_, el){
      var styles = $(el).attr('style') || '';

      // add styles
      rule.declarations.forEach(function(decl){
        styles += ''
          + (styles ? ' ' : '')
          + decl.property
          + ': '
          + decl.value
          + ';';
      });

      // append
      $(el).attr('style', styles);
    });
  });

  // all done.
  return $.html();
};
