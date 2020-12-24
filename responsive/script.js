let gnb_menu_flag = false;
window.addEventListener('load', ()=>{
  const gnbMenu = document.querySelector('.gnb_menu');
  const nav = document.querySelector('nav');
  gnbMenu.addEventListener('click', ()=>{
    gnb_menu_flag = !gnb_menu_flag;
    nav.style.display=gnb_menu_flag ? "block":"none";
  });
});