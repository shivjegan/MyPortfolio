let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
let l=document.getElementById('l');
let a=[];
b1.addEventListener('click', function()
{
   a.push(t1.value);
   let str="";
   t1.value="";
   for(i=0;i<a.length;i++)
   {
   str+=`<li>${a[i]}</li>`
   console.log(a);
   }
   console.log(str)
   l.innerHTML=str;
})
