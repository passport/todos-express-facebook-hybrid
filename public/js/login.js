window.addEventListener('load', function() {
  console.log('LOAD!')
  
  document.getElementById('siw-facebook').addEventListener('click', function(event) {
    console.log('SIW FACEBOOK!');
    
    event.preventDefault();
    
    var clientID = document.querySelector('meta[name="facebook-client-id"]').getAttribute('content');
    var redirectURI = 'http://localhost:3000/oauth2/redirect/facebook';
    var state = 'foo';
    
    var url = 'https://www.facebook.com/v3.2/dialog/oauth?'
      + 'response_type=code&'
      + 'client_id=' + encodeURIComponent(clientID) + '&'
      + 'redirect_uri=' + encodeURIComponent(redirectURI) + '&'
      + 'state=' + encodeURIComponent(state);
    
    window.open(url, '_login', 'top=' + (screen.height / 2 - 275) + ',left=' + (screen.width / 2 - 250) + ',width=500,height=550');
  });
  
  
  
  
  window.addEventListener('message', function(e) {
    console.log('signin: got message');
    console.log(e.data);
    
    if (e.data.type !== 'authorization_response') { return; }
    
    var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/oauth2/receive/facebook', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('CSRF-Token', csrfToken);
    
    xhr.onload = function() {
      console.log('Auth code response: ' + xhr.responseText);
      
      var json = JSON.parse(xhr.responseText);
      window.location.href = json.location;
    };
    xhr.send(JSON.stringify(e.data.response));
  });
  
});
