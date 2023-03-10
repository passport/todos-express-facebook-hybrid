function parseQuery(queryString) {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

window.addEventListener('load', function() {
  
  var response = parseQuery(window.location.search);
  window.opener.postMessage({
    type: 'authorization_response',
    response: response
  }, 'http://localhost:3000');
  
});
