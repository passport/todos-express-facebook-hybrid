window.addEventListener('load', function() {
  
  document.getElementById('siw-facebook').addEventListener('click', function(event) {
    event.preventDefault();
    
    window.open('/login/federated/facebook', '_login', 'top=' + (screen.height / 2 - 275) + ',left=' + (screen.width / 2 - 250) + ',width=500,height=550');
  });
  
  window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) { return; }
    if (event.data.type !== 'authorization_response') { return; }
    
    event.source.close();
    
    var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/oauth2/receive/facebook', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('CSRF-Token', csrfToken);
    xhr.onload = function() {
      var json = JSON.parse(xhr.responseText);
      window.location.href = json.location;
    };
    xhr.send(JSON.stringify(event.data.response));
  });
  
});
