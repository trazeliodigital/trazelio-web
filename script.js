(function(){
 const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.navlinks');
 if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
 const banner=document.querySelector('.cookie-banner'); if(!banner)return;
 const key='trazelio_cookie_choice_v1'; let saved=null; try{saved=localStorage.getItem(key)}catch(e){}
 if(!saved)banner.classList.add('show');
 const settings=document.querySelector('.cookie-settings');
 function save(choice){try{localStorage.setItem(key,JSON.stringify({choice:choice,at:new Date().toISOString()}))}catch(e){}banner.classList.remove('show');}
 document.querySelectorAll('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{
  const action=b.dataset.cookie;
  if(action==='settings'){settings.classList.toggle('show');return}
  if(action==='accept')save({necessary:true,analytics:true,marketing:true});
  if(action==='reject')save({necessary:true,analytics:false,marketing:false});
  if(action==='save'){const a=document.querySelector('#cookie-analytics').checked;const m=document.querySelector('#cookie-marketing').checked;save({necessary:true,analytics:a,marketing:m});}
 }));
 document.querySelectorAll('[data-open-cookies]').forEach(b=>b.addEventListener('click',()=>banner.classList.add('show')));
})();
