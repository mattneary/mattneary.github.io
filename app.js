$("#projects").isotope({
  itemSelector: '.project', masonry: { isFitWidth: true },
  getSortData: { name: 'a' },
  sortBy: 'name'
});
function repositionName() {
  var isSimple = $('body').is('.simple') || $('header .name').css('position') == 'relative';
  if (!isSimple) {
    $('header .name a').text('x');
    $('header .name a').css('padding-left', $('#projects').css('margin-left'));
  } else {
    $('header .name a').text('Matt Neary');
    $('header .name a').css('padding-left', 0);
  }
}
$("#show-collection, header .name a").click(function (evt) {
  evt.preventDefault();
  $('html, body').toggleClass('simple');
  repositionName();
});
$(window).resize(function () {
  repositionName();
});
$("nav a").click(function (evt) {
  evt.preventDefault();
  var li = $(this).parents('li');
  if (li.is('.active')) {
    li.removeClass('active');
    li.parents('.skills').removeClass('active');
    $("#projects").isotope({ filter: '*' });
  } else {
    li.siblings().removeClass('active');
    li.parents('.skills').addClass('active');
    li.addClass('active');
    $("#projects").isotope({ filter: $(this).attr('href').replace(/^#/, '.') });
  }
  repositionName();
});
$(".project").hover(function (evt) {
  $(this).addClass('open');
}, function (evt) {
  $(this).removeClass('open');
});
$(".project").click(function (evt) {
  if ($(this).is('.init')) {
    $(this).toggleClass('open');
  } else {
    $(this).addClass('open');
    $(this).addClass('init');
  }
});
$(".project a").click(function (evt) {
  evt.stopPropagation();
});

(function(i,s,o,g,r,a,m){
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function(){
    (i[r].q=i[r].q||[]).push(arguments)
  }, i[r].l = 1*new Date();
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a,m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-49154204-1', 'mattneary.com');
ga('send', 'pageview');

