(function ($, Drupal, drupalSettings) {
  'use strict';

  /**
   * Initialize image zoom functionality. DRUPAL10
   
  Drupal.behaviors.imagezoom = {
    attach: function (context, drupalSettings) {
      $('.imagezoom-image', context).once('imagezoom').each(function () {
        $(this).ezPlus(drupalSettings.imagezoom);
      });
    }
  };*/

  Drupal.behaviors.imagezoom = {
    attach: function (context, drupalSettings) {
      $(once('imagezoom', '.imagezoom-image', context)).each(function () {
        $(this).ezPlus(drupalSettings.imagezoom);
      });
    }
  };  

})(jQuery, Drupal, drupalSettings);
