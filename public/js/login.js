window.addEventListener('load', function() {
  
  document.getElementById('siw-facebook').addEventListener('click', function(event) {
    event.preventDefault();
    
    window.open(event.target.href + '?display=popup', '_login', 'top=' + (screen.height / 2 - 275) + ',left=' + (screen.width / 2 - 250) + ',width=500,height=550');
  });
  
});
