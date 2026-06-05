// Dark Mode Switcher Popup
document.addEventListener("DOMContentLoaded",()=>{
  chrome.storage.local.get(["pro"],d=>{
    const b=document.getElementById("upgrade-btn");
    if(d.pro){b.textContent="Pro \u2713";b.disabled=true;b.style.background="#30363d";}
  });
});
