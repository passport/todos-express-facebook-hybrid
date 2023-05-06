window.addEventListener('load', function() {
  
  var returnTo = document.querySelector('meta[name="return-to"]').getAttribute('content');
  
  window.opener.location.href = returnTo;
  window.close();
  
});
