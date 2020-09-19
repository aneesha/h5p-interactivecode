var H5P = H5P || {};

H5P.InteractiveCode = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      code_snippet: 'var h5p="HELLO from H5P";',
      programming_language: 'javascript'
    }, options);
    // Keep provided id.
    this.id = id;

    window.klipse_settings = {
      selector_eval_js: '.code-snippet', // css selector for the html elements you want to klipsify
    };
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    var self = this;
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-iteractivecode");

    // Add code snippet text.
    $container.append('<div class="code-snippet">```eval-js\n' + this.options.code_snippet + '\n```</div>');


    console.log(klipse);
    klipse.klipsify;

  };

  return C;
})(H5P.jQuery);
