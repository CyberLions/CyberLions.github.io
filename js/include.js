$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = '/html/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});