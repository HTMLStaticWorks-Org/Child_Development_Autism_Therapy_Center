
(()=>{let b=document.body,t=localStorage.getItem('bp-theme');if(t)b.dataset.theme=t;
document.querySelectorAll('[data-theme-toggle]').forEach(x=>x.onclick=()=>{b.dataset.theme=b.dataset.theme==='dark'?'light':'dark';localStorage.setItem('bp-theme',b.dataset.theme)});
document.querySelectorAll('[data-rtl-toggle]').forEach(x=>x.onclick=()=>{b.classList.toggle('rtl');localStorage.setItem('bp-rtl',b.classList.contains('rtl')?'1':'0')});if(localStorage.getItem('bp-rtl')==='1')b.classList.add('rtl');
let m=document.querySelector('.menu-btn'),n=document.querySelector('.nav-links');if(m&&n)m.onclick=()=>n.classList.toggle('open');
document.querySelectorAll('[data-demo-form]').forEach(f=>f.onsubmit=e=>{e.preventDefault();let p=f.querySelector('[data-message]');if(p)p.textContent='Thank you! Demo form submitted locally. Connect a backend to receive messages.';f.reset()});
let f=document.querySelector('[data-booking]');function render(){let el=document.querySelector('[data-bookings]');if(!el)return;let a=JSON.parse(localStorage.getItem('bp-bookings')||'[]');el.innerHTML=a.length?a.map(x=>`<tr><td>${x.child}</td><td>${x.therapy}</td><td>${x.date}</td><td>Requested</td></tr>`).join(''):'<tr><td colspan="4">No session requests yet.</td></tr>'}
if(f)f.onsubmit=e=>{e.preventDefault();let x=Object.fromEntries(new FormData(f)),a=JSON.parse(localStorage.getItem('bp-bookings')||'[]');a.push(x);localStorage.setItem('bp-bookings',JSON.stringify(a));document.querySelector('[data-bookmsg]').textContent='Request saved in this browser.';f.reset();render()};render();
let pay=document.querySelector('[data-pay]');if(pay)pay.onclick=()=>alert('Demo only. Connect a secure payment gateway before accepting payments.');
})();
