(function(){
  var btn = document.querySelector('.hamburger');
  var overlay = document.getElementById('overlay');
  if(!btn || !overlay) return;

  function setOpen(open){
    btn.setAttribute('aria-expanded', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', function(){
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  overlay.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') setOpen(false);
  });
})();