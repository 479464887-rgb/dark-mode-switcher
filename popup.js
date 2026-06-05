let on=false;const b=document.getElementById('toggle');
b.addEventListener('click',()=>{on=!on;b.textContent=on?'🌙 ON':'☀️ OFF';b.style.background=on?'#238636':'var(--surface)';
chrome.tabs.query({active:true,currentWindow:true},tabs=>{chrome.scripting.executeScript({target:{tabId:tabs[0].id},func:toggle,args:[on]})})});
function toggle(en){const id='dm-style';if(en){if(!document.getElementById(id)){const s=document.createElement('style');s.id=id;s.textContent='html{filter:invert(0.9)hue-rotate(180deg)!important}img,video,canvas{filter:invert(1)hue-rotate(180deg)!important}';document.head.appendChild(s)}}else{const s=document.getElementById(id);if(s)s.remove()}}
