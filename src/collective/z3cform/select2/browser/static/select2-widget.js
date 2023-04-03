var initializeSelect2SingleWidget = function(obj, width) {
  if (typeof width === "undefined") {
      width = 'resolve';
  }

  var format = function(state) {
      var option = $(state.element);
      return '<span class="' + option.data('css') + '">' + state.text + '</span>';
  };

  jQuery(obj).select2({
      width: width,
      formatResult: format,
      formatSelection: format,
      escapeMarkup: function(m) { return m; }
  });
};

initializeSelect2Widgets = function(width) {
  if (typeof width === "undefined") {
      width = 'resolve';
  }

  jQuery('select.single-select2-widget').each(function() {
    if (jQuery(this).is(':visible') == true) {
      initializeSelect2SingleWidget($(this), width=width);
    } else {
      initializeSelect2SingleWidget($(this), width='20em');
    }
  });

  jQuery('select.multi-select2-widget').each(function() {
    if (jQuery(this).is(':visible') == true) {
      initializeSelect2SingleWidget($(this), width=width);
    } else {
      initializeSelect2SingleWidget($(this), width='20em');
    }
  });

};

jQuery(document).ready(initializeSelect2Widgets);
