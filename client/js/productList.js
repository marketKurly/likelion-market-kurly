$('.accordion--set__head').click(function () {
  if (
    $(this).find('.accordion--set__body').is(':visible')
  ) {
    $(this).find('.accordion--set__body').stop().slideUp();
  } else {
    $(this)
      .find('.accordion--set__body')
      .stop()
      .slideDown();
  }
});
