$("#projects").isotope({
  itemSelector: '.project', masonry: { columnWidth: $('.project')[0] },
  getSortData: { name: 'a' },
  sortBy: 'name'
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

