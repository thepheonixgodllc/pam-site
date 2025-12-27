(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const mobile = document.querySelector('[data-mobile-nav]');
  if(!btn || !mobile) return;

  btn.addEventListener('click', () => {
    const isOpen = mobile.style.display === 'block';
    mobile.style.display = isOpen ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
})();
