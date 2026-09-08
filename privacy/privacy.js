const checkbox=document.getElementById('enabled'),status=document.getElementById('preference-status');
const key='arcade-analytics-disabled';
function refresh(){
 if(navigator.globalPrivacyControl||navigator.doNotTrack==='1'){checkbox.checked=false;checkbox.disabled=true;status.textContent='Analytics is off because your browser sends a privacy signal.';return;}
 try{checkbox.checked=localStorage.getItem(key)!=='1';status.textContent=checkbox.checked?'Analytics is on for this browser.':'Analytics is off for this browser. Your games still work the same way.';}
 catch{checkbox.disabled=true;status.textContent='This browser blocks preference storage. You can disable collection using its Global Privacy Control or Do Not Track setting.';}
}
checkbox.addEventListener('change',()=>{try{localStorage.setItem(key,checkbox.checked?'0':'1');refresh();}catch{status.textContent='The browser could not save this preference.';}});
addEventListener('storage',e=>{if(e.key===key)refresh();});refresh();
