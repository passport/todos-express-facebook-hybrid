window.addEventListener('load', function() {
  console.log('LOAD!')
  
  document.getElementById('siw-facebook').addEventListener('click', function(event) {
    console.log('SIW FACEBOOK!');
    
    event.preventDefault();
    
    var clientID = document.querySelector('meta[name="facebook-client-id"]').content;
    var redirectURI = 'http://localhost:3000/oauth2/redirect/facebook';
    var state = 'foo';
    
    var url = 'https://www.facebook.com/v3.2/dialog/oauth?'
      + 'response_type=code&'
      + 'client_id=' + encodeURIComponent(clientID) + '&'
      + 'redirect_uri=' + encodeURIComponent(redirectURI) + '&'
      + 'state=' + encodeURIComponent(state);
    
    window.open(url, 'name','height=200,width=150');
    
  });
  
  
  window.addEventListener('message', function(e) {
    console.log('signin: got message');
    console.log(e.data);
    
  });
  
});
