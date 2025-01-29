let inc=document.getElementById('inc');
const b1=document.getElementById('b1');
const b2=document.getElementById('b2');
const b3=document.getElementById('b3');
const p=document.getElementById('p');
let count=0;
b1.addEventListener('click', function()
{
    count++;
   inc.textContent= count;
})

b2.addEventListener('click',function()
{
    let str=`${count}-`;
    inc.textContent=0;
    count=0;
    p.textContent+=str

})

b3.addEventListener('click', function()
{
    count=0;
   inc.textContent= 0;
})
