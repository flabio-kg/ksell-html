'use strict';

$(document).ready(function () {

  // form
  $('input').click(function () {
    $('input').parent().removeClass("active");
    $(this).parent().addClass('active');
  });
  // form end
});