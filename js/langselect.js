$('.language').each(function () {
  $(this).find('> .select').on('click', function () {
    $(this).next().slideToggle();
  });
  $(this).find('.option').on('click', function () {
    $('.language > .select').html($(this).html()).next().slideUp();
  });
});