var H5P = H5P || {};

H5P.InteractiveCode = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      code_snippet: 'var h5p="HELLO from H5P"; \n h5p";',
      programming_language: 'javascript'
    }, options);
    // Keep provided id.
    this.id = id;
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    var self = this;
    // Set class on container to identify it as an interactive code snippet
    // container.  Allows for styling later.
    $container.addClass("h5p-iteractivecode");

    // Create custom id
    var custom_id = "code-snippet-" + this.id;

    // Create eval variable to set language

    var eval_lable_lookup = {
      'javascript': 'eval-javascript',
      'python': 'eval-python-client',
      'ruby': 'eval-ruby',
      'cpp': 'eval-cpp',
      'php': 'eval-php',
      'sql': 'eval-sql'
    }

    var language = eval_lable_lookup[this.options.programming_language];

    // Add code snippet text.
    $container.append('<div class="code-snippet" id="' + custom_id + '">' + this.options.code_snippet + '</div>');

    //https://github.com/viebel/klipse/wiki/How-to-Klipsify-an-arbitrary-HTML-element
    var klipse_settings = {
      selector_eval_js: '.code-snippet', // css selector for the html elements you want to klipsify
    };
    klipse.plugin.klipsify(document.getElementById(custom_id), klipse_settings, language)

    //console.log(Object.keys(cljs.core.clj__GT_js(cljs.core.deref(klipse.common.registry.mode_options))));

  };

  return C;
})(H5P.jQuery);
