$(function () {
  var approachingBottomOfPage, content, isLoadingNextPage, lastLoadAt, loadNextPageAt, minTimeBetweenPages, nextPage, viewMore, waitedLongEnoughBetweenPages;
  content = $('#content');
  viewMore = $('#view-more');
  isLoadingNextPage = false;
  lastLoadAt = null;
  minTimeBetweenPages = 2000;
  loadNextPageAt = 150;
  waitedLongEnoughBetweenPages = function () {
    return lastLoadAt === null || new Date() - lastLoadAt > minTimeBetweenPages;
  };
  approachingBottomOfPage = function () {
    console.log('document.documentElement.clientHeight + $(document).scrollTop()', document.documentElement.clientHeight + $(document).scrollTop())
    console.log('document.body.offsetHeight - loadNextPageAt', document.body.offsetHeight - loadNextPageAt)
    return document.documentElement.clientHeight + $(document).scrollTop() > document.body.offsetHeight - loadNextPageAt;
  };
  nextPage = function () {
    var url;
    url = viewMore.find('a').attr('href');
    if (isLoadingNextPage || !url) {
      return;
    }
    viewMore.addClass('loading');
    isLoadingNextPage = true;
    lastLoadAt = new Date();
    return $.ajax({
      url: url,
      method: 'GET',
      dataType: 'script',
      success: function () {
        viewMore.removeClass('loading');
        isLoadingNextPage = false;
        return lastLoadAt = new Date();
      }
    });
  };
  $(window).scroll(function () {
    if (approachingBottomOfPage() && waitedLongEnoughBetweenPages()) {
      console.log('LOADING!!!!!!!!!!!!!!!!!!!!!!!')
      return nextPage();
    }
  });
  return viewMore.find('a').click(function (e) {
    nextPage();
    return e.preventDefault();
  });
});
