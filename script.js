// Created Using Easy HTML v1.4.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

const deg =  6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#min');
const sc = document.querySelector('#sec');
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;

  mn.style.transform = `rotateZ(${mm}deg)`;

  sc.style.transform = `rotateZ(${ss}deg)`;
  
});
 const showTime = ()=>{
   let day = new Date();
  let h = day.getHours();
  let m = day.getMinutes() ;
  let s = day.getSeconds();
  session = "AM";
   if(h > 12){
     h =h-12;
     session = "PM";
     }
   
   h = (h<10) ? "0" + h:h;
   
   m = (m<10) ? "0" + m:m;
   s = (s<10) ? "0" + s:s;
   digitalTime = h + ":" + m + " " + session;
   
  document.getElementById('time').textContent = digitalTime;
   setTimeout(showTime,1000);
   };
showTime();
